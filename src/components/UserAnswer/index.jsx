import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import update from "immutability-helper";

const LetterDiv = styled.div`
  margin: 5px;
  background: white;
  height: 50px;
  width: 30px;
`;

export default function Answer({ userAnswer, setUserAnswer, flashWord }) {
  const [clickedLetters, setClickedLetters] = useState([]);
  const [letterCount, setLetterCount] = useState(0);
  const counter = useRef(letterCount);

  const makeBlankLetters = (word) => {
    let blankLetters = [];
    for (let i = 0; i < word.length; i++) {
      blankLetters.push("");
    }
    setClickedLetters(blankLetters);
  };

  const addLetter = (event) => {
    setClickedLetters(
      update(clickedLetters, {
        [counter.current]: { $set: event.target.innerText },
      })
    );
    const newCounter = letterCount + 1;
    setLetterCount(newCounter);
    counter.current = newCounter;
  };

  const removeLetter = () => {
    const newCounter = letterCount - 1;
    setLetterCount(newCounter);
    counter.current = newCounter;
    setClickedLetters(
      update(clickedLetters, {
        [counter.current]: { $set: "" },
      })
    );
  };

  useEffect(() => {
    makeBlankLetters(flashWord);
  }, [flashWord]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {clickedLetters?.map((letter, index) => {
          return <LetterDiv key={index}>{letter}</LetterDiv>;
        })}
      </div>
      <button onClick={removeLetter}>Backspace</button>
      <button onClick={addLetter}>p</button>
      <button onClick={addLetter}>b</button>
      <button onClick={addLetter}>c</button>
      <button onClick={addLetter}>d</button>
      <button onClick={addLetter}>e</button>
      <button onClick={addLetter}>f</button>
      <button onClick={addLetter}>g</button>
      <button onClick={addLetter}>h</button>
      <button onClick={addLetter}>i</button>
      <button onClick={addLetter}>l</button>
    </>
  );
}
