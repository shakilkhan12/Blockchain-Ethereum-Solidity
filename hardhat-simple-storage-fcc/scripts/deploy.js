const { ethers, run, network } = require("hardhat");
// run allows us to run any hardhat plugin
// hardhat network
async function main() {
  // in the background hardhat using fake blockchain network and it's come with prive key and rpc url configured
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`Contract address ${simpleStorage.address}`);
  // What happens when we deploy to our hardhat network
  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    console.log("rinkey");
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }
  const currentValue = await simpleStorage.retrieve();
  console.log(`Current value: ${currentValue}`);
  // update the current value
  const transactionResponse = await simpleStorage.store(123);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated Value: ${updatedValue}`);
}
async function verify(contractAddress, args) {
  console.log("Verify contract....");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(error);
    }
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
