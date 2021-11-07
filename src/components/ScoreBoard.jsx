import React from "react";

function ScoreBoard({ score }) {
  return (
    <div className="score-board">
      <h2 className="score">{score}</h2>
    </div>
  );
}

export default ScoreBoard;
