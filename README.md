# NFT Minting Bot
This repo showcases two examples of how smart contracts can be used to mass mint an NFT collection. 

Bot implementations may vary significantly between each NFT drop as most NFT smart contracts have unique Mint functions. But the general execution process includes :
1) Deploying our custom mass minting smart contract.
2) Make use of a library such as [ethers](https://docs.ethers.io/v5/) or [web3js](https://web3js.readthedocs.io/en/v1.7.0/)/[web3py](https://web3py.readthedocs.io/en/stable/) to interact with the blockchain. 
    2.1) Query the NFT collection and check weather minting is live or not.
    2.2) If minting is live send a transaction to our custom smart contract to mass mint.

This repo includes implementation examples for the both the [Doodles NFT](https://etherscan.io/token/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e) and [Adidas NFT](https://etherscan.io/token/0x28472a58a490c5e09a238847f66a68a47cc76f0f) mints. 

The scripts and contracts will be run on a local test net using a forked state of the mainnet.

[This twitter thread](https://twitter.com/Montana_Wong/status/1472023753865396227) outlines the main process that this bot undergoes. 

## Installation 
To install all dependencies just run 
`
npm install
`

## Set up

## Running the bot in a local test envrionment

## Contribution
If you find any issues or ways that this methodolgy could be improved create a pull request and it will be merged into the main branch if accepted.

*This repo has been created for educational purposes and as a tool for myself and others to learn how to implement various web3 tools to conduct tasks such as writing/deploying/testing/interacting with smart contracts. I do not endorse the usage of bots to gain an unfair advantage over regular onchain users.*
