import React from "react";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { ButtonPanel } from "./components/ButtonPanel";

import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <ButtonPanel />
    </ThemeProvider>
  );
}

const theme = {
  rarity: {
    R: "#0096c7",
    SR: "#4e148c",
    SSR: "#e36414",
  },
  breakpoints: {
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
};

export default App;
