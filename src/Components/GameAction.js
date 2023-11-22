import React from "react";
import { NextSvgIcon, ResetSvgIcon, StartSvgIcon, StopSvgIcon } from "../utils";

const GameAction = ({
  onStart,
  onClear,
  onNextGeneration,
  cellNumber,
  onCellInput,
  isStart,
  onStop,
}) => {
  const handleCellInput = (event) => {
    onCellInput(event.target.value);
  };

  return (
    <div className="game-actions">
      {isStart ? (
        <button onClick={onStop}><StopSvgIcon/> Stop</button>
      ) : (
        <button onClick={onStart}>
          <StartSvgIcon/>
          Start
        </button>
      )}
      <button onClick={onNextGeneration}><NextSvgIcon/> Next</button>
      <button onClick={onClear}><ResetSvgIcon/> Reset</button>
      <input
        className="cell-input"
        type="number"
        title="Cell Number"
        placeholder="Cell Number"
        value={cellNumber}
        onChange={handleCellInput}
      />
    </div>
  );
};

export default GameAction;
