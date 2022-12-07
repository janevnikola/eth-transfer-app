import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./utils/functions";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <CssBaseline />
        <App />
      </Web3ReactProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
