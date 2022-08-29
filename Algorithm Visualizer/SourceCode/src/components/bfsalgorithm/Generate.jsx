// To generate random environment
import React, { useState } from "react";

function Generate(props) {
  function handleClick() {
    var elements = document.querySelectorAll(".d-cell");
    for (var i = 0; i < elements.length; i++)
      elements[i].style.background = "white";
    var array = [];
    for (var i = 0; i < props.rows * props.columns; i++) {
      if (Math.random() < 0.3) array.push(0);
      else array.push(1);
    }
    props.sendData(array);
  }

  return (
    <button value="random" id="randombutton" onClick={handleClick}>
      Generate Maze
    </button>
  );
}

export default Generate;

