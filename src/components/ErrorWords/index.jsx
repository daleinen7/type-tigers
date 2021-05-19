import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: inline-block;
  padding: 5px 10px 5px 10px;
  background-color: #c9d5f1;
  border-radius: 5px;
  font-size: 1.5rem;
  margin: 0 5px 0 5px;
`;

const ErrorWords = ({ errorWords }) => {
  return (
    <>
      {errorWords.map((word, index) => {
        return (
          <Div key={index}>
            {word.map((letter, index) => {
              return (
                <span style={{ color: letter[1] ? "" : "red" }} key={index}>
                  {letter[0]}
                </span>
              );
            })}
          </Div>
        );
      })}
    </>
  );
};

export default ErrorWords;
