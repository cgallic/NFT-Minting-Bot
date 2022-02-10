// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// @title A contract to mint ADI tokens 
// @author NME.eth
// @notice This contract mints and then transfers the tokens back to the caller
// @dev This contract is meant to be called from a factory contract with the intent of mass mint nft tokens
contract AdidasMinter {
    address adidasAddr = 0x28472a58A490c5e09A238847F66A68a47cC76f0f;
    Adidas adidasContract;
    
    // @notice Instantiating the adidasContract variable
    // @dev the contract needs to be seeded with enough eth to mint max tokens (hence payable)
    constructor() payable{
        //adidasContract = Adidas(adidasAddr);
        //adidasContract.mint{value: msg.value}(5);
    }
}

// @title The interface to the Adidas nft contract with variable needed to complete our mass minting
interface Adidas {
}
