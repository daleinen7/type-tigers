import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd80a;
  height: 200px;
`;

const Image = ({ image }) => {
  return (
    <Div>
      <img src={image} alt="test" height="150px" />
    </Div>
  );
};

export default Image;
