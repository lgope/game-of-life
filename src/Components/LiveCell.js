import React from "react";
import { CELL_SIZE } from "../utils";

const LiveCell = ({ x, y }) => (
  <div
    className="live-cell"
    style={{
      left: `${CELL_SIZE * x + 1}px`,
      top: `${CELL_SIZE * y + 1}px`,
      width: `${CELL_SIZE - 1}px`,
      height: `${CELL_SIZE - 1}px`,
    }}
  />
);

export default LiveCell;
