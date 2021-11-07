import blank from "../images/blank.png";
const checkForRows = (currentColorArray) => {
  const isARowOfFour = checkForRowOfFour(currentColorArray);
  const isARowOfThree = checkForRowOfThree(currentColorArray);

  return [isARowOfFour, isARowOfThree];
};

const checkForRowOfThree = (currentColorArray) => {
  for (let i = 0; i < 64; i++) {
    const row = [i, i + 1, i + 2];
    const decidedColor = currentColorArray[i];
    const invalids = [
      6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
    ];
    if (invalids.includes(i)) continue;
    if (row.every((square) => currentColorArray[square] === decidedColor)) {
      row.forEach((square) => (currentColorArray[square] = blank));
      return true;
    }
  }
};
const checkForRowOfFour = (currentColorArray) => {
  for (let i = 0; i < 64; i++) {
    const row = [i, i + 1, i + 2, i + 3];
    const decidedColor = currentColorArray[i];
    const invalids = [
      5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
      54, 55, 62, 63, 64,
    ];
    if (invalids.includes(i)) continue;
    if (row.every((square) => currentColorArray[square] === decidedColor)) {
      row.forEach((square) => (currentColorArray[square] = blank));
      return true;
    }
  }
};

export default checkForRows;
