import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd80a;
  height: 200px;
`;

const Image = ({ image, flashWord }) => {
  return (
    <Div style={{ height: flashWord ? "" : "550px" }}>
      <img
        style={{ height: flashWord ? "150px" : "400px" }}
        src={image}
        alt="test"
      />
    </Div>
  );
};

export default Image;
