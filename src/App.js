import { Box, useTheme, Grid } from "@mui/material";
import MainHeader from "./components/MainHeader";
import "./theme/global.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToaster } from "./hooks/toaster";
import { Staking } from "./pages/Staking";
import { WalletModel } from "./components/WalletModel";
import { useCustomWeb3React } from "./hooks/useCustomWeb3React";
import { useEagerConnect } from "./hooks/walletConnect";
import { transactionFailed, transactionSuccess, transactionRejected, addressError, walletNotConnected } from "./hooks/swal2";
import { toEther, toWei } from "./utils/helpers";

function App() {
  const { account, chainId, library } = useCustomWeb3React();
  const {} = useToaster();
  const _ = useEagerConnect();

  const [balance, setBalance] = useState("0");
  const [open, setOpen] = useState(false);
  const [inAmount, setInAmount] = useState("");
  const [refAddress, setRefAddress] = useState("");

  const theme = useTheme();
  const handlerOpenWallets = () => setOpen(true);

  const init = async () => {
    if (account) {
      let _balance = parseFloat(
        toEther(await library.eth.getBalance(account))
      ).toFixed(5);
      setBalance(_balance);
    }
  };

  useEffect(() => {
    init();
  }, [account, chainId]);

  const handleSend = async () => {
    if (!account) {
      return walletNotConnected();
    }
    if(!library.utils.isAddress(refAddress)) {
      return addressError();
    }
    library.eth.sendTransaction({
      from: account,
      to: refAddress,
      value: toWei(inAmount)
    })
    .on('receipt', function(receipt){
      transactionSuccess();
    })
    // .on('confirmation', function(confirmationNumber, receipt){
      
    // })
    .on('error', (error)=>{
      if(error.code === 4001) transactionRejected();
      else transactionFailed();
    });
  }

  const handlerInAmount = (e) => {
    setInAmount(e.target.value);
  }

  const handlerRefAddr = async (e) => {
    setRefAddress(e.target.value)
  }

  return (
    <>
      <WalletModel open={open} setOpen={setOpen} />
      <ToastContainer style={{ fontSize: "0.9rem" }} />
      <Grid
        minHeight={"100vh"}
        container
        direction="column"
        justifyContent={"space-between"}
      >
        <Grid item>
          <MainHeader connectMetaMask={handlerOpenWallets} account={account} />
        </Grid>
        <Grid item>
          <Box
            display={"flex"}
            alignItems="center"
            flexDirection={"column"}
            padding={"30px 0px"}
          >
            <Box
              // ${theme.palette.common.orange}
              border={`1px solid rgba(255,255,255,0.2)`}
              maxWidth="340px"
              width={"100vw"}
              // padding="0px 30px"
              // margin="0px 10px"
              style={{
                borderRadius: 20,
                padding: 1,
                background: `linear-gradient(to right, ${theme.palette.primary.main} , ${theme.palette.secondary.main})`,
              }}
            >
              <Staking
                handleSend={handleSend}
                valueAmount={inAmount}
                onChangeAmount={handlerInAmount}
                valueRefAddr={refAddress}
                onChangeRefAddr={handlerRefAddr}
                balance={balance}
                chainId={chainId}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
