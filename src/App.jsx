import StartGame from "./components/StartGame";
import "./App.css";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
import styled from "styled-components";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGameStarted = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <MainContainer>
      <div>
        {isGameStarted ? (
          <GamePlay />
        ) : (
          <StartGame toggleGameStarted={toggleGameStarted} />
        )}
      </div>
    </MainContainer>
  );
}

export default App;

let MainContainer = styled.div`
  background-color: aliceblue;
  max-width: 900px;
  height: 55vh;
  padding-top: 25px;
  margin: 0 auto;
  margin-top: 150px;
  border-radius: 10px;
`;
