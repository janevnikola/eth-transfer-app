import { Box, Grid } from "@mui/material";
import React from "react";
import { Header } from "../components/Header";
import { KeyVal } from "../components/KeyVal";
import { Selector } from "../components/Selector";
import {
  CButton,
  CButtonOutlined,
  CInput,
} from "../components/styled-components";

export function Staking({
  handleSend,
  valueAmount,
  onChangeAmount,
  valueRefAddr,
  onChangeRefAddr,
  balance,
  chainId
}) {
  return (
    <>
      {/* <Header
        onClickReferral={onClickReferral}
        title="Staking"
        unlocked={unlocked}
      /> */}
      <Box
        // border="1px solid red"
        style={{
          width: "90%",
          margin: "0px auto",
        }}
      >
        <Box mt={1} />
        <KeyVal property="Available Balance" value={balance} />
        <Box mt={1} />

        <KeyVal property="Selected Chain" value={chainId} />
        <Box mt={1} />

        <CInput
          placeholder="Recipient Address"
          fullWidth
          disableUnderline
          value={valueRefAddr}
          onChange={onChangeRefAddr}
        />
        <Box mt={1} />

        <CInput
          placeholder="Enter Amount"
          fullWidth
          disableUnderline
          value={valueAmount}
          onChange={onChangeAmount}
        />
        <Box mt={3} />

        <CButtonOutlined onClick={handleSend} fullWidth>
          Send
        </CButtonOutlined>
        <Box mt={2} />
      </Box>
    </>
  );
}
