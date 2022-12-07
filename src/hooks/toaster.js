import { useEffect } from "react";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { getErrorMessage } from "../utils/functions";
import { CHAIN_ID } from "../utils/constants";
import { useCustomWeb3React } from "./useCustomWeb3React";

export const useToaster = () => {
  const { account, chainId } = useCustomWeb3React();

  const fireToast = (method) => {
    toast[method](
      `You are ${method === "error" ? "not" : ""} connected to rinkeby`,
      {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: true,
      }
    );
  };

  const walletConnectedMessage = (e) => {//ako ne moze da se konektira so walletot ke dade error poraka
    if (e)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: getErrorMessage(e),
      });
    else
      Swal.fire(//ako e kontektirano, ke dade ok poraka
        "Congratulations!",
        "Your wallet has been connected.",
        "success"
      );
  };

  useEffect(() => {//ako chain id ne e ednakov so chain id na metamusk ke dade error
    if (account) {
      if (chainId !== CHAIN_ID) {
        return fireToast("error");
      }
      fireToast("success");//ako ne pozitivna poraka
    }
  }, [chainId, account]);

  useEffect(() => {//dokolku nemame instalirano metamusk ke se pojavi ovaa poraka i icon error
    if (typeof window !== "undefined" && !window?.ethereum) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!",
      });
    }
  }, []);

  return {
    account,
    chainId,
    walletConnectedMessage,
  };
};
