import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader component="header">
      <a href="/">
        <span>F</span>
        <span>R</span>
        <span>U</span>
        <span>I</span>
        <span>T</span>
        <span>S</span>
        <span>GACHA</span>
      </a>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  font-size: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: black;
    padding: 15px 20px;
    text-decoration: none;
  }

  span {
    font-weight: 600;
    user-select: none;
    letter-spacing: 3px;
    font-family: "Fredoka One";

    :nth-child(1) {
      color: #f94144;
    }
    :nth-child(2) {
      color: #f3722c;
    }
    :nth-child(3) {
      color: #f9c74f;
    }
    :nth-child(4) {
      color: #90be6d;
    }
    :nth-child(5) {
      color: #7ac313;
    }
    :nth-child(6) {
      color: #1982c4;
    }
    :nth-child(7) {
      margin-left: 10px;
      letter-spacing: 1px;
    }
  }
`;

export { Header };
