//Random Bar lengths to be sorted

import React, { useState } from "react";

var inputs;

function Randominput(props) {
  var [isLen, setLen] = useState(150);
  var [firstTime, setFirstTime] = useState(true);
  if (firstTime) {
    inputs = Array.from(
      {
        length: 150,
      },
      () => Math.floor(Math.random() * 250)
    );
    props.sendArray(inputs);
    setFirstTime(false);
  }
  function handleChange(e) {
    var length = e.target.value;
    inputs = Array.from(
      {
        length: length,
      },
      () => Math.floor(Math.random() * 250)
    );
    setLen(length);
    props.sendArray(inputs);
  }

  return (
    <input
      type="range"
      min="1"
      id="randominput"
      max="200"
      value={isLen}
      onChange={handleChange}
    />
  );
}

export default Randominput;

