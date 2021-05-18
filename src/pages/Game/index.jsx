import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import update from "immutability-helper";

import FlashWord from "../../components/FlashWord";
import UserAnswer from "../../components/UserAnswer";
import ErrorWords from "../../components/ErrorWords";

const StyledDiv = styled.div`
  background: #ffffff;
  border-radius: 5px;
`;

export default function Game() {
  const [flashWord, setFlashWord] = useState("");
  const [errorWords, setErrorWords] = useState([]);
  const testArr = ["five", "two", "three", "four", "five"];
  const [correct, setCorrect] = useState(false);
  const [arrCount, setArrCount] = useState(0);
  const arrCounter = useRef(arrCount);
  const [letterCount, setLetterCount] = useState(0);
  const [clicked, setClicked] = useState([]);
  const counter = useRef(letterCount);
  const [wordTimer, setWordTimer] = useState(false);

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

  const handleNextWord = () => {
    const newCounter = arrCount + 1;
    setArrCount(newCounter);
    arrCounter.current = newCounter;
    setFlashWord(testArr[arrCounter.current]);
    setCorrect(false);
    setErrorWords([]);
    setClicked([]);
    setLetterCount(0);
    counter.current = 0;
    setWordTimer(false);
  };

  useEffect(() => {
    setFlashWord(testArr[arrCounter.current]);
  });

  return (
    <StyledDiv>
      <h1>Spell the word you see below</h1>
      {/* <Picture/> */}
      <FlashWord
        flashWord={flashWord}
        setFlashWord={setFlashWord}
        testArr={testArr}
        wordTimer={wordTimer}
        setWordTimer={setWordTimer}
      />
      <ErrorWords errorWords={errorWords} />
      <UserAnswer
        flashWord={flashWord}
        compareAnswer={compareAnswer}
        correct={correct}
        handleNextWord={handleNextWord}
        counter={counter}
        clicked={clicked}
        setClicked={setClicked}
        letterCount={letterCount}
        setLetterCount={setLetterCount}
      />
    </StyledDiv>
  );
}
