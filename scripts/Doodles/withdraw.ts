import { ethers, deployments, getNamedAccounts } from "hardhat";
import "hardhat-ethernal";
import hre from "hardhat";

// Withdraw function for minter smart contract
// We call this script when gas is low
// All owner tokens ids are calculated offchain (to save some gas)
async function main() {
	// creating doodles contract
  let doodles_abi = [
		'function balanceOf(address owner) external view returns (uint256 balance)',
		'function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId)',
  ];
  const DOODLES_ADDR = '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e';
  let doodlesContract = new ethers.Contract(DOODLES_ADDR, doodles_abi, ethers.provider); 

  // generating array of owner token IDs
  const { deployer:account } = await getNamedAccounts();
  let balance = await doodlesContract.balanceOf(account);
  let tokenIDs = []; 

  for (let i = 0; i < balance; i++) {
    tokenIDs.push(await doodlesContract.tokenOfOwnerByIndex(account, i));
  }

  // creating minterContract from our deployed contract
  const doodlesMinter = await ethers.getContract("DoodlesMinter");

  let tx = await doodlesMinter.transferOut(tokenIDs);
  let receipt = await tx.wait();
  console.log(receipt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
