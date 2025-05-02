import React from "react";
import styled from "styled-components";

const Scored = ({ score }) => {
  return (
    <ScoredStyle>
      <div>
        <h1>{score}</h1>
        <p>Total Socre</p>
      </div>
    </ScoredStyle>
  );
};

export default Scored;

const ScoredStyle = styled.div`
  div {
    text-align: center;
    width: 200px;
  }
`;
