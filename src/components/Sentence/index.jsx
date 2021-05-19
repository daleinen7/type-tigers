import React from "react";
import styled from "styled-components";

const SentenceDiv = styled.div`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Sentence = ({ sentence }) => {
  return (
    <>
      <SentenceDiv>{sentence}</SentenceDiv>
    </>
  );
};

export default Sentence;
