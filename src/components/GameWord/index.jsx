import React, {useState, useEffect} from 'react';

export default function GameWord({word, setWord, testArr}) {

  // Display word
  // Make word fade
  // Handle submit
  // Handle change
  


  useEffect(()=>{
    setWord(testArr[0])
    const timer = setTimeout(() => {
        setWord('');
    }, 1000);
    return () => clearTimeout(timer);
  }, [])


  return(
    <>
      <p>{word}</p>
      
    </>
  )
}