import React from "react";
import { List, ListItemText } from "@material-ui/core";
import styled from "styled-components";

const HistoryAmount = React.memo(({ R, SR, SSR }) => {
  return (
    <StyledAmount>
      <List>
        <ListItemText primary={`Total   R: ${R}`} />
        <ListItemText primary={`Total  SR: ${SR}`} />
        <ListItemText primary={`Total SSR: ${SSR}`} />
      </List>
    </StyledAmount>
  );
});

const StyledAmount = styled.div`
  width: 500px;
`;

export { HistoryAmount };
