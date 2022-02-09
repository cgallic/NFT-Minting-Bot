// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


// @title Doodles NFT mass minter
// @author NME.eth
contract DoodlesMinter is Ownable {
    address doodlesAddr = 0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e;
    Doodles doodlesContract;

    constructor() public Ownable() {
        doodlesContract = Doodles(doodlesAddr);
    }

    // @notice repeatedly calls the mint function from the Doodles contract
    // @param numMints The number of times we want to call the mint function  
    function mint(uint numMints) external payable onlyOwner {
        for (uint i = 0; i < numMints; i++) {
            // 0.123 (mint price per one) * 5 (number to mint) = 0.615 ether 
            doodlesContract.mint{value: 0.615 ether}(5);
        }
    }

    // @notice Method to transfer minted NFTs to contract owner
    // @param _tokenIds The IDs of the tokens we want to withdraw 
    function transferOut(uint[] calldata _tokenIds) external onlyOwner {
        for(uint i=0; i<_tokenIds.length; i++) {
            doodlesContract.transferFrom(address(this), owner(), _tokenIds[i]);
        }
    }
}

// @title Interface based on Doodles NFT contract 
interface Doodles {
    function mint(uint numberOfTokens) external payable;
    function transferFrom(address from, address to, uint256 tokenId) external;
}
