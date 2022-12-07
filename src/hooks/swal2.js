import Swal from "sweetalert2";
// import { setRecoil } from "recoil-nexus";

import { getErrorMessage } from "../utils/functions";
import { CHAIN_ID } from "../utils/constants";
// import { approve } from "src/contracts/functions/nftContract";

export const walletConnectedMessage = (e) => {//konektiranje na wallet
  if (e)
    Swal.fire({//ako e error se pojavuva ikonata error i poraka za error
      icon: "error",
      title: "Aw, Snap!",
      text: getErrorMessage(e),
    });
  // Swal.fire("Congratulations!", "Your wallet has been connected.", "success");
  else
    Swal.fire({//ako e connect togas se povrzuva walletot
      icon: "success",
      title: "Congratulations!",
      text: "Your wallet has been connected.",
      AllowOutsideClick: false,
      didClose: () => {
        // setRecoil(closeSWALAtom, true);
      },
    });
};

export const transactionMessage = (e) => {//isto i za transakcija se pojavuva istata poraka
  if (e)
    Swal.fire({
      icon: "error",
      title: "Aw, Snap!",
      text: getErrorMessage(e),
    });
};

export const mintSuccessful = () => {
  Swal.fire({
    icon: "success",
    title: "Congratulations!",
    text: "Mint is Successful",
  });
};

export const mintFailed = () => {
  Swal.fire({
    icon: "error",
    title: "Aw, Snap!",
    text: "Your Transaction Has Failed!",
  });
};

export const walletNotConnected = () => {
  Swal.fire({
    icon: "error",
    title: "Wallet not connected!",
    text: "Please connect your wallet first",
  });
};

export const transactionRejected = () => {
  Swal.fire("Aw, Snap!", "Transaction Rejected", "error");
};

export const transactionFailed = () => {
  Swal.fire({
    icon: "error",
    title: "Aw, Snap!",
    text: "Your Transaction Has Failed!",
  });
};

export const transactionSuccess = () => {
  Swal.fire({
    icon: "success",
    title: "Congratulations!",
    text: "Transaction is Successful",
  });
};

export const switchMessage = (chainId) => {//ako chain id e pogresen togas ke se pojavi ovaa 
  if (CHAIN_ID !== chainId) {
    Swal.fire({
      icon: "error",
      title: "Unsupported Network",
      text: `Please switch to Ethereum mainnet to Mint Crypto Bear.`,
    });
    return true;
  }
  return false;
};

export const notEligibleVIP = () => {
  Swal.fire({
    icon: "error",
    title: "Sorry you missed the Whitelist.",
    html: `Come back for the Public Sale on 22nd Feb at 11:30 PST/ 19:30 GMT<br>
    See yah then!`,
  });
};

export const alreadyMinted = () => {
  Swal.fire({
    icon: "error",
    title: "Already minted upto allowed count",
    text: `You can now mint in public sale which is on 22nd February`,
  });
};

export const addressError = () => {
  Swal.fire({
    icon: "error",
    title: "Address not valid!",
    text: `Please enter right address.`,
  });
};

// export const approveDialog = (account) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You are required to give permission to stake your NFT!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, Approve it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       approve(account, (e) => {
//         if (!e) {
//           Swal.fire("Approved!", "Now you can stake your NFT.", "success");
//         }
//       });
//     }
//   });
// };
