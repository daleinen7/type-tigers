import { useState } from "react";
import FlashWord from "../../components/FlashWord";
import UserAnswer from "../../components/UserAnswer";
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: gray;
`;

export default function Game() {
  const [flashWord, setFlashWord] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const testArr = ["one", "two", "three", "four", "five"];

  const compareWords = (e) => {
    e.preventDefault();
    flashWord === userAnswer
      ? console.log(flashWord, userAnswer, "correct")
      : console.log(flashWord, userAnswer, "incorrect");
  };

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
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        compareWords={compareWords}
      />
    </StyledDiv>
  );
}