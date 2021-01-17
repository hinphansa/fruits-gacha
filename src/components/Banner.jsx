import React from "react";
import styled from "styled-components";

import { FruitCard } from "./FruitCard";

import { R_fruit } from "../data/R_fruits";
import { SR_fruit } from "../data/SR_fruits";
import { SSR_fruit } from "../data/SSR_fruits";

function Banner() {
  return (
    <BannerContainer display="flex">
      <BannerContent>
        <p>
          Welcome to<b> FRUITS GACHA</b>
        </p>
        <div className="rate">R - 80%</div>
        <FruitCards>
          {R_fruit.map((fruit, index) => {
            return (
              <FruitCard
                key={`R_fruit-${index}`}
                rate="R"
                fruit={fruit}
                flippable={false}
              />
            );
          })}
        </FruitCards>
        <div className="rate">SR - 17%</div>
        <FruitCards>
          {SR_fruit.map((fruit, index) => {
            return (
              <FruitCard
                key={`R_fruit-${index}`}
                rate="SR"
                fruit={fruit}
                flippable={false}
              />
            );
          })}
        </FruitCards>
        <div className="rate">SSR - 3%</div>
        <FruitCards>
          {SSR_fruit.map((fruit, index) => {
            return (
              <FruitCard
                key={`R_fruit-${index}`}
                rate="SSR"
                fruit={fruit}
                flippable={false}
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
  padding: 40px 0;

  font-family: "Inter";

  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
`;

const BannerContent = styled.div`
  width: 55%;
  min-height: 70vh;

  padding: 30px 30px;
  border-radius: 10px;

  backdrop-filter: blur(7.5px);
  background: rgba(0, 2, 90, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12);

  .rate {
    margin: 10px 0;
    font-weight: 600;

    :nth-of-type(1) {
      color: #0096c7;
    }
    :nth-of-type(3) {
      color: #9d4edd;
    }
    :nth-of-type(5) {
      color: #ff951b;
    }
  }
`;

const FruitCards = styled.div`
  width: 100%;

  gap: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export { Banner };
