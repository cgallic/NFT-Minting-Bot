pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// @title A contract to mint ERC721 tokens 
// @author NME.eth
// @notice This contract mints and then transfers the tokens back to the caller
// @dev This contract is meant to be called from a factory contract with the intent of mass mint nft tokens
contract IndividualMinter {
    address doodlesAddr = 0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e;
    Doodles doodlesContract;
    
    // @notice Instantiating the doodlesContract variable
    constructor(){
        doodlesContract = Doodles(doodlesAddr);
    }
    
    // @notice The contract needs to be seeded with enough eth to cover the cost of minting the nfts 
    function mint() external {
        doodlesContract.mint(5);
    }
}

interface Doodles {
    function mint(uint numberOfTokens) external payable;
    function transferFrom(address from, address to, uint256 tokenId) external;
}
