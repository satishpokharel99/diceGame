import styled from "styled-components";

const StartGame = ({ toggleGameStarted }) => {
  return (
    <StartGameStyle>
      <div className="main">
        <img src="public/images/dices.png" />
        <div className="content">
          <p>Guess the</p>
          <h1>DICE GAME</h1>
          <Button onClick={toggleGameStarted}>Start Game</Button>
        </div>
      </div>
    </StartGameStyle>
  );
};

export default StartGame;

const StartGameStyle = styled.div`
  .main {
    display: flex;
    justify-content: space-around;
  }
  .content {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 69px;
    }
    p {
      align-self: flex-start;
      font-size: 20px;
      position: relative;
      top: 90px;
    }
  }
`;

const Button = styled.button`
  background-color: red;
  align-self: flex-end;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 10px;
  position: relative;
  bottom: 65px;
  &:hover {
    cursor: pointer;
    background-color: #add8e6;
    border: 1px solid black;
    color: black;
    transition: 0.2s background ease-in;
  }
`;
