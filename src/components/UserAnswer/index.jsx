import { useState } from "react";

export default function Answer({ answer, setUserAnswer, compareWords }) {
  function handleChange(e) {
    setUserAnswer(e.target.value);
  }

  return (
    <>
      <form onSubmit={compareWords}>
        <input
          onChange={handleChange}
          type="text"
          name="word"
          id=""
          value={answer}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
