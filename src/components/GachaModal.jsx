import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FruitCard } from "./FruitCard";
import { StyledButton } from "./shared/StyledButton";

const GachaModal = React.memo(({ items }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(false);
  }, [items]);

  return (
    <React.Fragment>
      <GachaModalContainer>
        <GachaCards className="gacha-cards" middle={items.length === 1}>
          {items.map((fruit, index) => {
            return (
              <FruitCard
                key={`gacha-card-${index}`}
                fruit={fruit}
                front={false}
                open={open}
              />
            );
          })}
        </GachaCards>
        <StyledButton onClick={handleOpen}>Open All</StyledButton>
      </GachaModalContainer>
    </React.Fragment>
  );
});

const GachaModalContainer = styled.div`
  width: 100%;
  height: fit-content;

  padding: 20px;
  margin-bottom: 200px;
  box-sizing: border-box;

  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const GachaCards = styled.div`
  gap: 10px;

  width: 100%;
  max-width: 990px;

  justify-content: center;
  display: grid !important;
  grid-template-columns: repeat(auto-fill, 190px);
`;

export { GachaModal };
