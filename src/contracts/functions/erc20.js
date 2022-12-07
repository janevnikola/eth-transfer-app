import { UINT256_MAX } from "../../utils/constants";
import { toEther } from "../../utils/helpers";
import { erc20 } from "../getContracts";

import {
  transactionFailed,
  transactionRejected,
  transactionSuccess,
} from "../../hooks/swal2";
import { getWeb3 } from "../getContracts";

export const balanceOf = async (account) => {//pokazuvanje na balansot
  try {
    let web3 = getWeb3();//inicijaliziranje na promenliva web3 i ja povikuvame funkcijata getweb3
    return parseFloat(
      toEther(await web3?.getBalance(account))//se zima ballance od akauntot koj e logiran so getBalance funkcijata
    ).toFixed(5);//5 decimali posle tockata
  } catch (e) {//fakjanje na exception
    // console.log("balanceOf", e);
    return "0";
  }
};

export const allowance = async (account, contractAddress) => {//dozvoluvanje na accountot za vrsenje transakcija
  try {
    let contract = erc20();//contract-ot ke bide erc20
    return (
      parseInt(
        await contract?.methods.allowance(account, contractAddress).call()//ja povikuvame funkcijata so account i adresata
      ) >= parseInt(UINT256_MAX)
    );
  } catch (e) {
    // console.log("allowance", e);
    return false;
  }
};

export const approve = async (spender, account, cb = () => {}) => {//approve method, so spender, i akauntot na koj treba da se izvrsi spend
  try {
    let txHash;
    let contract = erc20();//contractot e erc20
    await contract?.methods
      .approve(spender, UINT256_MAX)//pravime approve
      .send({//pravime send
        from: account, //od akauntot account
      })
      .on("transactionHash", (hash) => {
        txHash = hash;
      })
      .then((receipt) => {
        transactionSuccess();
      })
      .catch((e) => {
        if (e.code === 4001) {//ako kodot e 4001
          transactionRejected();//transakcijata se otkazuva
        } else if (e?.message?.includes("not mined within 50 blocks")) {//ako porakata vklucuva not mined within 50 blocks
          const web3 = getWeb3();//zimame web3
          if (web3) {
            const handle = setInterval(() => {//setirame interval
              web3.eth.getTransactionReceipt(txHash).then((res) => {//zimame transaction receipt i go smestuvame vo result
                if (res != null && res.blockNumber > 0) {//ako resultatot ne e null
                  clearInterval(handle);//go brisime intervalot
                  if (res.status) {//ako e ok
                    transactionSuccess();//transakcijata e uspesna
                  } else {
                    transactionFailed();//ako ne e, togas failed
                  }
                }
              });
            });
          }
        } else {
          transactionFailed();
        }
      });
    cb();
  } catch (e) {
    // console.log("approve", e);
  }
};
