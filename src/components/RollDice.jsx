import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <RollDiceStyle>
      <div>
        <img
          src={`images/dice_sides/dice${currentDice}.png`}
          alt="dice-image"
          onClick={() => {
            rollDice();
          }}
        />
        <p>Click on Dice to Roll</p>
      </div>
    </RollDiceStyle>
  );
};

export default RollDice;

const RollDiceStyle = styled.div`
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
