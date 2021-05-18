import { React, useState } from "react";
import styled, { css } from "styled-components";
import chroma from "chroma-js";

import "./styles.css";

const Letter = styled.button`
  display: flex;
  justify-content: center;
  font-family: "Quicksand";
  padding: 0.2rem;

  background-color: pink;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  border: 2px dashed;
  border-color: pink;
  border-radius: 10px;
  background-clip: content-box;
`;

export default function Letters({ addLetter, letter }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    addLetter(letter);
  };

  return (
    <>
      <Letter onClick={handleClick}>{letter}</Letter>
    </>
  );
}
