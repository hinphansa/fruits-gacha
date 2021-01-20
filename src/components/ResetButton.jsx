import React from "react";
import { StyledButton } from "./shared/StyledButton";

function ResetButton() {
  const clearHistory = () => {
    console.log(window.localStorage.getItem("history"));
    window.localStorage.removeItem("history");
  };
  return <StyledButton onClick={clearHistory}>Reset</StyledButton>;
}

export { ResetButton };
