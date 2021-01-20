import React from "react";
import styled from "styled-components";

import { FruitCard } from "./FruitCard";

import { getRFruits, getSRFruits, getSSRFruits } from "../data/fruits";

const R_fruits = getRFruits();
const SR_fruits = getSRFruits();
const SSR_fruits = getSSRFruits();

function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <p>
          Welcome to<b> FRUITS GACHA</b>
        </p>
        <div className="rate">SSR - 3%</div>
        <FruitCards>
          {SSR_fruits.map((fruit, index) => {
            return (
              <FruitCard
                key={`R_fruit-${index}`}
                rate="SSR"
                fruit={fruit}
                thumbnail={true}
              />
            );
          })}
        </FruitCards>
        <div className="rate">SR - 17%</div>
        <FruitCards>
          {SR_fruits.map((fruit, index) => {
            return (
              <FruitCard
                key={`R_fruit-${index}`}
                rate="SR"
                fruit={fruit}
                thumbnail={true}
              />
            );
          })}
        </FruitCards>
        <div className="rate">R - 80%</div>
        <FruitCards>
          {R_fruits.map((fruit, index) => {
            return (
              <FruitCard
                key={`R_fruit-${index}`}
                rate="R"
                fruit={fruit}
                thumbnail={true}
              />
            );
          })}
        </FruitCards>
      </BannerContent>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  min-height: 70vh;

  font-family: "Inter";

  display: flex;
  justify-content: center;
`;

const BannerContent = styled.div`
  width: 55%;
  max-width: 950px;

  margin: 20px 0;
  padding: 30px;
  border-radius: 10px;

  border-radius: 10px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.6);

  p {
    margin-top: 0;
    font-size: 24px;
  }

  .rate {
    margin: 10px 0;
    font-weight: 600;

    :nth-of-type(5) {
      color: ${(props) => props.theme.rarity.R};
    }
    :nth-of-type(3) {
      color: ${(props) => props.theme.rarity.SR};
    }
    :nth-of-type(1) {
      color: ${(props) => props.theme.rarity.SSR};
    }
  }
`;

const FruitCards = styled.div`
  width: 100%;

  gap: 10px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    justify-content: center;
  }
`;

export { Banner };
