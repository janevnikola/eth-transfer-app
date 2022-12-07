import { createTheme } from "@mui/material";

const yellow = "#FFE599";
const orange = "#F28F21";

export const theme = createTheme({
  palette: {
    divider: "white",
    common: {
      yellow,
      orange,
    },
    background: {
      paper: "#312506",
      default: "#312506",
    },
    primary: {
      main: "#281D01",
    },
    secondary: {
      main: "#312506",
    },
  },
  typography: {
    body1: {
      fontSize: "18px",
    },
    body2: {
      fontSize: "12px",
    },
    subtitle1: {
      fontSize: "14px",
    },
    h5: {
      fontSize: "28px",
    },
  },
});
