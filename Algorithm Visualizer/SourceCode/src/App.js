import React, { useState } from "react";
import algorithms from "./Algos.js";

function App() {
  var [algo, setAlgo] = useState(0);

  function selectList(item) {
    return <option value={item.value}>{item.text}</option>;
  }

  function handleChange(e) {
    var temp = algorithms.find((x, index) => {
      if (e.target.value === x.value) {
        setAlgo(index);
        return index;
      }
    });
    console.log(temp);
  }

  return (
    <div>
      <div className="App">
        <span className="logo-main logo-title">Algorithm Visualizer</span>
        <div className="logo-main">
          <select className="select-part" onChange={handleChange}>
            {algorithms.map(selectList)}
          </select>
        </div>
      </div>
      {/*Add Element Based on the Selection*/}
      {algorithms[algo].dom}
    </div>
  );
}

export default App;

