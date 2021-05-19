import { useState, useEffect, useRef } from "react";
import update from "immutability-helper";
import styled, { css } from "styled-components";

import Letters from "../Letters";

const LetterDiv = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
  margin: 5px 10px 5px 10px;
  border: 3px solid #4f83ff;
  color: #4f83ff;
  height: 75px;
  width: 75px;
  font-size: 50px;
  justify-content: center;
  padding: 0.7rem;
  border-radius: 10px;
`;

const Grid = styled.div`
  // display: grid;
  // grid-template-columns: repeat(5, 80px);
  // grid-template-rows: 80px 80px;
  // grid-gap: 15px;
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  justify-content: space-between;
  background-color: white;
`;

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const FlexDiv = styled.div`
  margin: 0 auto;
  width: 700px;
  display: grid;
  grid-template-columns: 500px 200px;
  gap: 30px;
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
`;

export default function Answer({
  compareAnswer,
  flashWord,
  correct,
  handleNextWord,
  counter,
  clicked,
  setClicked,
  letterCount,
  setLetterCount,
}) {
  // States and refs
  const [clickedLetters, setClickedLetters] = useState([]);
  const [selectableLetters, setSelectableLetter] = useState(null);

  // Generating selectable letters
  const makeSelectableLetters = (word) => {
    let generated = word.toUpperCase().split("");
    for (let i = generated.length; i < 10; i++) {
      generated.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
    shuffleArray(generated);
    setSelectableLetter(generated);
  };

  // Helper function for generated selectable letters
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Generating blank letters
  const makeBlankLetters = (word) => {
    let blankLetters = [];
    for (let i = 0; i < word.length; i++) {
      blankLetters.push("");
    }
    setClickedLetters(blankLetters);
  };

  // Function for selecting letters into blanks
  const addLetter = (letter, key) => {
    if (counter.current < flashWord.length) {
      setClickedLetters(
        update(clickedLetters, {
          [counter.current]: { $set: letter },
        })
      );
      setClicked(update(clicked, { $push: [key] }));
      const newCounter = letterCount + 1;
      setLetterCount(newCounter);
      counter.current = newCounter;
    }
  };

  // Function for backspace
  const removeLetter = () => {
    if (counter.current > 0) {
      const newCounter = letterCount - 1;
      setLetterCount(newCounter);
      counter.current = newCounter;
      setClickedLetters(
        update(clickedLetters, {
          [counter.current]: { $set: "" },
        })
      );
      setClicked(update(clicked, { $splice: [[clicked.length - 1, 1]] }));
    }
  };

  // Make blank letters and generate selectable letters on load
  useEffect(() => {
    makeBlankLetters(flashWord);
    makeSelectableLetters(flashWord);
  }, [flashWord]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0 30px 0",
        }}
      >
        {clickedLetters?.map((letter, index) => {
          return (
            <LetterDiv
              style={{
                backgroundColor: correct ? "#c5ffba" : "",
                border: correct ? "3px solid #2a5e20" : "",
                color: correct ? "#2a5e20" : "",
              }}
              key={index}
            >
              {letter}
            </LetterDiv>
          );
        })}
      </div>
      <FlexDiv>
        <div>
          <Grid>
            {selectableLetters?.map((letter, index) => {
              return (
                <Letters
                  clicked={clicked}
                  key={index}
                  index={index}
                  addLetter={addLetter}
                  letter={letter}
                  correct={correct}
                />
              );
            })}
          </Grid>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{
              pointerEvents: correct ? "none" : "auto",
              backgroundColor: correct ? "#C9D5F1" : "#e36868",
              boxShadow: correct ? "3px 3px 0 #66728F" : "3px 3px 0 #4a0c0c",
              color: correct ? "#66728F" : "black",
            }}
            onClick={removeLetter}
          >
            ⌫
          </Button>
          {correct ? (
            <Button
              style={{
                color: "black",
                backgroundColor: "#FFD80A",
                boxShadow: "3px 3px 0 #F05220",
              }}
              onClick={handleNextWord}
            >
              Next
            </Button>
          ) : (
            <Button
              style={{
                color: "black",
                backgroundColor: "#65f06e",
                boxShadow: "3px 3px 0 #0e4511",
                fontSize: "3rem",
              }}
              onClick={() => compareAnswer(clickedLetters)}
            >
              ✓
            </Button>
          )}
        </div>
      </FlexDiv>
    </>
  );
}
