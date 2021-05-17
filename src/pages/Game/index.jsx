import {useState} from 'react';
import GameWord from '../../components/GameWord';
import Answer from '../../components/Answer';
// import Picture from '../../components/Picture';

export default function Game() {

  const [word, setWord] = useState('');
  const [answer, setAnswer] = useState('');
  const testArr = [
    "one",
    "two",
    "three",
    "four",
    "five"
  ]

  return(
    <>
      <h1>Game</h1>
      {/* <Picture/> */}
      <GameWord word={word} setWord={setWord} testArr={testArr}/>
      <Answer answer={answer} setAnswer={setAnswer}/>
    </>
  )
}