import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Game = styled.div`
  color: black;
  background: white;
  font-family: "Quicksand";
  font-weight: bold;
  justify-content: center;
  padding: 0.7rem;
  font-size: 36px;
`;

const Div = styled.div`
  font-size: 3rem;
`;

export default function FlashWord({ flashWord, wordTimer, setWordTimer }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setWordTimer(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [flashWord]);

  return (
    <Game>
      <Div style={{ visibility: !wordTimer ? "" : "hidden" }}>{flashWord}</Div>
    </Game>
  );
}
