import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Game = styled.div`
  color: black;
  background: white;
  font-family: 'Quicksand';
  justify-content: center;
  padding: .7rem;
  font-size: 36px;
`;

export default function FlashWord({ flashWord, setFlashWord, testArr }) {
  const [wordTimer, setWordTimer] = useState(false);

  useEffect(() => {
    setFlashWord(testArr[0]);
    const timer = setTimeout(() => {
      setWordTimer(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Game>
      <p style={{ visibility: !wordTimer ? "" : "hidden" }}>
        {flashWord}
      </p>
    </Game>
  );
}
