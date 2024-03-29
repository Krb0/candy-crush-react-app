import { dragStart, dragEnd, dragDrop } from "../handlers/dragControllers";
import StyledCandy from "../styles/StyledCandy";
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
  scoreResources,
}) => {
  return (
    <StyledCandy
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
          setSquareBeingDragged,
          scoreResources
        );
      }}
    />
  );
};
export default CandyItem;
