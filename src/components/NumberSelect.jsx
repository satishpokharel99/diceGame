import styled from "styled-components";

const NumberSelect = ({ setSelectedNumber, selectedNumber, ...rest }) => {
  const NumArr = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectStyle>
      <p className="error">{rest.error}</p>
      <div>
        {NumArr.map((value, i) => {
          return (
            <Box
              key={i}
              isSelected={value === selectedNumber}
              onClick={() => setSelectedNumber(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Please select any Number</p>
    </NumberSelectStyle>
  );
};

export default NumberSelect;

const NumberSelectStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vh;
  div {
    display: flex;
    gap: 10px;
  }
  .error {
    color: blue;
    font-style: italic;
  }
`;

const Box = styled.button`
  background-color: #dc143c;
  border: none;
  cursor: pointer;
  padding: 20px;
  color: white;
  font-size: 20px;
  border-radius: 50%;

  background-color: ${(props) => (props.isSelected ? "#add8e6" : "#dc143c")};
  color: ${(props) => (props.isSelected ? "black" : "white")};
`;
