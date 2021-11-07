import Candy from "./CandyItem";
const GameBoard = ({
  currentColorArray,
  setCurrentColorArray,
  setSquareBeingDragged,
  setSquareBeingReplaced,
  squareBeingDragged,
  squareBeingReplaced,
  width,
}) => {
  const test = () => {
    console.log("hey");
  };
  return (
    <div className="game">
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
          index={index}
          onClick={test}
        />
      ))}
    </div>
  );
};
export default GameBoard;
