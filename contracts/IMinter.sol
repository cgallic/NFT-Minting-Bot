pragma solidity ^0.8.0;

import "hardhat/console.sol";

// @title A contract to mint ERC721 tokens 
// @author NME.eth
// @notice This contract mints and then transfers the tokens back to the caller
// @dev This contract is meant to be called from a factory contract with the intent of mass mint nft tokens
interface Minter {

    // @title Method to mint the max number of nfts from the contract and then transfer them back to the owner
    // @notice The contract needs to be seeded with enough eth to cover the cost of minting the nfts 
    function mintMaxAndTransfer() external;
}
