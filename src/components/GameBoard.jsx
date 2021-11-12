import Candy from "./CandyItem";
import StyledGameBoard from "../styles/StyledGameBoard";
const GameBoard = ({
  currentColorArray,
  setCurrentColorArray,
  setSquareBeingDragged,
  setSquareBeingReplaced,
  squareBeingDragged,
  squareBeingReplaced,
  width,
  scoreResources,
}) => {
  const test = () => {
    console.log("hey");
  };
  return (
    <StyledGameBoard>
      {currentColorArray.map((candyColor, index) => (
        <Candy
          key={index}
          width={width}
          currentColorArray={currentColorArray}
          setCurrentColorArray={setCurrentColorArray}
          setSquareBeingDragged={setSquareBeingDragged}
          setSquareBeingReplaced={setSquareBeingReplaced}
          squareBeingDragged={squareBeingDragged}
          squareBeingReplaced={squareBeingReplaced}
          candyColor={candyColor}
          scoreResources={scoreResources}
          index={index}
          onClick={test}
        />
      ))}
    </StyledGameBoard>
  );
};
export default GameBoard;
