import React from "react";

const GameAction = ({
  onStart,
  onClear,
  onNextGeneration,
  cellNumber,
  onCellInput,
  isStart,
  onStop
}) => {

  const handleCellInput = (event) => {
    onCellInput(event.target.value);
  };

  return (
    <div className="game-actions">
      {isStart ? 
      <button onClick={onStop}>Stop</button> :
      <button onClick={onStart}>Start</button>
      
    }
      <button onClick={onNextGeneration}>Next</button>
      <button onClick={onClear}>Clear</button>
      <input
        className="cell-input"
        type="number"
        placeholder="Cell Number"
        value={cellNumber}
        onChange={handleCellInput}
      />
    </div>
  );
};

export default GameAction;
