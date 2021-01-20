import React, { useState } from "react";

import styled from "styled-components";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";

import { roll } from "../function/roll";
import { StyledButton } from "./shared/StyledButton";
import { GachaModal } from "./GachaModal";

function RollButton(props) {
  const { children, amount } = props;
  const [items, setItems] = useState([]);

  const handleRoll = () => {
    const result = roll(amount);
    const date = Date.now();

    // Add timestamp
    result.forEach((element) => {
      element["date"] = date;
      return element;
    });

    // Delete some attribute that not important for history
    let temp = JSON.parse(JSON.stringify(result));
    temp.forEach((element) => {
      delete element.thumbnail;
      delete element.img;
      return element;
    });

    // Save history to LocalStorage
    const history = window.localStorage.getItem("history");
    if (history) {
      window.localStorage.setItem(
        "history",
        JSON.stringify(JSON.parse(history).concat(temp))
      );
    } else {
      window.localStorage.setItem("history", JSON.stringify(temp));
    }

    setItems(result);
  };

  const handleClose = () => {
    setItems([]);
  };

  const { modalProps, getTriggerProps } = useModal({
    onOpen: handleRoll,
    onClose: handleClose,
  });

  return (
    <Container>
      <StyledButton
        onClick={handleRoll}
        {...getTriggerProps({
          background: "white",
        })}
      >
        {children}
      </StyledButton>
      <Modal {...modalProps}>
        <GachaModal items={items} />
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  .RMM__body {
    width: 100%;
  }
`;

export { RollButton };
