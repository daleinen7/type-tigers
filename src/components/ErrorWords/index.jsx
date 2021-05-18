import React from "react";

const ErrorWords = ({ errorWords }) => {
  console.log("errorWords -", errorWords);
  return (
    <>
      {errorWords.map((word, index) => {
        return (
          <div key={index}>
            {word.map((letter, index) => {
              return (
                <span style={{ color: letter[1] ? "" : "red" }} key={index}>
                  {letter[0]}
                </span>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default ErrorWords;
