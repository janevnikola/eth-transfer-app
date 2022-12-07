import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Header } from "../components/Header";
import { CButton, CInput } from "../components/styled-components";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export function GenerateReferral({
  onClickBack,
  valueGRefAddr,
  onChangeGRefAddr,
}) {
  const [generate, setGenerate] = useState(false);
  const theme = useTheme();

  const handlerGenerateHide = () => setGenerate(false);
  const handlerGenerateShow = () => setGenerate(true);

  const handlerOnChangeRef = (e) => {
    onChangeGRefAddr(e);
    handlerGenerateHide();
  };

  const handlerBack = () => {
    onClickBack();
    handlerGenerateHide();
  };

  return (
    <>
      <Header title="Generate a referral code" hideReferral hideUnlocked />
      <Box
        // border="1px solid red"
        style={{
          width: "90%",
          margin: "0px auto",
        }}
      >
        <Box mt={1} />
        <CInput
          placeholder="Enter BUSD Address"
          fullWidth
          disableUnderline
          value={`${valueGRefAddr}`}
          onChange={handlerOnChangeRef}
        />

        {generate && (
          <>
            <Box mt={1} />
            <CInput
              id="gen-ref"
              placeholder="Generate"
              fullWidth
              disableUnderline
              value={`${window.location.origin}/${valueGRefAddr}`}
              endAdornment={
                <IconButton
                  onClick={() => {
                    document.getElementById("gen-ref").select();
                    document.execCommand("copy");
                  }}
                >
                  <ContentCopyIcon
                    style={{ color: theme.palette.common.orange }}
                  />
                </IconButton>
              }
            />
          </>
        )}

        <Box mt={4} />
        <Grid container direction={"column"} spacing={2}>
          <Grid item>
            <CButton fullWidth onClick={handlerGenerateShow}>
              Generate
            </CButton>
          </Grid>
          <Grid item>
            <Button
              onClick={handlerBack}
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
