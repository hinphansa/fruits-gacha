import React, { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";

function FruitCard(props) {
  const { fruit, front = true, size = "s" } = props;
  const [isFlipped, setIsFlipped] = useState(!front);

  return (
    <CardContainer onClick={() => setIsFlipped(false)} size={size}>
      <ReactCardFlip
        isFlipped={isFlipped}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <FrontCard rate={fruit.rarity}>
          <img src={fruit.thumbnail} alt={fruit.name} />
          <div>{fruit.name}</div>
        </FrontCard>
        <BackCard rate={fruit.rarity} />
      </ReactCardFlip>
    </CardContainer>
  );
}

// card ratio = 9 : 13
const CardContainer = styled.div`
  ${({ size }) => {
    if (size === "s") {
      return `width: 110px;
              height: 180px;
              font-size: 1rem;
              :hover {
                cursor: default;
              }`;
    } else {
      return `width: 190px;
              height: 285px;
              font-size: 1.3rem;
              :hover {
                cursor: pointer;
              }
      `;
    }
  }}

  /* display: flex; */
  flex-basis: auto;

  position: relative;
  border-radius: 10px;

  color: white;
  font-weight: 600;
  background: green;
`;

const FrontCard = styled.div`
  width: 100%;
  height: 100%;

  padding: 5px;
  border-radius: 10px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  div {
    margin: auto;
  }

  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
    border-radius: inherit;
    object-position: 50% 70%;
  }

  background-color: ${({ rate, theme }) => {
    switch (rate) {
      case "R":
        return theme.rarity.R;
      case "SR":
        return theme.rarity.SR;
      case "SSR":
        return theme.rarity.SSR;
      default:
        return "#fdfffc";
    }
  }};
`;

const BackCard = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 10px;
  transition: 0.3s ease-out;

  background: red;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${require("../asset/backcard.png").default});

  :hover {
    box-shadow: 0px 0px 16px 4px
      ${({ rate, theme }) => {
        switch (rate) {
          case "R":
            return theme.rarity.R;
          case "SR":
            return theme.rarity.SR;
          case "SSR":
            return theme.rarity.SSR;
          default:
            return "transparent";
        }
      }};
  }
`;

export { FruitCard };
