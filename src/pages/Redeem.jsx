import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Header } from "../components/Header";
import { KeyVal } from "../components/KeyVal";
import { CButton, CInput } from "../components/styled-components";

export function Redeem({
  onClickBack,
  unlocked,
  earnings,
  userStakes,
  unstake,
  withdraw,
  valueAmount,
  onChangeAmount,
}) {
  const theme = useTheme();
  return (
    <>
      <Header title="Redeem" hideReferral={true} unlocked={unlocked} />
      <Box
        // border="1px solid red"
        style={{
          width: "90%",
          margin: "0px auto",
        }}
      >
        <Box mt={1} />
        <KeyVal property="Staked VFT" value={userStakes} />
        <Box mt={1} />

        <KeyVal property="Earned VFT" value={earnings} />
        <Box mt={1} />

        <CInput
          placeholder="Enter Amount"
          fullWidth
          disableUnderline
          value={valueAmount}
          onChange={onChangeAmount}
        />
        <Box mt={2} />

        <Grid container direction={"column"} spacing={2}>
          <Grid item>
            <CButton
              fullWidth
              // disabled={parseInt(unlocked) == 0}
              onClick={unstake}
            >
              Unstake
            </CButton>
          </Grid>
          <Grid item>
            <CButton
              // disabled={parseInt(earnings) == 0}
              fullWidth
              onClick={withdraw}
            >
              Redeem
            </CButton>
          </Grid>
          <Grid item>
            <Button
              onClick={onClickBack}
              fullWidth
              style={{
                color: theme.palette.common.orange,
                textTransform: "none",
              }}
              variant="text"
            >
              <Typography variant="subtitle1">Back</Typography>
            </Button>
          </Grid>
        </Grid>
        <Box mt={2} />
      </Box>
    </>
  );
}
