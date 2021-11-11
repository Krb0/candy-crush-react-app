import blank from "../images/blank.png";
const dropCandies = (width, candyColors, currentColorArray) => {
  for (let i = 0; i <= 64 - width - 1; i++) {
    const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
    const isFirstRow = firstRow.includes(i);

    if (isFirstRow && currentColorArray[i] === blank) {
      let randomColor = Math.floor(Math.random() * candyColors.length);
      currentColorArray[i] = candyColors[randomColor];
    }
    if (currentColorArray[i + width] === blank) {
      currentColorArray[i + width] = currentColorArray[i];
      currentColorArray[i] = blank;
    }
  }
};

export default dropCandies;
