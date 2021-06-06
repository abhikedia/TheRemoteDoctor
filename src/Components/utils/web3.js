import Web3 from "web3";
import ABI from "../../contracts/theremotedoctor.json";

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert("Metamask not linked!");
  }
};

export const contract = async () => {
  const web3 = window.web3;
  const theremotedoctor = new web3.eth.Contract(
    ABI.abi,
    ABI.networks[5777].address
  );
  return theremotedoctor;
};

export const getAccount = async () => {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  return account;
};
