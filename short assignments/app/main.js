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

/*
    mission 1:
    user type number
    when user click on one of the actions
    number being kept into a variable

    mission 2:
    the program detects which action did the use clicked 
    the action kept into a variable
    the input field revert to blank

    mission 3:
    user type the second number
    user clicks equal btn 
    second number is kept into a variable

    mission 4:
    a function will take the action variable and check which action is it
    the equal button will take n1, n2, and the action
    the program will run the equals function
    the result will be shown instead of the input


    







*/
