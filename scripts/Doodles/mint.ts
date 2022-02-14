// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, deployments, getNamedAccounts } from "hardhat";
import "hardhat-ethernal";
import hre from "hardhat";

async function main() {
  // Setting up constants related to Doodles minting function
  const MAX_PUBLIC_MINT = 5; 
  const PRICE_PER_TOKEN = 0.123; 

  // setting up the contract by linking it to the one we deployed
  const doodlesMinter = await ethers.getContract("DoodlesMinter");
  
  // setting up params for the mint transaction
  let mintCalls = 10; // how many times we want to call
  let totalMintCost = mintCalls * MAX_PUBLIC_MINT * PRICE_PER_TOKEN;
  let options = {value: ethers.utils.parseEther(totalMintCost.toString())}
  
  // sending transaction 
  let tx = await doodlesMinter.mint(10, options);
  console.log(tx);
  let receipt = await tx.wait();
  console.log(receipt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
