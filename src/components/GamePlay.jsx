import React, { useState } from "react";
import Scored from "./Scored";
import NumberSelect from "./NumberSelect";
import styled from "styled-components";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Error! You should select a number first.");
      return;
    }
    setError(() => "");
    const randomNum = Math.floor(Math.random() * (7 - 1) + 1);
    setCurrentDice(() => randomNum);

    //checking the score
    if (selectedNumber === randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 1);
      if (score < 1) {
        setScore(0);
      }
    }

    setSelectedNumber(undefined);
  };

  return (
    <GamePlayStyle>
      <div className="top-sec">
        <Scored score={score} />
        <NumberSelect
          setSelectedNumber={setSelectedNumber}
          selectedNumber={selectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice rollDice={rollDice} currentDice={currentDice} />
    </GamePlayStyle>
  );
};

export default GamePlay;

const GamePlayStyle = styled.div`
  .top-sec {
    display: flex;
    position: relative;
    bottom: 20px;
    width: 100%;
    justify-content: space-between;
  }
`;
