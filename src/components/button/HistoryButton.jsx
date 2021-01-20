import React, { useState } from "react";
import { Modal, useModal } from "react-morphing-modal";

import styled from "styled-components";
import { StyledButton } from "../shared/StyledButton";
import { HistoryAmount } from "./HistoryAmount";
import { HistoryMenu } from "./HistoryMenu";
import { HistoryTable } from "./HistoryTable";

function HistoryButton({ children }) {
  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);

  const [openSelect, setOpenSelect] = useState(false);

  const handleOpenModal = () => {
    const temp = JSON.parse(window.localStorage.getItem("history"));
    setHistory(temp);
    setFilteredHistory(temp);
  };

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };
  const handleOpenSelect = () => {
    setOpenSelect(true);
  };
  const handleChangeSelect = (e) => {
    const value = e.target.value;
    if (value === "ALL") {
      setFilteredHistory(history);
    } else if (history) {
      setFilteredHistory(history.filter((element) => element.rarity === value));
    }
  };

  const { modalProps, getTriggerProps } = useModal({
    onOpen: handleOpenModal,
  });

  return (
    <Container>
      <StyledButton
        {...getTriggerProps({
          background: "white",
        })}
      >
        {children}
      </StyledButton>
      <Modal {...modalProps}>
        <HistoryContainer>
          <HistoryMenu
            open={openSelect}
            onOpen={handleOpenSelect}
            onClose={handleCloseSelect}
            onChange={handleChangeSelect}
          />
          <HistoryTable history={filteredHistory} />
          <HistoryAmount
            R={
              history
                ? history.filter((element) => element.rarity === "R").length
                : 0
            }
            SR={
              history
                ? history.filter((element) => element.rarity === "SR").length
                : 0
            }
            SSR={
              history
                ? history.filter((element) => element.rarity === "SSR").length
                : 0
            }
          />
        </HistoryContainer>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  .RMM__container {
    z-index: 1000;
  }
  .RMM__body {
    width: 100%;
  }
`;

const HistoryContainer = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { HistoryButton };
