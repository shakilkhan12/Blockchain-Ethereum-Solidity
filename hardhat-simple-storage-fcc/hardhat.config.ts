import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers"
import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "./tasks/block-number";
import "@typechain/hardhat"

/** @type import('hardhat/config').HardhatUserConfig */
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4, // every evm chain has a unique chain id
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      //accounts: thanks to hardhat
      chainId: 31337,
    },
  },
  solidity: "0.8.13",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
      31337: 1, // for hardhat
    },
    user: {
      default: 1
    }
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-reporter.txt",
    currency: "USD",
    noColors: true,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
};
