// Algorithm implementation

import React from "react";

function Solve(props) {
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function moveDisc(n, fromRods, toRods) {
    var fromRode = document.querySelector(fromRods);
    var toRode = document.querySelector(toRods);
    var selectdisc = document.querySelector("#disc" + n);
    fromRode.removeChild(selectdisc);
    selectdisc.style.bottom = 10 + (toRode.childElementCount - 2) * 30 + "px";
    toRode.appendChild(selectdisc);
    await timeout(600);
  }

  async function towerofHanoi(n, fromRod, toRod, auxRod) {
    if (n === 1) {
      await moveDisc(1, fromRod, toRod);
      return;
    }
    await towerofHanoi(n - 1, fromRod, auxRod, toRod);
    await moveDisc(n, fromRod, toRod);
    await towerofHanoi(n - 1, auxRod, toRod, fromRod);
  }

  async function handleClick(e) {
    var numDiscs = document.querySelectorAll(".discs").length;
    document.querySelector("#numDisc").disabled = true;
    await towerofHanoi(numDiscs, "#rodA", "#rodC", "#rodB");
    document.querySelector("#numDisc").disabled = false;
    return;
  }

  return (
    <button className="bubble-sortbutton" onClick={handleClick}>
      {" "}
      Solve{" "}
    </button>
  );
}

export default Solve;

