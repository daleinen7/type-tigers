import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import update from "immutability-helper";

import FlashWord from "../../components/FlashWord";
import UserAnswer from "../../components/UserAnswer";
import ErrorWords from "../../components/ErrorWords";
import Image from "../../components/Image";
import Sentence from "../../components/Sentence";

const StyledDiv = styled.div`
  background: #ffffff;
  border-radius: 5px;
`;

export default function Game() {
  const [flashWord, setFlashWord] = useState("");
  const [image, setImage] = useState("");
  const [sentence, setSentence] = useState("");
  const [errorWords, setErrorWords] = useState([]);
  const testArr = ["five", "two", "three"];
  const testLevel = [
    {
      word: "Small",
      sentence: "Brian the Bunny is very small in size and hard to find!",
      image: "https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg",
    },
    {
      word: "Long",
      sentence: "Brian the bunny has very long, fluffy ears.",
      image: "https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg",
    },
    {
      word: "Warm",
      sentence: "He likes warm places and went to the desert.",
      image: "https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg",
    },
    {
      word: null,
      sentence:
        "After finding the clues, Mr. Bear went to the desert to find Mr. Pickles",
      image: "https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg",
    },
    {
      word: "Warm",
      sentence: "He likes warm places and went to the desert.",
      image: "https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg",
    },
  ];
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
    if (arrCounter.current < testLevel.length - 1) {
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
    }
  };

  useEffect(() => {
    setFlashWord(testLevel[arrCounter.current].word);
    setImage(testLevel[arrCounter.current].image);
    setSentence(testLevel[arrCounter.current].sentence);
  });

  return (
    <StyledDiv>
      <Image image={image} />
      <FlashWord
        flashWord={flashWord}
        setFlashWord={setFlashWord}
        testArr={testArr}
        wordTimer={wordTimer}
        setWordTimer={setWordTimer}
      />
      <Sentence sentence={sentence} />
      <div style={{ content: "", height: "20px", marginBottom: "40px" }}>
        <ErrorWords errorWords={errorWords} />
      </div>
      {flashWord ? (
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
      ) : (
        <button onClick={handleNextWord}>Continue</button>
      )}
    </StyledDiv>
  );
}
