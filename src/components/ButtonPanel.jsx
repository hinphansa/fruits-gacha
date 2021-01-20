import React from "react";
import styled from "styled-components";

import { RollButton } from "./button/RollButton";
import { ResetButton } from "./button/ResetButton";
import { HistoryButton } from "./button/HistoryButton";

function ButtonPanel() {
  return (
    <StyledButtonPanel>
      <ButtonPanelContent>
        <div>
          <ResetButton />
          <HistoryButton>History</HistoryButton>
        </div>
        <div>
          <RollButton amount={1}>Roll </RollButton>
          <RollButton amount={10}>Roll X10</RollButton>
        </div>
      </ButtonPanelContent>
    </StyledButtonPanel>
  );
}

const StyledButtonPanel = styled.div`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
`;

const ButtonPanelContent = styled.div`
  width: calc(55% + 80px);
  max-width: 1030px;

  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }

  div button {
    margin: 0 10px;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    div {
      flex-direction: column;
    }
    div button {
      margin-bottom: 10px;
    }
  }
`;

export { ButtonPanel };
