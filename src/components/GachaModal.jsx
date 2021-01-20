import React from "react";
import styled from "styled-components";
import { FruitCard } from "./FruitCard";

const GachaModal = React.memo((props) => {
  return (
    <GachaModalContainer>
      <GachaCards>
        {props.items.map((fruit, index) => {
          return (
            // <GachaCard key={`gacha-card-${index}`}>
            <FruitCard
              key={`gacha-card-${index}`}
              fruit={fruit}
              front={false}
              size={props.items.length === 1 ? "L" : "M"}
            />
            //  </GachaCard>
          );
        })}
      </GachaCards>
    </GachaModalContainer>
  );
});

const GachaModalContainer = styled.div`
  width: 100%;
  height: fit-content;

  padding: 20px;
  margin-bottom: 200px;
  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: blueviolet;
`;

const GachaCards = styled.div`
  /* max-width: 990px; */
  gap: 10px;

  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  justify-content: flex-start;
  padding: 10px;

  background: red;

  /* @media only screen and (min-width: ${({ theme }) =>
    theme.breakpoints.sm}) {
    max-width: 190px;
    background: blueviolet;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 390px;
    background: red;
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 590px;
    background: blue;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 990px;
    background: black;
  } */
`;

export { GachaModal };
