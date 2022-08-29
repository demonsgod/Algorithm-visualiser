// Defining Environment

import React, { useState } from "react";
import Solve from "./Solve";
function App() {
  let [disc, setDiscs] = useState(3);
  function handleChange(e) {
    var rodA = document.querySelector("#rodA");
    var rodC = document.querySelector("#rodC");
    var rodCelements = rodC.childNodes;
    for (var l = rodCelements.length - 1; l >= 2; l--) {
      var elementcheck = rodCelements[l];
      rodC.removeChild(elementcheck);
      rodA.appendChild(elementcheck);
    }
    let value = e.target.value;
    setDiscs(value);
  }

  function getDiscs() {
    var Discs = [];
    if (disc !== "") {
      for (var k = 0; k < disc; k++) {
        var r = Math.floor(Math.random() * 150);
        var g = Math.floor(Math.random() * 150);
        var b = Math.floor(Math.random() * 150);
        var rgb = "rgb(" + r + "," + g + "," + b + ")";
        Discs.push(
          <div
            id={"disc" + (disc - k)}
            className="discs"
            style={{
              height: "30px",
              width: 70 + (disc - k) * 20 + "px",
              position: "absolute",
              bottom: 10 + k * 30 + "px",
              left: "50%",
              transform: "translateX(-50%)",
              background: rgb,
              borderRadius: "15px",
              border: "1px solid lightgrey",
            }}
          ></div>
        );
      }
    }
    return Discs;
  }
  return (
    <div>
      <div className="algo-top">
        <span className="algo-title">{"Tower Of Hanoi"}</span>
        <span>
          Number of Discs
          <input
            value={disc}
            id="numDisc"
            type="number"
            onChange={handleChange}
          />
        </span>
      </div>
      <div className="bubble-main">
        <Solve />
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            id="rodA"
            style={{
              width: (window.innerWidth - 100) / 3 + "px",
              position: "relative",
            }}
          >
            <div
              style={{
                height: disc * 30 + 20 + "px",
                width: "10px",
                background: "red",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            ></div>
            <div
              style={{
                width: (window.innerWidth - 130) / 3 + "px",
                height: "10px",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                background: "red",
              }}
            ></div>
            {getDiscs()}
          </div>
          <div
            id="rodB"
            style={{
              width: (window.innerWidth - 100) / 3 + "px",
              float: "left",
              position: "relative",
            }}
          >
            <div
              style={{
                height: disc * 30 + 20 + "px",
                width: "10px",
                background: "green",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            ></div>
            <div
              style={{
                width: (window.innerWidth - 130) / 3 + "px",
                height: "10px",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                background: "green",
              }}
            ></div>
          </div>
          <div
            id="rodC"
            style={{
              width: (window.innerWidth - 100) / 3 + "px",
              float: "left",
              position: "relative",
            }}
          >
            <div
              style={{
                height: disc * 30 + 20 + "px",
                width: "10px",
                background: "blue",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            ></div>
            <div
              style={{
                width: (window.innerWidth - 130) / 3 + "px",
                height: "10px",
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
                background: "blue",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

