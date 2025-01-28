import { createPublicClient, createTestClient, formatUnits, Hex, publicActions, PublicClient, TestClient, WatchEventReturnType } from "viem";
import { AccountClientManager, deployFtkContract, deployTandaPayContract, distributeFtk, getAccountClientManagers, getFtkContract, PRIVATE_KEYS, TEST_CHAIN, TEST_TRANSPORT } from "./test_helpers.test";
import { MemberStatus, WriteableClient } from "../../contract_managers/types";
import { after } from "node:test";

let ftkAddr: Hex;
let tpAddr: Hex;
let acms: ReturnType<typeof getAccountClientManagers>;
let testClient: TestClient;
let publicClient: PublicClient;

let acmThatDoesntPay: AccountClientManager<WriteableClient>;
let acmThatMakesAClaim: AccountClientManager<WriteableClient>;

const total_coverage: bigint = 150n * (10n * 18n);
const base_premium: bigint = total_coverage / 15n;
const approvalAmount: bigint = total_coverage * 1000n;
//let unwatch: WatchEventReturnType;

beforeAll(async () => {
    // deploy the ftk token and tandapay contracts
    acms = getAccountClientManagers();
    ftkAddr = await deployFtkContract(acms[0].account); 
    tpAddr = await deployTandaPayContract(acms[0].account, ftkAddr);

    // distribute FTK to everyone. Should do 1M FTK by default
    await distributeFtk(ftkAddr, acms);

    // regenerate ACMs but populate tp managers
    acms = getAccountClientManagers(PRIVATE_KEYS, tpAddr);

    // create subgroups and assign members to them
    for (let i = 0; i < 3; i++) {
        // create a subgroup
        await acms[0].tpManager?.write.secretary?.createSubGroup();
        // add 5 members to that subgroup
        for (let j = 0; j < 5; j++) {
            let memberId = (i * 5) + j;
            // secretary must add the member to the community
            await acms[0].tpManager?.write.secretary?.addMemberToCommunity(acms[memberId].account.address);
            // assign to subgroup. subgroup indices start at 1
            await acms[0].tpManager?.write.secretary?.assignMemberToSubgroup(acms[memberId].account.address, BigInt(i+1), false);
            // have member accept assignment (actually they need to do jointoCommunity first?)
            //* NOTE: we nolonger have them approve their subgroup assignments in the initialization period, that's not how it works
            // await acms[memberId].tpManager?.write.member?.approveSubgroupAssignment(true);
        }
    }

    await acms[0].tpManager?.write.secretary?.initiateDefaultState(total_coverage);
    testClient = createTestClient({
        chain: TEST_CHAIN,
        mode: 'anvil',
        transport: TEST_TRANSPORT,
    });

    publicClient = createPublicClient({
        chain: TEST_CHAIN,
        transport: TEST_TRANSPORT,
    });

    acmThatMakesAClaim = acms[1];
    acmThatDoesntPay = acms[2];

   // unwatch = acms[0].tpManager?.eventsCI.watchEvent.AddedToCommunity({
   //     onLogs: () => console.log("added to community event"),
   // }) ?? fail("watcher failed");
});

afterAll(async () => {
    //setTimeout(unwatch, 5000);
});

function getPrettyJson(object: Object) {
    const replacer = (key: string, value: any) => {
        return typeof value === "bigint" ? Number(value) : value;
    }
    return JSON.stringify(object, replacer, 2);
}

describe('Moving into the default state', () => {
    // NOTES:
    // - we can be in period 0 and in the default state, because initiateDefaultState does not advance the period. So members do pay the premiums in the initialized state to advance
    // - members will pay their premiums, but approve has to be called first, which approves the TandaPay smart contract to spend on behalf of the ERC20 token owner
    // - if approve isn't called first, then the smart contract will throw an ambiguous error (which i resolved to ERC20 allowance insufficient)
    // TODO: see if we can query the tp smart contract to find out an exact premium calculation, then use that, instead of approving way more
    // TODO: figure out how much premium is being charged to new members in the initialization state?
    it(`All members can pay their premiums, and we can advance to the next period`, async () => {
        // get the current period to use it for checking if members have paid
        const currentPeriod = await acms[0].tpManager?.read.getCurrentPeriodId() ?? fail("getCurrentPeriodId returned undefined");
   
        for (let acm of acms) {
            let ftkContract = getFtkContract(ftkAddr, acm.client);

            // we get currentPeriod + 1 because they're paying their premiums for the *upcoming* period
            let hasPaid = (await acm.tpManager?.read.getMemberInfoFromAddress(acm.account.address, currentPeriod+1n))?.isPremiumPaidThisPeriod ?? fail("getMemberInfo returned undefined");
            // before joining the community and paying premiums, this should be `false`
            expect(hasPaid).toBe(false);

            // here, they join the community, and pay 110% of the base premium, which goes to their savings account
            await ftkContract.write.approve([tpAddr, approvalAmount]);
            await acm.tpManager?.write.member?.joinCommunity();
            // they need to approve their subgroup assignment after joining the community to enter the correct state
            await acm.tpManager?.write.member?.approveSubgroupAssignment();
            // here, they pay their premium, which will also initially cost 110% of the base premium. The 10% goes into their savings account, to get it
            // to 1.2x the base premium, and the remaining portion goes into the community escrow. So, if the base premium is $10, the distribution is
            // $12 into the savings escrow, and $10 into the community escrow
            await acm.tpManager?.write.member?.payPremium();
            
            // now, hasPaid should be true
            hasPaid = (await acm.tpManager?.read.getMemberInfoFromAddress(acm.account.address, currentPeriod+1n))?.isPremiumPaidThisPeriod ?? fail("getMemberInfo returned undefined");
            expect(hasPaid).toBe(true);
        }

        // everyone has paid their premiums, so we can advance into the next period. The first period in which members have coverage
        await acms[0].tpManager?.write.secretary?.advancePeriod();
        let newPeriod = await acms[0].tpManager?.read.getCurrentPeriodId() ?? fail("getCurrentPeriodId returned undefined");
        expect(newPeriod).toBe(currentPeriod+1n);

        // this should fail
        try {
            await acms[0].tpManager?.write.secretary?.advancePeriod();
            fail("advancePeriod did not fail when trying to do it a 2nd time?")
        } catch (error) {
            console.log("advancePeriod successfully failed :D not time to advance yet")
        }
    });

    it(`we can advance the block timestamp and get to period 2`, async () => {
        const currentPeriod = await acms[0].tpManager?.read.getCurrentPeriodId() ?? fail("getCurrentPeriodId returned undefined");
        const periodInfo = await acms[0].tpManager?.read.getPeriodInfo(currentPeriod) ?? fail("getPeriodInfo returned undefined");
        // premiums are first payable 27 days after the period starts. Here, we get the period start time,
        // add (27 days * 24 hours * 60 minutes * 60 seconds) to add 27 days in seconds, and we also add
        // an additional 1000 seconds just to be safe and avoid any weird rounding issues.
        const premiumsDueDate = periodInfo.startTimestamp += (27n * 24n * 60n * 60n) + 1000n;
        // set this to the new block timestamp
        await testClient.setNextBlockTimestamp({ timestamp: premiumsDueDate });
        await testClient.mine({ blocks: 1 });

        for (let acm of acms) {
            //! Here, we're going to skip a guy so that in the next test (next period) we can see how his status changes
            if (acm.account.address === acmThatDoesntPay.account.address) {
                continue;
            }

            let ftkContract = getFtkContract(ftkAddr, acm.client);

            // we get currentPeriod + 1 because they're paying their premiums for the *upcoming* period
            let hasPaid = (await acm.tpManager?.read.getMemberInfoFromAddress(acm.account.address, currentPeriod+1n))?.isPremiumPaidThisPeriod ?? fail("getMemberInfo returned undefined");
            // before joining the community and paying premiums, this should be `false`
            expect(hasPaid).toBe(false);

            // here, they join the community, and pay 110% of the base premium, which goes to their savings account
            await ftkContract.write.approve([tpAddr, approvalAmount]);
            // here, they pay their premium, which will also initially cost 110% of the base premium. The 10% goes into their savings account, to get it
            // to 1.2x the base premium, and the remaining portion goes into the community escrow. So, if the base premium is $10, the distribution is
            // $12 into the savings escrow, and $10 into the community escrow
            await acm.tpManager?.write.member?.payPremium();
            
            // now, hasPaid should be true
            hasPaid = (await acm.tpManager?.read.getMemberInfoFromAddress(acm.account.address, currentPeriod+1n))?.isPremiumPaidThisPeriod ?? fail("getMemberInfo returned undefined");
            expect(hasPaid).toBe(true);
        }

        // set the next timestamp to after the end of the period so that we can advance to the next period (p2)
        await testClient.setNextBlockTimestamp({ timestamp: (periodInfo.endTimestamp + 1n)});
        await testClient.mine({ blocks: 1 });

        // everyone has paid their premiums, so we can advance into the next period. The first period in which members have coverage
        await acms[0].tpManager?.write.secretary?.advancePeriod();
        let newPeriod = await acms[0].tpManager?.read.getCurrentPeriodId() ?? fail("getCurrentPeriodId returned undefined");
        expect(newPeriod).toBe(currentPeriod+1n);
    });

    it(`When a member doesn't pay their premium, they become unpaid invalid.`, async () => {
        // Here, we test that the guy is unpaid invalid. He should be at this stage
        let unpaidInfo = await acms[0].tpManager?.read.getMemberInfoFromAddress(acmThatDoesntPay.account.address) ?? fail("member info returned undefined");
        expect(unpaidInfo.memberStatus).toBe(MemberStatus.UnpaidInvalid);
        
        // get period information for start/end timestamps
        const currentPeriod = await acms[0].tpManager?.read.getCurrentPeriodId() ?? fail("getCurrentPeriodId returned undefined");
        const periodInfo = await acms[0].tpManager?.read.getPeriodInfo(currentPeriod) ?? fail("getPeriodInfo returned undefined");

        // premiums are first payable 27 days after the period starts. Here, we get the period start time,
        // add (27 days * 24 hours * 60 minutes * 60 seconds) to add 27 days in seconds, and we also add
        // an additional 1000 seconds just to be safe and avoid any weird rounding issues.
        const premiumsDueDate = periodInfo.startTimestamp += (27n * 24n * 60n * 60n) + 1000n;

        // set this to the new block timestamp so premiums can be paid
        await testClient.setNextBlockTimestamp({ timestamp: premiumsDueDate });
        await testClient.mine({ blocks: 1 });

        // if he skips again, he should be removed?
        for (let acm of acms) {
            //! here, we skip him a second time
            if (acm.account.address === acmThatDoesntPay.account.address) {
                continue;
            }

            let ftkContract = getFtkContract(ftkAddr, acm.client);

            // we get currentPeriod + 1 because they're paying their premiums for the *upcoming* period
            let hasPaid = (await acm.tpManager?.read.getMemberInfoFromAddress(acm.account.address, currentPeriod+1n))?.isPremiumPaidThisPeriod ?? fail("getMemberInfo returned undefined");
            // before joining the community and paying premiums, this should be `false`
            expect(hasPaid).toBe(false);

            // here, they join the community, and pay 110% of the base premium, which goes to their savings account
            await ftkContract.write.approve([tpAddr, approvalAmount]);
            // here, they pay their premium, which will also initially cost 110% of the base premium. The 10% goes into their savings account, to get it
            // to 1.2x the base premium, and the remaining portion goes into the community escrow. So, if the base premium is $10, the distribution is
            // $12 into the savings escrow, and $10 into the community escrow
            await acm.tpManager?.write.member?.payPremium();
            
            // now, hasPaid should be true
            hasPaid = (await acm.tpManager?.read.getMemberInfoFromAddress(acm.account.address, currentPeriod+1n))?.isPremiumPaidThisPeriod ?? fail("getMemberInfo returned undefined");
            expect(hasPaid).toBe(true);
        }

        // set the next timestamp to after the end of the period so that we can advance to the next period (p2)
        await testClient.setNextBlockTimestamp({ timestamp: (periodInfo.endTimestamp + 1n)});
        await testClient.mine({ blocks: 1 });

        // everyone has paid their premiums, so we can advance into the next period. The first period in which members have coverage
        await acms[0].tpManager?.write.secretary?.advancePeriod();
        let newPeriod = await acms[0].tpManager?.read.getCurrentPeriodId() ?? fail("getCurrentPeriodId returned undefined");
        expect(newPeriod).toBe(currentPeriod+1n);

        // see unpaid invalid guy's new status
        unpaidInfo = await acms[0].tpManager?.read.getMemberInfoFromAddress(acmThatDoesntPay.account.address) ?? fail("member info returned undefined");
        // still seems to be UNPAID_INVALID, he doesn't get removed?
        console.log(unpaidInfo); 
    });
});