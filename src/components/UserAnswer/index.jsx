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
  display: grid;
  grid-template-columns: repeat(5, 80px);
  grid-template-rows: 80px 80px;
  grid-gap: 15px;
  justify-content: center;
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
  display: grid;
  grid-template-columns: 500px 20px;
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
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        {clickedLetters?.map((letter, index) => {
          return <LetterDiv key={index}>{letter}</LetterDiv>;
        })}
        {correct && <div>✓</div>}
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
                />
              );
            })}
          </Grid>
        </div>
        <div>
          {!correct && <button onClick={removeLetter}>Backspace</button>}
          {correct ? (
            <button onClick={handleNextWord}>Next</button>
          ) : (
            <button onClick={() => compareAnswer(clickedLetters)}>
              Submit
            </button>
          )}
        </div>
      </FlexDiv>
    </>
  );
}
