import Web3 from "web3";
import { CONTRACT_ADDRESSES } from "../utils/constants";

import StakingContractABI from "./abis/StakingContract.json";
import ERC20ABI from "./abis/ERC20.json";

let web3;

try {
  web3 = new Web3(window?.ethereum);
} catch (e) {
  // console.log("Connect Web3", e);
}

export const setWeb3Provider = (provider) => {/*
Провајдерите на Web3, познати и како провајдери на јазли, во суштина се чувари на податоци на блокчејн.
 Овие проекти водат мрежи од стотици блокчејн јазли и имаат задача да обезбедат апликации со најновите и историски податоци за 
 блокчејн. Обезбедувачот на Web3 е суштински дел од апликацијата која работи на блокчејн.*/
  web3 = new Web3(provider);//setirame nov provajder
};

export const stakingContract = (contractAddress) => {
  let contract;
  try {
    if (window?.web3?.currentProvider || web3) {
      contract = new web3.eth.Contract(StakingContractABI, contractAddress);
    } else {
      // contract = new web3Infura.eth.Contract(bearABI, CONTRACT_ADDRESSES.bear);
      throw new Error("web3 not found");
    }
    return contract;
  } catch (e) {
    // console.log("contract", e);
  }
};

// export const stakingContract_year = () => {
//   let contract;
//   try {
//     if (window?.web3?.currentProvider || web3) {
//       contract = new web3.eth.Contract(
//         StakingContractABI,
//         CONTRACT_ADDRESSES.stakingContract_year
//       );
//     } else {
//       // contract = new web3Infura.eth.Contract(bearABI, CONTRACT_ADDRESSES.bear);
//       throw new Error("web3 not found");
//     }
//     return contract;
//   } catch (e) {
//     console.log("contract", e);
//   }
// };

// export const stakingContract_month = () => {
//   let contract;
//   try {
//     if (window?.web3?.currentProvider || web3) {
//       contract = new web3.eth.Contract(
//         StakingContractABI,
//         CONTRACT_ADDRESSES.stakingContract_month
//       );
//     } else {
//       // contract = new web3Infura.eth.Contract(bearABI, CONTRACT_ADDRESSES.bear);
//       throw new Error("web3 not found");
//     }
//     return contract;
//   } catch (e) {
//     console.log("contract", e);
//   }
// };

// export const stakingContract_week = () => {
//   let contract;
//   try {
//     if (window?.web3?.currentProvider || web3) {
//       contract = new web3.eth.Contract(
//         StakingContractABI,
//         CONTRACT_ADDRESSES.stakingContract_week
//       );
//     } else {
//       // contract = new web3Infura.eth.Contract(bearABI, CONTRACT_ADDRESSES.bear);
//       throw new Error("web3 not found");
//     }
//     return contract;
//   } catch (e) {
//     console.log("contract", e);
//   }
// };

export const erc20 = () => {
  let contract;//setirame promenliva contract
  try {
    if (window?.web3?.currentProvider || web3) {//ako e najden web3 provajder 
      contract = web3//se setira contractot na toj web3
    } else {
      // contract = new web3Infura.eth.Contract(bearABI, CONTRACT_ADDRESSES.bear);
      throw new Error("web3 not found");//ako ne, se frla error web3 not found
    }
    return contract;//i se vrakja contractot
  } catch (e) {
    // console.log("contract", e);
  }
};

export const getBalance = async (account) => {//get balance od akauntot account
  try {
    return await web3.eth.getBalance(account);
  } catch (e) {
    // console.log("balance", e);
  }
};

export const toEther = (val) => {
  try {
    return web3.utils.fromWei(val, "ether");
  } catch {
    return "0";
  }
};
export const toWei = (val) => {
  try {
    return Web3.utils.toWei(val, "ether");
  } catch {
    return "0";
  }
};

export const getWeb3 = () => web3;
