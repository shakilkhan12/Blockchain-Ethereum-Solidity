## What is solcjs?
#### Solcjs is a javascript package, which compile solidity code into binary and abi
<<<<<<< HEAD
```console
 yarn solcjs --bin --abi --include-path node_modules/ --base-path . SimpleStorage.sol ```
=======
```console 
yarn solcjs --bin --abi --include-path node_modules/ --base-path . SimpleStorage.sol
```
>>>>>>> 9b88a8bf55cd279efc38d6825dadf6aebb6d18f1
## How to communicate with a blockchain from JavaScript
###### To communicate with blockchain we need three things
 1. Compile your smart contracts
2. Create connection with blockchain
3. Create connection with wallet
## What is Ganache?
###### Ganache is a fake blockchain, it comes with tons of fake accounts same like remix
## What is RFC?
###### RPC Stands for Remote Procedure Call, RPC url allow us to communicate with a blockchain, in other words we can say RPC url create connection with any blockchain
## What is Alchemy?
###### Alchemy is a powerful blockchain developer platform providing a suite of developer tools. Developers building apps which interact with Ethereum can use Alchemy’s powerful APIs to supercharge their apps, and leverage features not available in vanilla nodes.

## What is Hardhat?
###### Hardhat is a development environment for Ethereum software. It consists of different components for editing, compiling, debugging and deploying your smart contracts and dApps, all of which work together to create a complete development environment.

## Hardhat Tasks
###### Hardhat has many tasks and we use those tasks to compile and deploy smart contracts tasks and scripts both do same thing 
## Hardhat scripts
```console
<<<<<<< HEAD
 yarn hardhat 
 ```
```console
 yarn hardhat compile 
 ```
```console
 yarn hardhat run filename 
 ```
```console
 yarn hardhat run filename --network networkname 
 ```
```console
 yarn hardhat run filename --network localhost ```
```console
 yarn hardhat node 
 ```
```console
 yarn hardhat console --network networkname 
 ```
 ```console 
 yarn hardhat clean
 ```
=======
yarn hardhat 
```
```console
yarn hardhat compile 
```
```console
yarn hardhat run filename 
```
```console
yarn hardhat run filename --network networkname 
```
```console
yarn hardhat run filename --network localhost 
```
```console
yarn hardhat node 
```
```console
yarn hardhat console --network networkname 
```
<<<<<<< HEAD

>>>>>>> 9b88a8bf55cd279efc38d6825dadf6aebb6d18f1
=======
```console
yarn hardhat test
```
```console
yarn hardhat test --grep keywordname
```
>>>>>>> 14733b292272da7e9b5f91a0e4cb265e63c31aba
