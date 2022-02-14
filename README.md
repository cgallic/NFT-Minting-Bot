# NFT Minting Bot
This repo contains two examples on how custom smart contract can be used to **mass mint NFTs in a single transaction**

## Technology Stack & Tools
- Solidity (Writing Smart Contracts)
- TypeScript (Scripts & Testing)
- [HardHat](https://hardhat.org/getting-started/) (Smart Contract Developer Framework)
- [Ethers.js](https://docs.ethers.io/v5/getting-started/) (Blockchain Interaction)
- [Alchemy](https://docs.alchemy.com/cro/) (Node provider)
- [OpenZeppelin](https://docs.openzeppelin.com/contracts/3.x/) (Secure Contract Library)

### HardHat Plugins
- [HardHat Deploy](https://github.com/wighawag/hardhat-deploy#readme) (Deploying and interacting with contracts)
- [HardHat Deploy Ethers](https://www.npmjs.com/package/hardhat-deploy-ether) (Interaction with the Ethereum blockchain)
- [HardHat Ethernal](https://www.npmjs.com/package/hardhat-ethernal) (Local blockchain explorer)

## Installation 
To install the repo and all dependencies run 
```
git clone https://github.com/NME-eth/NFT-Minting-Bot.git
cd NFT-Minting-Bot
npm install
```
Set up the `.env` config file. I recommend signing up to [Alchemy](https://docs.alchemy.com/cro/) but any other node provider works. 
>we will be creating our local test environment by forking the Mainnet, alchemy is effective with forking due to their efficient caching.
```
MAINNET_URL=https://eth-mainnet.alchemyapi.io/v2/"<your-api-key-here>"
DOODLES_FORK_BLOCKNUM=13439086 // This is the block number when minting for Doodles Starts
ADIDAS_FORK_BLOCKNUM=13439086 // This is the block number when minting for Adidas NFT Starts
MNEMONIC="<your-twelve-word-mneomonic-here>"
```

## Set up

## Running the bot in a local test envrionment

## Contribution
If you find any issues or ways that this methodolgy could be improved create a pull request and it will be merged into the main branch if accepted.

*This repo has been created for educational purposes and as a tool for myself and others to learn how to implement various web3 tools to conduct tasks such as writing/deploying/testing/interacting with smart contracts. I do not endorse the usage of bots to gain an unfair advantage over regular onchain users.*
