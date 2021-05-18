import { useState, useEffect } from "react";
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
        [letterCount]: { $set: event.target.innerText },
      })
    );
    setLetterCount(letterCount + 1);
    console.log(clickedLetters);
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
      <button onClick={addLetter}>a</button>
      <button>b</button>
      <button>c</button>
      <button>d</button>
      <button>e</button>
      <button>f</button>
      <button>g</button>
      <button>h</button>
      <button>i</button>
      <button>j</button>
    </>
  );
}
