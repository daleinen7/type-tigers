import { useState } from "react";
import FlashWord from "../../components/FlashWord";
import UserAnswer from "../../components/UserAnswer";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: gray;
`;

export default function Game() {
  const [flashWord, setFlashWord] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const testArr = ["five", "two", "three", "four", "five"];

  return (
    <StyledDiv>
      <h1>Game</h1>
      {/* <Picture/> */}
      <FlashWord
        flashWord={flashWord}
        setFlashWord={setFlashWord}
        testArr={testArr}
      />
      <UserAnswer
        flashWord={flashWord}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
      />
    </StyledDiv>
  );
}
