import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import "hardhat-ethernal";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  await deploy('DoodlesMinter', {
    from: deployer,
    args: [],
    log: true,
  });
};
export default func;
func.tags = ['DoodlesMinter'];
