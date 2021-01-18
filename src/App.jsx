import React from "react";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { ButtonPanel } from "./components/ButtonPanel";

import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <ButtonPanel />
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  rarity: {
    R: "#0096c7",
    SR: "#4e148c",
    SSR: "#e36414",
  },
});

export default App;
