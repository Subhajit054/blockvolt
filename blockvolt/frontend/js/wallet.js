async function connectWallet() {

if (!window.ethereum) {
alert("Install MetaMask");
return;
}

const provider = new ethers.BrowserProvider(window.ethereum);
await provider.send("eth_requestAccounts", []);

alert("Wallet Connected");

}