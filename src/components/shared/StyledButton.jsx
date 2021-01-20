import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  width: 90px;
  padding: 12px 12px;

  border: 0;
  border-radius: 5px;

  background-color: white !important;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.21), 0 1px 3px rgba(0, 0, 0, 0.18);
  &:hover {
    color: white;
    border: transparent;
    transition: 0.3s ease;
    background-color: #f94144 !important;
  }
`;

export { StyledButton };
