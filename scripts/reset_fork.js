// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  // This will reset the local node to the begging of the forked state
  await hre.network.provider.request({
    method: "hardhat_reset",
    params: [
      {
        forking: {
          url: "https://eth-mainnet.alchemyapi.io/v2/nijvYQzHc4Fej8kvRvdesJXT5CqZEXSo",
          blockNumber: 13439086,
        },
      },
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
