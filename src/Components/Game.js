import React, { useState, useRef, useEffect, Fragment } from "react";
import {
  CELL_SIZE,
  DEFAULT_ACTIVE_CELLS,
  getActiveCells,
  getEmptyBoard,
} from "../utils";
import GameAction from "./GameAction";
import GameBoard from "./GameBoard";

const Game = () => {
  const [activeCells, setActiveCells] = useState([]);
  const [cellNumber, setCellNumber] = useState(50);

  const [isStart, setIsStart] = useState(false);

  const HEIGHT = CELL_SIZE * cellNumber + 2;
  const WIDTH = CELL_SIZE * cellNumber + 2;

  const rows = cellNumber;
  const cols = cellNumber;

  const boardRef = useRef(null);
  const timerRef = useRef(null);
  let gameBoard = useRef(null);
  let generationCount = useRef(0);

  useEffect(() => {
    gameBoard.current = getEmptyBoard(rows, cols);

    // default active cells functionality
    if (cellNumber >= 50) {
      for (let i = 0; i < DEFAULT_ACTIVE_CELLS.length; i++) {
        const y = DEFAULT_ACTIVE_CELLS[i].y,
          x = DEFAULT_ACTIVE_CELLS[i].x;
        gameBoard.current[y][x] = !gameBoard.current[y][x];

        setActiveCells(DEFAULT_ACTIVE_CELLS);
      }
    }
  }, [rows, cols, cellNumber]);

  const handleOnCellNumberInput = (num) => {
    setCellNumber(num);

    if (activeCells.length) setActiveCells([]);
    if (isStart) handleStop();
  };

  const getElementOffset = () => {
    const rect = boardRef.current.getBoundingClientRect();
    const doc = document.documentElement;

    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop,
    };
  };

  const handlOnCellClick = (event) => {
    const elemOffset = getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;

    const x = Math.floor(offsetX / CELL_SIZE);
    const y = Math.floor(offsetY / CELL_SIZE);

    if (x >= 0 && x <= cols && y >= 0 && y <= rows) {
      gameBoard.current[y][x] = !gameBoard.current[y][x];
    }

    generationCount.current = 0;

    setActiveCells(getActiveCells(rows, cols, gameBoard.current));
  };

  const calculateNeighbour = (gameBoard, x, y) => {
    let neighbour = 0;
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
    ]; // (y, x) max eight neighbours

    for (let i = 0; i < directions.length; i++) {
      const dir = directions[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (x1 >= 0 && x1 < cols && y1 >= 0 && y1 < rows && gameBoard[y1][x1]) {
        neighbour++;
      }
    }

    return neighbour;
  };

  const handleNextGeneration = () => {
    let newBoard = getEmptyBoard(rows, cols);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let neighbour = calculateNeighbour(gameBoard.current, x, y);
        if (gameBoard.current[y][x]) {
          if (neighbour === 2 || neighbour === 3) {
            // Any live cell with two or three live neighbours survives.
            newBoard[y][x] = true;
          } else {
            newBoard[y][x] = false;
          }
        } else {
          if (!gameBoard.current[y][x] && neighbour === 3) {
            // Any dead cell with three live neighbours becomes a live cell.
            newBoard[y][x] = true;
          }
        }
      }
    }

    gameBoard.current = newBoard;
    generationCount.current += 1;

    setActiveCells(getActiveCells(rows, cols, gameBoard.current));
  };

  const runSimulation = () => {
    handleNextGeneration();
    timerRef.current = setTimeout(() => {
      runSimulation();
    }, 200);
  };

  const handleStop = () => {
    setIsStart(false);
    clearTimeout(timerRef.current);
  };

  const handleOnStart = () => {
    setIsStart(true);
    runSimulation();
  };

  const handleOnClear = () => {
    if (isStart) setIsStart(false);

    generationCount.current = 0;

    clearTimeout(timerRef.current);
    gameBoard.current = getEmptyBoard(rows, cols);
    setActiveCells([]);
  };

  return (
    <Fragment>
      <GameBoard
        width={WIDTH}
        height={HEIGHT}
        handlOnCellClick={handlOnCellClick}
        boardRef={boardRef}
        activeCells={activeCells}
        generationCount={generationCount.current}
      />

      <GameAction
        onStart={handleOnStart}
        onClear={handleOnClear}
        onNextGeneration={handleNextGeneration}
        cellNumber={cellNumber}
        onCellInput={handleOnCellNumberInput}
        isStart={isStart}
        onStop={handleStop}
      />
    </Fragment>
  );
};

export default Game;
