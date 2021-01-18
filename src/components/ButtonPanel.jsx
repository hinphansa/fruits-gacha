import React from "react";
import styled from "styled-components";

function ButtonPanel() {
  return (
    <StyledButtonPanel>
      <button>x</button>
      <button>x</button>
      <button>x</button>
      <button>x</button>
    </StyledButtonPanel>
  );
}

const StyledButtonPanel = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  /* background-color: red; */
`;

export { ButtonPanel };
