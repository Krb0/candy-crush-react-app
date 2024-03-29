import blank from "../images/blank.png";
const checkForColumns = (width, currentColorArray, { score, setScore }) => {
  const isAColumnOfFour = checkForColumnsOfFour(width, currentColorArray);
  const isAColumnOfThree = checkForColumnsOfThree(width, currentColorArray);

  if (isAColumnOfFour) {
    setScore(score + 15);
  } else if (isAColumnOfThree) {
    setScore(score + 10);
  }
  return [isAColumnOfFour, isAColumnOfThree];
};

const checkForColumnsOfFour = (width, currentColorArray) => {
  for (let i = 0; i <= 39; i++) {
    const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
    const decidedColor = currentColorArray[i];
    const isBlank = currentColorArray[i] === blank;
    if (
      columnOfFour.every(
        (square) => currentColorArray[square] === decidedColor && !isBlank
      )
    ) {
      columnOfFour.forEach((square) => (currentColorArray[square] = blank));
      return true;
    }
  }
};
const checkForColumnsOfThree = (width, currentColorArray) => {
  for (let i = 0; i <= 47; i++) {
    const columnOfThree = [i, i + width, i + width * 2];
    const decidedColor = currentColorArray[i];
    const isBlank = currentColorArray[i] === blank;

    if (
      columnOfThree.every(
        (square) => currentColorArray[square] === decidedColor && !isBlank
      )
    ) {
      columnOfThree.forEach((square) => (currentColorArray[square] = blank));
      return true;
    }
  }
};

export default checkForColumns;
