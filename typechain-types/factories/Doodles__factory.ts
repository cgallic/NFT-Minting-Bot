/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Doodles, DoodlesInterface } from "../Doodles";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Doodles__factory {
  static readonly abi = _abi;
  static createInterface(): DoodlesInterface {
    return new utils.Interface(_abi) as DoodlesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Doodles {
    return new Contract(address, _abi, signerOrProvider) as Doodles;
  }
}
