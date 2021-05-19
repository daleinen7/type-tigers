import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #ffd80a;
  height: 200px;
`;

const Image = ({ image }) => {
  return (
    <Div>
      <img src={image} alt="test" width="200" />
    </Div>
  );
};

export default Image;
