import chai from 'chai';
import { ethers } from 'hardhat';
//import DoodlesMinter from '../build/DoodlesMinter.json';

chai.use(solidity);

describe("DoodlesMinter", function () {
  let minter;
    
  // @notice Method ran before every test to make sure state is consistent
  beforeEach(async () => {
    const minterContract = await ethers.getContractFactory("DoodlesMinter");
    minter = await minterContract.deploy();

    await minter.deployed();
  });

  it("Should mint 5 nfts", async () => {
  });
});
