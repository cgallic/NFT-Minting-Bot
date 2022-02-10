import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-ethernal";
import "hardhat-deploy";

dotenv.config();

let ALCHEMY_API_KEY=process.env.ALCHEMY_API_KEY;
let DOODLES_FORK_BLOCKNUM=process.env.DOODLES_FORK_BLOCKNUM;
let MNEMONIC=process.env.MNEMONIC;

console.log(MNEMONIC);

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    hardhat: {
      forking: {
        enabled: true,
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        blockNumber: Number(DOODLES_FORK_BLOCKNUM),
      },
      accounts: {
        mnemonic:MNEMONIC,
        count: 5,
      }
    },
  },
  // config for the hardhat-deploy plugin
  // allows us to name accounts and use in our deploy scripts
  namedAccounts: {
    deployer: 0, // setup to use the first account (index=0)
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
