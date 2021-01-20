import React from "react";

import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { ButtonPanel } from "./components/ButtonPanel";
import "react-morphing-modal/dist/ReactMorphingModal.css";

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
    sm: "599px",
    md: "767px",
    lg: "1023px",
    xl: "1239px",
    xxl: "1439px",
  },
};

export default App;
