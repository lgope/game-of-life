export const CELL_SIZE = 20;

export const getEmptyBoard = (rows, cols) => {
  let board = [];
  for (let y = 0; y < rows; y++) {
    board[y] = [];
    for (let x = 0; x < cols; x++) {
      board[y][x] = false;
    }
  }

  return board;
};

export const getActiveCells = (rows, cols, gameBoard) => {
  let cells = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (gameBoard[y][x]) {
        cells.push({ x, y });
      }
    }
  }

  return cells;
};
