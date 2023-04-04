import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for(let i =0; i < nrows; i++) {
      let row = [];
      for(let j = 0; j < ncols; j++) {
        const isLit = Math.random() < chanceLightStartsOn;
        row.push(isLit);
      }
      initialBoard.push(row);
    }
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    for(let i = 0; i < nrows; i++) {
      for(let j = 0; j < ncols; j++)  {
        if(board[i][j]) {
          // if the board is still lit player has not won
          return false;
        }
       }
    }
    //  if all cells are off, player has won. 
    return true;
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      let oldBoardCopy = JSON.parse(JSON.stringify(oldBoard));
      // TODO: in the copy, flip this cell and the cells around it
      const flippedCopy = flipCell(oldBoardCopy);

      // TODO: return the copy
      return flippedCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if(hasWon) {
    alert("You Win!!");
  }

  // TODO

  // make table board

  // TODO
}

export default Board;
