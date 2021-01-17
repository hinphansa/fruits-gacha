import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <a href="/">
        <div>
          <span>F</span>
          <span>R</span>
          <span>U</span>
          <span>I</span>
          <span>T</span>
          <span>S</span>
          <span>GACHA</span>
        </div>
      </a>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;

  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: white;
  box-shadow: 0 0 4px 0 rgba(31, 38, 135, 0.5);

  a {
    color: black;
    text-decoration: none;
  }

  div {
    margin-left: 24px;
  }

  span {
    font-weight: 600;
    user-select: none;
    letter-spacing: 3px;
    font-family: "Fredoka One", cursive;

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
