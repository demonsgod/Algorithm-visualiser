// Defining Main interface for algorithm implementation

import React, { useState } from "react";
import Find from "./Find";
import Generate from "./Generate";
function App() {
  var rows = 17;
  var columns = 40;
  var [detail, setArray] = useState(Array(rows * columns).fill(1));
  var [what, setWhat] = useState(2);
  var [targets, setTargets] = useState({});

  function handleClick(e) {
    setWhat(parseInt(e.target.value));
  }

  function handleChange(e) {
    if (what === 2) {
      var id = parseInt(e.target.id);
      var new_array = detail;
      if (detail[id] === 0) {
        new_array[id] = 1;
        setArray(new_array);
        e.target.style.background = "white";
      } else if (detail[id] === 1) {
        new_array[id] = 0;
        setArray(new_array);
        e.target.style.background = "black";
      }
    } else if (what === 1) {
      var new_array = detail;
      if (targets.target !== undefined) {
        new_array[targets.target] = 1;
        document.getElementById(targets.target).style.background = "white";
      }
      new_array[parseInt(e.target.id)] = 6;
      setArray(new_array);
      var new_target = targets;
      new_target.target = parseInt(e.target.id);
      setTargets(new_target);
      e.target.style.background = "green";
    } else if (what === 0) {
      var new_array = detail;
      if (targets.starting !== undefined) {
        new_array[targets.starting] = 1;
        document.getElementById(targets.starting).style.background = "white";
      }
      new_array[parseInt(e.target.id)] = 5;
      setArray(new_array);
      var new_target = targets;
      new_target.starting = parseInt(e.target.id);
      setTargets(new_target);
      e.target.style.background = "red";
    }
  }

  function getData(data) {
    setArray(data);
    setTargets({});
  }

  function cell(row, i) {
    var num = row * columns + i;

    if (detail[num] === 1)
      return (
        <div
          id={num}
          className="d-cell"
          style={{ background: "white" }}
          onClick={handleChange}
        ></div>
      );
    else if (detail[num] === 0)
      return (
        <div
          id={num}
          className="d-cell"
          style={{ background: "black" }}
          onClick={handleChange}
        ></div>
      );
    else if (detail[num] === 5)
      return (
        <div
          id={num}
          className="d-cell"
          style={{ background: "red" }}
          onClick={handleChange}
        ></div>
      );
    else if (detail[num] === 6)
      return (
        <div
          id={num}
          className="d-cell"
          style={{ background: "green" }}
          onClick={handleChange}
        ></div>
      );
  }

  var container = new Array(rows).fill(0);

  function row(item, row) {
    var cells = [];
    for (var i = 0; i < columns; i++) {
      cells.push(cell(row, i));
    }
    return <div className="d-row">{cells}</div>;
  }

  return (
    <div>
      <div className="algo-top">
        <span className="algo-title">{"Depth First Search Algorithm"}</span>
        <span>
          <button value="0" id="d-start" onClick={handleClick}>
            Starting Point
          </button>
          <button value="1" id="d-target" onClick={handleClick}>
            Target
          </button>
          <button value="2" id="d-modify" onClick={handleClick}>
            Modify Maze
          </button>
          <Generate
            rows={rows}
            id="d-generate"
            columns={columns}
            sendData={getData}
          />
        </span>
      </div>
      <div className="bubble-main">
        <Find array={detail} targets={targets} rows={rows} columns={columns} />
        {container.map(row)}
      </div>
    </div>
  );
}

export default App;

