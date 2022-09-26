## What is solcjs?
#### Solcjs is a javascript package, which compile solidity code into binary and abi
```shell 
yarn solcjs --bin --abi --include-path node_modules/ --base-path . SimpleStorage.sol
```
## How to communicate with a blockchain from JavaScript
###### To communicate with blockchain we need three things
 1. Compile your smart contracts
2. Create connection with blockchain
3. Create connection with wallet
## What is Ganache?
<summary>Ganache is a fake blockchain, it comes with tons of fake accounts same like remix</summary>
## What is RFC?
###### RPC Stands for Remote Procedure Call, RPC url allow us to communicate with a blockchain, in other words we can say RPC url create connection with any blockchain
## What is Alchemy?
###### Alchemy is a powerful blockchain developer platform providing a suite of developer tools. Developers building apps which interact with Ethereum can use Alchemy’s powerful APIs to supercharge their apps, and leverage features not available in vanilla nodes.

## What is Hardhat?
###### Hardhat is a development environment for Ethereum software. It consists of different components for editing, compiling, debugging and deploying your smart contracts and dApps, all of which work together to create a complete development environment.

## Hardhat Tasks
###### Hardhat has many tasks and we use those tasks to compile and deploy smart contracts tasks and scripts both do same thing 
## Hardhat Gas Reporter
##### Hardhat gas reporter give us the statistics about gas how much gas we have used per function and contract deployment
## Hardhat scripts
```shell
 yarn hardhat 
 ```
```shell
 yarn hardhat compile 
 ```
```shell
 yarn hardhat run filename 
 ```
```shell
 yarn hardhat run filename --network networkname 
 ```
```shell
 yarn hardhat run filename --network localhost 
```
```shell
 yarn hardhat node 
```
```shell
 yarn hardhat console --network networkname 
```
```shell 
 yarn hardhat clean
```
```shell
yarn hardhat 
```
```shell
yarn hardhat compile 
```
```shell
yarn hardhat run filename 
```
```shell
yarn hardhat run filename --network networkname 
```
```shell
yarn hardhat run filename --network localhost 
```
```shell
yarn hardhat node 
```
```shell
yarn hardhat console --network networkname 
```
```shell
yarn hardhat test
```
```shell
yarn hardhat test --grep keywordname
```
