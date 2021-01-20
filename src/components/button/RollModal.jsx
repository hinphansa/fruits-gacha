import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FruitCard } from "../FruitCard";
import { StyledButton } from "../shared/StyledButton";

const RollModal = React.memo(({ items }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(false);
  }, [items]);

  return (
    <React.Fragment>
      <RollModalContainer>
        <GachaCards className="gacha-cards" middle={items.length === 1}>
          {items.map((fruit, index) => {
            return (
              <FruitCard
                key={`gacha-card-${index}`}
                open={open}
                fruit={fruit}
                front={false}
              />
            );
          })}
        </GachaCards>
        <StyledButton onClick={handleOpen}>Open All</StyledButton>
      </RollModalContainer>
    </React.Fragment>
  );
});

const RollModalContainer = styled.div`
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
  grid-template-columns: repeat(auto-fill, 190px);
  display: ${({ middle }) => (middle ? "flex" : "grid !important")};
`;

export { RollModal };
