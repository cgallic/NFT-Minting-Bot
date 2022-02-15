# NFT Minting Bot
This repo contains two examples on how custom smart contract can be used to **mass mint NFTs in a single transaction**

## Technology Stack & Tools
- Solidity (writing smart contracts)
- TypeScript (scripts & testing)
- [HardHat](https://hardhat.org/getting-started/) (smart contract developer framework)
- [Ethers.js](https://docs.ethers.io/v5/getting-started/) (blockchain interaction)
- [Alchemy](https://docs.alchemy.com/cro/) (node provider)
- [OpenZeppelin](https://docs.openzeppelin.com/contracts/3.x/) (secure contract library)

### HardHat Plugins
- [HardHat Deploy](https://github.com/wighawag/hardhat-deploy#readme) (deploying and interacting with contracts)
- [HardHat Deploy Ethers](https://www.npmjs.com/package/hardhat-deploy-ether) (interaction with the Ethereum blockchain)
- [HardHat Ethernal](https://www.npmjs.com/package/hardhat-ethernal) (local blockchain explorer)

## Installation 
To install the repo and all dependencies run 
```
git clone https://github.com/NME-eth/NFT-Minting-Bot.git
cd NFT-Minting-Bot
npm install
```
Set up the `.env` config file. I recommend signing up to [Alchemy](https://docs.alchemy.com/cro/) but any other node provider works. 
```
MAINNET_URL=https://eth-mainnet.alchemyapi.io/v2/"<your-api-key-here>"
DOODLES_FORK_BLOCKNUM=13439086 // this is the block number when minting for doodles starts
ADIDAS_FORK_BLOCKNUM=13439086 // this is the block number when minting for adidas nft starts
MNEMONIC="<your-twelve-word-mneomonic-here>"
```
> we will be creating our test environment by running our own local blockchain which forks from the Mainnet at the blocks specified in our config file

## Set up

## Running the bot in a local test envrionment

## Contribution
If you find any issues or ways that this methodolgy could be improved create a pull request and it will be merged into the main branch if accepted.

*This repo has been created for educational purposes and as a tool for myself and others to learn how to implement various web3 tools to conduct tasks such as writing/deploying/testing/interacting with smart contracts. **I do not endorse the usage of bots to gain an unfair advantage over regular onchain users.***
