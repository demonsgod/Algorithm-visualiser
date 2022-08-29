//Taking User Input

import React, { useState } from "react";
var inputs = [];

function Userinput(props) {
  var [isInput, setInput] = useState("");
  function handleChange(e) {
    var value = e.target.value;
    if (value.length === 0) inputs = [];
    else if (value.slice(-1) !== ",")
      inputs = value.split(",").map((x) => {
        return parseInt(x);
      });

    setInput(value);
    props.sendArray(inputs);
  }

  return (
    <input
      type="text"
      id="userinput"
      placeholder="Enter Numbers Separated with commas"
      value={isInput}
      onChange={handleChange}
    />
  );
}

export default Userinput;

