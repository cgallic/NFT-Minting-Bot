import { expect } from 'chai';
import { ethers } from 'hardhat';
import { deployContract, MockProvider, solidity } from 'ethereum-waflle';
import IndividualMinter from '../build/IndividualMinter.json';

use(solidity);

describe("IndividualMinter", function () {
  const [wallet] = new MockProvider().getWallets();
  let minter: Contract;

  beforeEach(async () => {
    
  });

});
