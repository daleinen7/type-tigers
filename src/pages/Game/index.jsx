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
  height: calc(100vh - 80px);
`;

const Button = styled.button`
  font-size: 1.5rem;
  color: white;
  border: none;
  background-color: #4f83ff;
  box-shadow: 3px 3px 0 #0f45c3;
  height: 75px;
  width: 150px;
  padding: 0.5rem;
  margin: 0;
  border-radius: 10px;
  &:active {
    color: black;
    background-color: #c9d5f1;
    box-shadow: inset -3px 3px 0 #66728f;
    color: #66728f;
  }
`;

const CoinDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 125px;
  background-color: #4f83ff;
  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 0;
    background-color: #4f83ff;
    height: 125px;
    width: 50px;
    border-radius: 20px;
  }
`;

export default function Game({ kids, setKids, activeKid }) {
  const [flashWord, setFlashWord] = useState("");
  const [image, setImage] = useState("");
  const [sentence, setSentence] = useState("");
  const [errorWords, setErrorWords] = useState([]);
  const testArr = ["five", "two", "three"];
  const testLevel = [
    {
      word: "Small",
      sentence: "Brian the bunny is very _____ in size and hard to find!",
      image:
        "https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621440084/Group_347_phosos.svg",
    },
    {
      word: "Long",
      sentence: "Brian the bunny has very ____ fluffy ears.",
      image:
        "https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621383598/hugo-283_zczt8p.svg",
    },
    {
      word: "Warm",
      sentence: "Brian likes ____ places and went to the desert.",
      image:
        "https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621383752/hugo-211_btmjoj.svg",
    },
    {
      word: null,
      sentence:
        "After finding the clues, Bobby Bear went to the desert to find Mr. Pickles.",
      image:
        "https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621440078/Group_349_yhyt43.svg",
    },
    {
      word: "Drink",
      sentence:
        "When Brian goes to the desert, he likes to _____ water from cacti.",
      image:
        "https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621440080/Group_350_nqsoml.svg",
    },
    {
      word: "Cold",
      sentence:
        "It was important to find Brian quickly because the desert gets really ____ at night.",
      image:
        "https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621440084/Group_351_ioyfyn.svg",
    },
    {
      word: "Group",
      sentence: "Brian might be in a _____, bunnies love their families!",
      image:
        "https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621440081/Group_352_eqamuy.svg",
    },
    {
      word: "Group",
      sentence:
        "After finding some cacti and Brian's friends, Bobby Bear found Brian and they went back home together.",
      image:
        "https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621440083/Group_353_u3umos.svg",
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
        if (flashWord[letter].toLowerCase() === word[letter].toLowerCase()) {
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

  const addCoin = () => {
    fetch(`http://localhost:3001/api/kids/60a417854e7ac2828f9034b0`, {
      method: "PUT",
      body: { coins: 123 },
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handlePrevWord = () => {
    if (arrCounter.current > 0) {
      const newCounter = arrCount - 1;
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
      <Button
        style={{ position: "absolute", left: "50px", top: "125px" }}
        onClick={handlePrevWord}
      >
        Prev
      </Button>
      <Button
        style={{ position: "absolute", right: "50px", top: "125px" }}
        onClick={handleNextWord}
      >
        Skip
      </Button>
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
        <Button
          onClick={handleNextWord}
          style={{
            color: "black",
            backgroundColor: "#FFD80A",
            boxShadow: "3px 3px 0 #F05220",
          }}
        >
          Continue
        </Button>
      )}
      <CoinDiv>
        <div onClick={addCoin}>{kids[activeKid].coins}</div>
        <img
          width="100px"
          src="https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621385779/hugo-264_zlr6kn.svg"
        />
      </CoinDiv>
    </StyledDiv>
  );
}
