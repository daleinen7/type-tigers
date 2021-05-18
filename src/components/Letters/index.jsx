import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  background-color: #C4C4C4;
  color: black;
  font-size: 28px;
  font-weight: bold;
  border: 3px solid;
  border-color: gray;
  border-radius: 15px;
   
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;
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