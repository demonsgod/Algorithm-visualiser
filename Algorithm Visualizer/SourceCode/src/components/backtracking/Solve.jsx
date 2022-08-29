// Sudoku Solver Algorithm

import React, { useState } from "react";

function Sort(props) {
  var [message, setMessage] = useState(["", "red"]);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  var speed;
  if (props.array[1] === 0) {
    speed = 30;
  }

  if (props.array[1] === 1) {
    speed = 15;
  }
  if (props.array[1] === 2) {
    speed = 0;
  }

  function isSafe(grid, row, col, num) {
    for (var i = 0; i < 9; i++) {
      if (grid[row][i] === num) return false;
    }

    for (var i = 0; i < 9; i++) {
      if (grid[i][col] === num) return false;
    }

    var startRow = row - (row % 3),
      startCol = col - (col % 3);

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (grid[i + startRow][j + startCol] === num) return false;
      }
    }
    return true;
  }

  async function solveSudoku(keys, grid, row, col) {
    if (row == 8 && col == 9) return true;
    if (col == 9) {
      row++;
      col = 0;
    }
    if (grid[row][col] > 0) return await solveSudoku(keys, grid, row, col + 1);

    keys[9 * row + col].style.background = "green";
    for (var num = 1; num <= 9; num++) {
      keys[9 * row + col].value = num;
      await timeout(speed);
      if (isSafe(grid, row, col, num)) {
        grid[row][col] = num;
        keys[9 * row + col].value = num;
        await timeout(speed);
        if (await solveSudoku(keys, grid, row, col + 1)) return true;
      }
      grid[row][col] = 0;
      await timeout(speed);
    }
    keys[9 * row + col].value = "";
    keys[9 * row + col].style.background = "white";

    return false;
  }

  async function handleClick() {
    var keys = document.querySelectorAll(".sudo-input");
    /*Disabling buttons Since not required*/
    document.querySelector("#userbutton").disabled = true;
    document.querySelector("#randombutton").disabled = true;
    var grid = [];
    for (var j = 0; j < 9; j++) {
      var temp = [];
      for (var i = 0; i < 9; i++) {
        temp.push(props.array[0][j * 9 + i]);
        keys[j * 9 + i].disabled = false;
      }
      grid.push(temp);
    }

    /*Disabling buttons and KeyWords Since not required*/
    /*Main Sorting Part*/

    var result = await solveSudoku(keys, grid, 0, 0);
    if (result) setMessage(["Solved", "green"]);
    else setMessage(["Can't be solved", "red"]);
    setTimeout(setMessage, 5000, ["", "red"]);
    /*Enabling buttons Since not required*/
    document.querySelector("#userbutton").disabled = false;
    document.querySelector("#randombutton").disabled = false;
    if (props.isDisabled)
      for (i = 0; i < keys.length; i++) {
        keys[i].disabled = true;
      }
    /*Enabling buttons and KeyWords*/
  }

  return (
    <div className="bubble-sortbutton">
      <button onClick={handleClick}> Solve </button>
      {message[0]}
    </div>
  );
}

export default Sort;

