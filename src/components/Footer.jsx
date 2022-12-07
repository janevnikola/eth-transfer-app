import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import { Row } from "./styled-components";

import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import discord from "../assets/discord.png";

export function Footer() {
  const theme = useTheme();
  return (
    <>
      <Box mt={2} />
      <Box style={{ backgroundColor: "#281D02", padding: "20px 0px" }}>
        <Container maxWidth="lg">
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Vft />
            </Grid>
            <Grid item style={{ paddingLeft: 40 }}>
              <Develop />
            </Grid>
            <Grid item style={{ paddingLeft: 40 }}>
              <Community />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        style={{
          backgroundColor: "#221902",
          padding: "20px 0px",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            width: "100vw",
            maxWidth: 280,
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: 50,
            alignSelf: "center",
          }}
        >
          <Row>
            <Typography style={{ color: "white" }} variant="subtitle1">
              {"©"}
            </Typography>
            <Typography
              style={{ color: "white", paddingLeft: 5 }}
              variant="subtitle1"
            >
              VFT, Inc.
            </Typography>
            <Typography
              style={{ color: theme.palette.common.orange, paddingLeft: 5 }}
              variant="subtitle1"
            >
              All rights reserved.
            </Typography>
          </Row>
          <Row style={{ justifyContent: "space-around" }}>
            <Typography style={{ color: "#604B16" }} variant="subtitle1">
              Terms
            </Typography>
            <Typography
              style={{ color: "#604B16", paddingLeft: 10 }}
              variant="subtitle1"
            >
              Privacy Policy
            </Typography>
          </Row>
        </Box>
      </Box>
    </>
  );
}

export function Community() {
  return (
    <>
      <Grid container direction={"column"}>
        <Grid item>
          <Typography
            fontWeight={"500"}
            color="common.orange"
            variant="subtitle1"
            height={35}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Community
          </Typography>
        </Grid>
        <Grid item>
          <Row>
            <img src={twitter} alt={"twitter"} />
            <Typography
              style={{ color: "#604B16", paddingLeft: 5 }}
              variant="subtitle1"
            >
              Twitter
            </Typography>
          </Row>
        </Grid>
        <Grid item>
          <Row>
            <img src={telegram} alt={"twitter"} />
            <Typography
              variant="subtitle1"
              style={{ color: "#604B16", paddingLeft: 5 }}
            >
              Telegram
            </Typography>
          </Row>
        </Grid>
        <Grid item>
          <Row>
            <img src={discord} alt={"twitter"} />
            <Typography
              variant="subtitle1"
              style={{ color: "#604B16", paddingLeft: 5 }}
            >
              Discord
            </Typography>
          </Row>
        </Grid>
      </Grid>
    </>
  );
}

export function Develop() {
  return (
    <>
      <Grid container direction={"column"}>
        <Grid item>
          <Typography
            fontWeight={"500"}
            color="common.orange"
            variant="subtitle1"
            height={35}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Develop
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ color: "#604B16" }} variant="subtitle1">
            Github
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export function Vft() {
  return (
    <>
      <Grid container direction={"column"}>
        <Grid item>
          <Row>
            <img src={logo} width="35px" alt="logo" />
            <Typography
              fontWeight={"500"}
              color="common.orange"
              variant="subtitle1"
            >
              VFT
            </Typography>
          </Row>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            style={{ color: "#604B16", paddingLeft: 5 }}
          >
            Website
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            style={{ color: "#604B16", paddingLeft: 5 }}
          >
            BSCSCAN
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            style={{ color: "#604B16", paddingLeft: 5 }}
          >
            Audit
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
