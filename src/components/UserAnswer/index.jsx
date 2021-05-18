import { useState, useEffect, useRef } from "react";
import update from "immutability-helper";
import styled, { css } from "styled-components";
import chroma from "chroma-js";

const Game = styled.div`
  
  background: white;
  font-family: 'Quicksand';
  justify-content: center;
  padding: .7rem;
`;
const Button = styled.button`
  margin: 1vmin;
  font-family: 'Quicksand';
  padding: 1vmin;
  color: var(--white);
  background-color: #E6964B;
  font-size: 3vmin;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  border: .1vmin solid var(--tan-2);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
const LetterDiv = styled.div`
  margin: 5px;
  background: gray;
  color: white;
  height: 50px;
  width: 50px;
  font-size: 24px;
  justify-content: center;
  padding: .7rem;
  border-radius: 5px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 70px);
  grid-template-rows: 70px 70px;
  grid-gap: 15px;
  justify-content: center;
  background-color: white;
`;
const Letter = styled.button`
  
display: flex;
  justify-content: center;
  font-family: 'Quicksand';
  padding: .2rem;
  ${({ color = chroma('#63A35B') }) =>
    css `background-color: ${color};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  border: 2px dashed; 
  border-color: ${color};
  border-radius: 10px;
  background-clip: content-box;
  `}
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
  const addLetter = (event) => {
    if (counter.current < flashWord.length) {
      setClickedLetters(
        update(clickedLetters, {
          [counter.current]: { $set: event.target.innerText },
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

  useEffect(() => {
    makeBlankLetters(flashWord);
    makeSelectableLetters(flashWord);
  }, [flashWord]);

  return (
    <Game>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {clickedLetters?.map((letter, index) => {
          return <LetterDiv key={index}>{letter}</LetterDiv>;
        })}
      </div>
      <Button onClick={removeLetter}>Backspace</Button>
      <Grid>
        {selectableLetters?.map((letter, index) => {
          return (
            <Letter onClick={addLetter} key={index}>
              {letter}
            </Letter>
          );
        })}
      </Grid>
      <Button onClick={() => compareAnswer(clickedLetters)}>Submit</Button>
    </Game>
  );
}
