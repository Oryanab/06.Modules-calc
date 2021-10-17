"use strict";
import "./styles.css";
import { add, sub, multiply, divide, equals } from "./helpers/math.js";
const resultInput = document.querySelector(".result");

/*
    Delete Button Functionality
*/
document.querySelector(".del").addEventListener("click", (e) => {
  resultInput.value = "";
});

/*
    Connect the KeyBoard to the Input
*/
document.querySelectorAll(".int").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    resultInput.value += btn.value;
  });
});

/*
    user click mathAction n1 becomes the value and mathAction becomes 
    a function
*/
let numberActionJson = "";
document.querySelectorAll(".task").forEach((task) => {
  task.addEventListener("click", (e) => {
    if (task.value === "+") {
      numberActionJson = { n1: resultInput.value, action: add };
      resultInput.value = "";
    } else if (task.value === "-") {
      numberActionJson = { n1: resultInput.value, action: sub };
      resultInput.value = "";
    } else if (task.value === "X") {
      numberActionJson = { n1: resultInput.value, action: multiply };
      resultInput.value = "";
    } else if (task.value === "/") {
      numberActionJson = { n1: resultInput.value, action: divide };
      resultInput.value = "";
    }
  });
});

document.querySelector(".equal").addEventListener("click", (e) => {
  let n1 = numberActionJson.n1;
  let action = numberActionJson.action;
  let n2 = resultInput.value;
  if (parseFloat(n1) && parseFloat(n2)) {
    resultInput.value = equals(parseFloat(n1), parseFloat(n2), action);
  } else {
    alert("please insert numbers only");
  }
});
