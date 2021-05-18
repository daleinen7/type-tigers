import {useState} from 'react';
import Letters from "../Letters/index"

export default function Answer({answer}) {


  
  function handleChange(e) {
    console.log(e);
  }
  
  return(
    <>
    <Letters />
      <form>
        <input onChange={handleChange} type="text" name="word" id="" value={answer}/>
      </form>
    </>
  )
}