import checkForColumns from "./checkForColumns";

import checkForRows from "./checkForRows";

export const dragStart = (e, setSquareBeingDragged) => {
  setSquareBeingDragged(e.target);
};
export const dragDrop = (e, setSquareBeingReplaced) => {
  setSquareBeingReplaced(e.target);
};
export const dragEnd = (
  squareBeingReplaced,
  squareBeingDragged,
  currentColorArray,
  width,
  setCurrentColorArray,
  setSquareBeingReplaced,
  setSquareBeingDragged,
  scoreResources
) => {
  if (squareBeingReplaced) {
    const squareBeingDraggedId = parseInt(
      squareBeingDragged.getAttribute("data-id")
    );
    const squareBeingReplacedId = parseInt(
      squareBeingReplaced.getAttribute("data-id")
    );

    const validMoves = [
      squareBeingDraggedId - 1,
      squareBeingDraggedId - width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + width,
    ];
    const isValid = validMoves.includes(squareBeingReplacedId);
    const swappedArray = swap(
      currentColorArray,
      squareBeingDraggedId,
      squareBeingReplacedId
    );
    const [isARowOfFour, isARowOfThree] = checkForRows(
      swappedArray,
      scoreResources
    );
    const [isAColumnOfFour, isAColumnOfThree] = checkForColumns(
      width,
      swappedArray,
      scoreResources
    );
    if (
      squareBeingReplacedId &&
      isValid &&
      [isARowOfThree, isARowOfFour, isAColumnOfFour, isAColumnOfThree].includes(
        true
      )
    ) {
      currentColorArray[squareBeingReplacedId] =
        squareBeingDragged.getAttribute("src");

      currentColorArray[squareBeingDraggedId] =
        squareBeingReplaced.getAttribute("src");
      setSquareBeingDragged(null);
      setSquareBeingReplaced(null);
    } else {
      currentColorArray[squareBeingReplacedId] =
        squareBeingReplaced.getAttribute("src");
      currentColorArray[squareBeingDraggedId] =
        squareBeingDragged.getAttribute("src");
      setCurrentColorArray([...currentColorArray]);
    }
  }
};

const swap = (array, indexToChange1, indexToChange2) =>
  array.map((newArray, index) => {
    if (index === indexToChange1) return array[indexToChange2];
    if (index === indexToChange2) return array[indexToChange1];
    return newArray;
  });
