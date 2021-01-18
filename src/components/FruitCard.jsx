import React, { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";

function FruitCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { fruit, flippable = true, size = "s", rate } = props;

  return (
    <CardContainer
      onClick={() => flippable && setIsFlipped(!isFlipped)}
      size={size}
      rate={rate}
    >
      <ReactCardFlip
        isFlipped={isFlipped}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <FrontCard>
          <img src={fruit.thumbnail} alt={fruit.name} />
          <div>{fruit.name}</div>
        </FrontCard>
        <BackCard>BACK</BackCard>
      </ReactCardFlip>
    </CardContainer>
  );
}

// card ratio = 9 : 13
const CardContainer = styled.div`
  width: ${(props) => (props.size === "s" ? "110px" : "108px")};
  height: ${(props) => (props.size === "s" ? "160px" : "156px")};

  padding: 5px;
  overflow: hidden;
  border-radius: 10px;
  box-sizing: border-box;

  color: white;
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
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);

  :hover {
    cursor: ${(props) => (props.size === "s" ? "default" : "pointer")};
  }
`;

const FrontCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
    object-position: 50% 70%;
    border-radius: inherit;
  }

  div {
    margin: auto;
  }
`;

const BackCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export { FruitCard };
