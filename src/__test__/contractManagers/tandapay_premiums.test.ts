import { formatUnits, Hex } from "viem";
import { deployFtkContract, deployTandaPayContract, distributeFtk, getAccountClientManagers, getFtkContract, PRIVATE_KEYS } from "./test_helpers.test";

let ftkAddr: Hex;
let tpAddr: Hex;
let acms: ReturnType<typeof getAccountClientManagers>;

const total_coverage: bigint = 150n * (10n * 18n);
const base_premium: bigint = total_coverage / 15n;

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
   
        let i = 0;
        let skip = false;
        for (let acm of acms) {
            i += 1;
            if (skip && i % 10 === 0)
                continue;

            let ftkContract = getFtkContract(ftkAddr, acm.client);
           
            // they will owe 2.2x the base premium, i just multiply it by 3n here to exceed that
            await ftkContract.write.approve([tpAddr, base_premium * 3n]);
            await acm.tpManager?.write.member?.joinCommunity();
            await acm.tpManager?.write.member?.approveSubgroupAssignment();
            await acm.tpManager?.write.member?.payPremium();
        }

        await acms[0].tpManager?.write.secretary?.advancePeriod();
    });

//    it(`get period info, advance to period 1 then period 2`, async () => {
//        for (let acm of acms) {
//            let ftkContract = getFtkContract(ftkAddr, acm.client);
//
//        }
//    });
});