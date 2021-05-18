import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  background-color: #FBBC03;
  color: black;
  font-size: 24px;
  font-weight: bold;
  border: 5px solid;
  border-color: black;
  border-radius: 15px;
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