import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { Row } from "./styled-components";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export function Header({
  hideReferral = false,
  hideUnlocked = false,
  title = "title",
  onClickReferral,
  unlocked = "-",
}) {
  const theme = useTheme();

  return (
    <>
      <Row
        bgcolor={"#191301"}
        style={{
          padding: "20px 15px",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <Typography fontWeight={"bold"} color={"common.orange"}>
          {title}
        </Typography>
        {!hideReferral && (
          <Typography
            onClick={onClickReferral}
            color="common.orange"
            style={{
              opacity: "0.5",
              padding: "8px 15px",
              margin: "0px 10px",
              borderRadius: 10,
              cursor: "pointer",
            }}
            bgcolor={"secondary.main"}
            variant="body2"
          >
            Referral code
          </Typography>
        )}
        {!hideUnlocked && (
          <Row
            bgcolor={"secondary.main"}
            style={{
              padding: "2px 15px",
              borderRadius: 10,
              marginLeft: "auto",
            }}
          >
            <LockOpenIcon
              color="common.orange"
              style={{
                ...theme.typography.body2,
                color: theme.palette.common.orange,
              }}
            />
            <Box component={"span"} color={theme.palette.common.yellow}>
              <Typography
                color="common.orange"
                variant="body2"
                display={"inline"}
              >
                VFT
              </Typography>
              <Typography
                paddingLeft={"5px"}
                variant="subtitle1"
                display={"inline"}
              >
                {unlocked}
              </Typography>
            </Box>
          </Row>
        )}
      </Row>
    </>
  );
}
