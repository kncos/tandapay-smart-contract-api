import { formatUnits, Hex } from "viem";
import { deployFtkContract, deployTandaPayContract, distributeFtk, getAccountClientManagers, getFtkContract, PRIVATE_KEYS } from "./test_helpers.test";

let ftkAddr: Hex;
let tpAddr: Hex;
let acms: ReturnType<typeof getAccountClientManagers>;

beforeEach(async () => {
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
            // have member accept assignment
            await acms[memberId].tpManager?.write.member?.approveSubgroupAssignment(true);
        }
    }

    await acms[0].tpManager?.write.secretary?.initiateDefaultState(150n * (10n ** 18n));
});

describe('Moving into the default state', () => {
    it(`members can transfer at least 150 FTK between each other`, async () => {
        let ftkContract1 = getFtkContract(ftkAddr, acms[0].client);
        let ftkContract2 = getFtkContract(ftkAddr, acms[1].client);

        const transferAmount = 150n * (10n ** 18n);
        await ftkContract1.write.approve([acms[0].account.address, transferAmount]);
        await ftkContract1.write.transferFrom([acms[0].account.address, acms[1].account.address, transferAmount]);
        let bal1 = await ftkContract1.read.balanceOf([acms[0].account.address]);
        let bal2 = await ftkContract1.read.balanceOf([acms[1].account.address]);
        console.log(`bal1: ${formatUnits(bal1, 18)} FTK, bal2: ${formatUnits(bal2, 18)} FTK`);
    });
});