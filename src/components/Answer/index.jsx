import {useState} from 'react';

export default function Answer({answer}) {


  
  function handleChange(e) {
    console.log(e);
  }
  
  return(
    <>
      <form>
        <input onChange={handleChange} type="text" name="word" id="" value={answer}/>
      </form>
    </>
  )
}