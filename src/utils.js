export const CELL_SIZE = 20;

export const DEFAULT_ACTIVE_CELLS = [
  { x: 5, y: 0 },
  { x: 6, y: 1 },
  { x: 4, y: 2 },
  { x: 5, y: 2 },
  { x: 6, y: 2 },
];

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

export const StartSvgIcon = () => (
  <svg
    className="play visible"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M8 5v14l11-7z"></path>
  </svg>
);

export const StopSvgIcon = () => (
  <svg
    className="stop visible"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6 6h12v12H6z"></path>
  </svg>
);

export const ResetSvgIcon = () => (
  <svg
    className="replay visible"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path>
  </svg>
);

export const NextSvgIcon = () => (
  <svg
    className="redo visible"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path>
  </svg>
);
