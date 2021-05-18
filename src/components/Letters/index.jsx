import { React, useState } from "react";
import styled, { css } from "styled-components";
import chroma from "chroma-js";

import "./styles.css";

const Letter = styled.button`
  display: flex;
  justify-content: center;
  font-family: "Quicksand";
  padding: 0.2rem;
  ${({ color = chroma("#63A35B") }) =>
    css`
      background-color: ${color};
      font-size: 2rem;
      font-weight: bold;
      border: 2px dashed;
      border-color: ${color};
      border-radius: 10px;
      background-clip: content-box;
    `}
`;

export default function Letters({ addLetter, letter, index, clicked }) {
  const handleClick = (letter, index) => {
    addLetter(letter, index);
  };

  return (
    <>
      <Letter
        style={{
          pointerEvents: clicked.includes(index) ? "none" : "auto",
        }}
        onClick={() => handleClick(letter, index)}
      >
        {letter}
      </Letter>
    </>
  );
}
