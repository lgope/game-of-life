import React from "react";
import { CELL_SIZE } from "../utils";
import LiveCell from "./LiveCell";

const GameBoard = ({
  width,
  height,
  handlOnCellClick,
  boardRef,
  activeCells,
  generationCount,
}) => (
  <div className="game-container">
    <div
      className="game-board"
      style={{
        width,
        height,
        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
      }}
      onClick={handlOnCellClick}
      ref={(n) => {
        boardRef.current = n;
      }}>
      {activeCells.map((cell) => (
        <LiveCell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
      ))}
    </div>

    <div className="generation-count">
      <p>Generation Count: {generationCount}</p>
    </div>
  </div>
);

export default GameBoard;
