import React, { useState } from "react";
import Solve from "./Solve";
import sudokuProblems from "./sudokuProblems";
function App() {
  var [isDisabled, setDisabled] = useState(true);
  var [array, setArray] = useState(sudokuProblems[0]);
  var [new_value, set_value] = useState();

  // Handle User Sudoku Input
  function handleClick(e) {
    if (e.target.value === "input") {
      setDisabled(false);
      setArray([Array(81).fill(0), 2]);
    } else {
      setDisabled(true);
      setArray(
        sudokuProblems[Math.floor(Math.random() * sudokuProblems.length)]
      );
    }

    var keys = document.querySelectorAll(".sudo-input");
    for (var k = 0; k < keys.length; k++) {
      keys[k].style.background = "white";
    }
  }

  var container_array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  function handleChange(e) {
    if (e.target.value === "") {
      setArray((prev_array) => {
        prev_array[0][parseInt(e.target.id)] = 0;
        return prev_array;
      });
      set_value(0);
    }
    if (parseInt(e.target.value) >= 1 && parseInt(e.target.value) <= 9) {
      setArray((prev_array) => {
        prev_array[0][parseInt(e.target.id)] = parseInt(e.target.value);
        return prev_array;
      });
      set_value(e.target.value);
    }
  }

  function inputField(index, p_index) {
    if (array[0][9 * p_index + index] !== 0)
      return (
        <input
          id={9 * p_index + index}
          className="sudo-input"
          type="text"
          style={{ color: "red" }}
          value={array[0][9 * p_index + index]}
          disabled={isDisabled}
          onChange={isDisabled ? null : handleChange}
        />
      );
    else
      return (
        <input
          id={9 * p_index + index}
          className="sudo-input"
          type="text"
          value=""
          disabled={isDisabled}
          onChange={isDisabled ? null : handleChange}
        />
      );
  }

  function singleRow(item, index) {
    var input_Array = [];
    for (var i = 0; i < 9; i++) {
      input_Array.push(inputField(i, index));
    }
    return <div className="singlerow">{input_Array}</div>;
  }

  return (
    <div>
      <div className="algo-top">
        <span className="algo-title">Backtracking</span>
        <span>Sudoku Solver</span>
        <span>
          <button value="input" id="userbutton" onClick={handleClick}>
            Your Input
          </button>
          <button value="random" id="randombutton" onClick={handleClick}>
            Random
          </button>
        </span>
      </div>
      <div className="bubble-main">
        {" "}
        <Solve isDisabled={isDisabled} array={array} />
        <div className="sudoku-master">{container_array.map(singleRow)}</div>
      </div>
    </div>
  );
}

export default App;

