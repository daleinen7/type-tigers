import { useState } from "react";
import styled from "styled-components";
import update from "immutability-helper";

import FlashWord from "../../components/FlashWord";
import UserAnswer from "../../components/UserAnswer";
import ErrorWords from "../../components/ErrorWords";
import { set } from "mongoose";

const StyledDiv = styled.div`
  background: gray;
`;

export default function Game() {
  const [flashWord, setFlashWord] = useState("");
  const [errorWords, setErrorWords] = useState([]);
  const testArr = ["five", "two", "three", "four", "five"];
  const [correct, setCorrect] = useState(false);

  const compareAnswer = (word) => {
    if (flashWord.toUpperCase() === word.join("")) {
      setCorrect(true);
    } else {
      let error = [];
      for (let letter in flashWord.split("")) {
        if (flashWord[letter] === word[letter].toLowerCase()) {
          error.push([word[letter], true]);
        } else {
          error.push([word[letter], false]);
        }
      }
      if (errorWords.length < 4) {
        setErrorWords(update(errorWords, { $push: [error] }));
      } else {
        let array = [...errorWords];
        array.shift();
        array.push(error);
        setErrorWords(array);
      }
    }
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
      <ErrorWords errorWords={errorWords} />
      <UserAnswer
        flashWord={flashWord}
        compareAnswer={compareAnswer}
        correct={correct}
      />
    </StyledDiv>
  );
}
