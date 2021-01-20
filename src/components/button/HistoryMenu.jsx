import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";

const HistoryMenu = React.memo((props) => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    props.onChange(e);
    setFilter(e.target.value);
  };

  return (
    <StyledFormControl>
      <InputLabel>Rarity</InputLabel>
      <Select
        open={props.open}
        value={filter}
        onOpen={props.onOpen}
        onClose={props.onClose}
        onChange={handleChange}
      >
        <MenuItem value="ALL">ALL</MenuItem>
        <MenuItem value="R">R</MenuItem>
        <MenuItem value="SR">SR</MenuItem>
        <MenuItem value="SSR">SSR</MenuItem>
      </Select>
    </StyledFormControl>
  );
});

const StyledFormControl = styled(FormControl)`
  width: 200px;
`;

export { HistoryMenu };
