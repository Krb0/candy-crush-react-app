import { useState, useEffect } from "react";
import checkForColumns from "./controllers/checkForColumns";
import checkForRows from "./controllers/checkForRows";
import GameBoard from "./components/GameBoard";
import dropCandies from "./controllers/dropCandies";
// Images import
import BlueCandy from "./images/blue-candy.png";
import RedCandy from "./images/red-candy.png";
import GreenCandy from "./images/green-candy.png";
import YellowCandy from "./images/yellow-candy.png";
import PurpleCandy from "./images/purple-candy.png";
import OrangeCandy from "./images/orange-candy.png";

const width = 8;
const candyColors = [
  BlueCandy,
  GreenCandy,
  OrangeCandy,
  PurpleCandy,
  RedCandy,
  YellowCandy,
];

const App = () => {
  const [currentColorArray, setCurrentColorArray] = useState([]);
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  const createBoard = () => {
    const randomColorArray = [];
    for (let i = 0; i < width ** 2; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArray.push(randomColor);
    }
    setCurrentColorArray(randomColorArray);
  };
  useEffect(() => {
    createBoard();
  }, []);
  // Check for columns of three
  useEffect(() => {
    setTimeout(() => {}, 1000);
    const timer = setInterval(() => {
      checkForColumns(width, currentColorArray);
      checkForRows(currentColorArray);
      dropCandies(width, candyColors, currentColorArray);
      setCurrentColorArray([...currentColorArray]);
    }, 100);
    return () => clearInterval(timer);
  }, [currentColorArray]);
  return (
    <div className="App">
      <GameBoard
        setSquareBeingDragged={setSquareBeingDragged}
        setSquareBeingReplaced={setSquareBeingReplaced}
        squareBeingDragged={squareBeingDragged}
        squareBeingReplaced={squareBeingReplaced}
        currentColorArray={currentColorArray}
        setCurrentColorArray={setCurrentColorArray}
        width={width}
      />
    </div>
  );
};
export default App;
