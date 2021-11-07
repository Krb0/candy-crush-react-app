import { dragStart, dragEnd, dragDrop } from "../controllers/dragControllers";

const CandyItem = ({
  candyColor,
  index,
  width,
  currentColorArray,
  setSquareBeingDragged,
  squareBeingDragged,
  squareBeingReplaced,
  setSquareBeingReplaced,
  setCurrentColorArray,
}) => {
  return (
    <img
      alt={candyColor}
      key={index}
      src={candyColor}
      data-id={index}
      draggable={true}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
      onDragLeave={(e) => e.preventDefault()}
      onDragStart={(e) => {
        dragStart(e, setSquareBeingDragged);
      }}
      onDrop={(e) => {
        dragDrop(e, setSquareBeingReplaced);
      }}
      onDragEnd={() => {
        dragEnd(
          squareBeingReplaced,
          squareBeingDragged,
          currentColorArray,
          width,
          setCurrentColorArray,
          setSquareBeingReplaced,
          setSquareBeingDragged
        );
      }}
    />
  );
};
export default CandyItem;
