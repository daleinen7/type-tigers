import { useState, useEffect, useRef } from "react";
import update from "immutability-helper";
import styled, { css } from "styled-components";
import chroma from "chroma-js";

import Letters from "../Letters";

const LetterDiv = styled.div`
  margin: 5px;
  background: white;
  height: 50px;
  width: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 70px);
  grid-template-rows: 70px 70px;
  grid-gap: 15px;
  justify-content: center;
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

export default function Answer({ compareAnswer, flashWord }) {
  // States and refs
  const [clickedLetters, setClickedLetters] = useState([]);
  const [selectableLetters, setSelectableLetter] = useState(null);
  const [letterCount, setLetterCount] = useState(0);
  const counter = useRef(letterCount);

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
  const addLetter = (letter) => {
    if (counter.current < flashWord.length) {
      setClickedLetters(
        update(clickedLetters, {
          [counter.current]: { $set: letter },
        })
      );
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
    }
  };

  // Make blank letters and generate selectable letters on load
  useEffect(() => {
    makeBlankLetters(flashWord);
    makeSelectableLetters(flashWord);
  }, [flashWord]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {clickedLetters?.map((letter, index) => {
          return <LetterDiv key={index}>{letter}</LetterDiv>;
        })}
      </div>
      <button onClick={removeLetter}>Backspace</button>
      <Grid>
        {selectableLetters?.map((letter, index) => {
          return <Letters key={index} addLetter={addLetter} letter={letter} />;
        })}
      </Grid>
      <button onClick={() => compareAnswer(clickedLetters)}>Submit</button>
    </>
  );
}
