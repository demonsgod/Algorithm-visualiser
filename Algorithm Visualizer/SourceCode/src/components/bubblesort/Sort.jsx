// Main Sorting Algortihm Implementation
import React from "react";

function Sort(props) {
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function handleClick() {
    document.querySelector("#userbutton").disabled = true;
    document.querySelector("#randombutton").disabled = true;
    if (props.type === "input") {
      document.querySelector("#userinput").disabled = true;
    } else {
      document.querySelector("#randominput").disabled = true;
    }

    var elements = document.querySelectorAll(".bubble-small");
    var length = elements.length;
    var speed;
    if (length < 30) {
      speed = 400;
    } else {
      speed = 1000 / length;
    }
    for (var i = 0; i < length - 1; i++) {
      for (var j = 0; j < length - i - 1; j++) {
        elements[j].style.background = "red";
        if (
          parseFloat(elements[j].style.height.slice(0, -2)) >
          parseFloat(elements[j + 1].style.height.slice(0, -2))
        ) {
          elements[j + 1].style.background = "green";
          await timeout(speed / 2);
          var temp = elements[j].style.height;
          elements[j].style.height = elements[j + 1].style.height;
          elements[j + 1].style.height = temp;
          elements[j + 1].style.background = "red";
          elements[j].style.background = "green";
          await timeout(speed / 2);
        } else {
          await timeout(speed / 2);
        }
        elements[j + 1].style.background = "#575A5E";
        elements[j].style.background = "#575A5E";
      }
      elements[j].style.background = "green";
    }
    elements[0].style.background = "green";

    document.querySelector("#userbutton").disabled = false;
    document.querySelector("#randombutton").disabled = false;
    if (props.type === "input") {
      document.querySelector("#userinput").disabled = false;
    } else {
      document.querySelector("#randominput").disabled = false;
    }
  }

  return (
    <button className="bubble-sortbutton" onClick={handleClick}>
      {" "}
      Sort{" "}
    </button>
  );
}

export default Sort;

