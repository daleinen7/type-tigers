import { React, useState } from "react";
import styled, { css } from "styled-components";

const Letter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand";
  font-size: 2rem;
  padding: 0.2rem;
  height: 75px;
  width: 75px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  background-color: #4f83ff;
  box-shadow: 3px 3px 0 #0f45c3;
  margin: 0;
`;

export default function Letters({
  addLetter,
  letter,
  index,
  clicked,
  correct,
}) {
  const handleClick = (letter, index) => {
    addLetter(letter, index);
  };

  return (
    <>
      <Letter
        style={{
          pointerEvents: clicked.includes(index) || correct ? "none" : "auto",
          backgroundColor: clicked.includes(index) || correct ? "#C9D5F1" : "",
          boxShadow:
            clicked.includes(index) || correct
              ? "inset -3px 3px 0 #66728F"
              : "",
          color: clicked.includes(index) || correct ? "#66728F" : "",
        }}
        onClick={() => handleClick(letter, index)}
      >
        {letter}
      </Letter>
    </>
  );
}
