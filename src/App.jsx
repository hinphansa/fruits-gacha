import React from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { ButtonPanel } from "./components/ButtonPanel";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <ButtonPanel />
    </React.Fragment>
  );
}

export default App;
