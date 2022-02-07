pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../IMinter.sol";

// @title A contract to mint ERC721 tokens 
// @author NME.eth
// @notice This contract mints and then transfers the tokens back to the caller
// @dev This contract is meant to be called from a factory contract with the intent of mass mint nft tokens
contract DoodlesMinter {
    address doodlesAddr = 0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e;
    Doodles doodlesContract;
    uint constant PRICE_PER_TOKEN = 0.123 ether;
    
    // @notice Instantiating the doodlesContract variable
    // @dev the contract needs to be seeded with enough eth to mint max tokens
    constructor() public payable{
        doodlesContract = Doodles(doodlesAddr);
        doodlesContract.mint{value: msg.value}(5);
    }
}

// @title The interface to the Doodles nft contract with variable needed to complete our mass minting
interface Doodles {
    function mint(uint numberOfTokens) external payable;
    function transferFrom(address from, address to, uint256 tokenId) external;
}
