import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButton = styled(Button)`
  width: 90px;
  padding: 7px 14px;

  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.21), 0 1px 3px rgba(0, 0, 0, 0.18);
  &:hover {
    color: white;
    border: transparent;
    transition: 0.5s ease;
    background-color: #f94144 !important;
  }
`;

export { StyledButton };
