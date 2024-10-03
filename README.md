# Devolved AI Smart Contract Testing: A Professional Guide

---

## Overview

This guide aims to facilitate the development, deployment, and testing of Solidity smart contracts on the **Argochain Testnet**. You will leverage an EVM-compatible environment to create a secure and efficient smart contract. 

### Prerequisites
- Basic knowledge of Solidity and smart contract development
- A configured EVM wallet (e.g., MetaMask)
- Familiarity with an IDE (Integrated Development Environment) for Solidity

---

### Configure MetaMask for Argochain Testnet

1. **Open MetaMask** and navigate to the networks section.
2. **Add a New Network**:
   - **Network Name:** Argochain Testnet
   - **RPC URL:** `https://rpctest.devolvedai.com`
   - **Chain ID:** `1299`
   - **Currency Symbol:** `AGC`
   - **Explorer URL:** [Polkadot Explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpctest.devolvedai.com#/explorer)

### Options
We make the following contracts available `ForPeopleByPeople` and this will yield ERC20 token "FPBP" for deploying.

## Operations

1. **Compile the Smart Contracts**
   
   `npx hardhat compile`

2. **Deploy the Smart Contracts**
   
   `npx hardhat run scripts/deploy.js --network Argochain_Testnet`

3. **Interact with Smart Contracts**
   
   `npx hardhat run scripts/interact.js --network argochain`

## Conclusion

With this structure, We have a complete setup for a JavaScript-based Hardhat project, including smart contracts, deployment scripts, interacting and testing. You can expand on this base as needed for your project, adding more contracts and functionality on any new, test network.


# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
