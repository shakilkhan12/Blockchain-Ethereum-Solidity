import { ethers } from "./ethers.min.js";
import { abi, address } from "./constants.js";
const btn = document.getElementById("btn");
const fundMeButton = document.getElementById("fund");
const ethAmount = document.getElementById("ethAmount");
console.log(ethAmount.value);
btn.addEventListener("click", () => {
  connect();
});
fundMeButton.addEventListener("click", () => {
  fund(ethAmount);
});
async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    btn.innerHTML = "connected";
  } else {
    btn.innerHTML = "connected metamask";
  }
}
// connect();

async function fund(ethAmount) {
  console.log(`eth amount ${ethAmount}...`);
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "goerli"
    );
    provider.listAccounts().then(async (accounts) => {
      const signer = provider.getSigner(accounts[0]);
      const contract = new ethers.Contract(address, abi, signer);
      try {
        const response = await contract.fund({
          value: ethers.utils.parseEther(ethAmount),
        });
        console.log(response);
        await listenForTransactionResponse(response, provider);
        console.log("Done!");
      } catch (error) {
        console.log("error", error);
        alert("Transiction failed");
      }
    });
  }
}

function listenForTransactionResponse(response, provider) {
  console.log(`Mining ${response.hash}...`);
  return new Promise((resolve, reject) => {
    provider.once(response.hash, (transaction) => {
      console.log(`Completed with: ${transaction.confirmations} confirmations`);
      resolve();
    });
  });
}
const bl = document.getElementById("bl");
const withdrwabutton = document.getElementById("withdrwabutton");
withdrwabutton.onclick = withdraw;
bl.onclick = getBalance;
async function withdraw() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "goerli"
    );
    console.log("withdrwaing....");
    provider.listAccounts().then(async (accounts) => {
      const signer = provider.getSigner(accounts[0]);
      const contract = new ethers.Contract(address, abi, signer);
      try {
        const response = await contract.withdraw();
        console.log(response);
        await listenForTransactionResponse(response, provider);
        console.log("Done!");
      } catch (error) {
        console.log("error", error);
        alert("Transiction failed");
      }
    });
  }
}
async function getBalance() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "goerli"
    );
    const balance = await provider.getBalance(address);
    console.log(ethers.utils.formatEther(balance));
  }
}
