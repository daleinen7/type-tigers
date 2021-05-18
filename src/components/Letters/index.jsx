import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import chroma from "chroma-js";

import "./styles.css";

export const Item = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');  
display: flex;
  justify-content: center;
  font-family: 'Quicksand';
  padding: .2rem;
  ${({ color = chroma.random() }) =>
    css `background-color: ${color};
  color: ${chroma.contrast(color, "black") >= 4 ? "black" : "white"};
  font-size: 2em;
  font-weight: bold;
  border: 2px dashed; 
  border-color: ${color};
  border-radius: 15px;
  background-clip: content-box;
  `}
  `;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: 50px 50px;
  grid-gap: 15px;
  justify-content: center;
`;

export default function Letters() {
  return (
    <div className="App">
      <Grid>
        <Item>A</Item>
        <Item>B</Item>
        <Item>C</Item>
        <Item>D</Item>
        <Item>E</Item>
        <Item>F</Item>
        <Item>G</Item>
        <Item>H</Item>
        <Item>I</Item>
        <Item>J</Item>
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Letters />, rootElement);