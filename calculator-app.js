let firstNumber = "";
let secondNumber;
let operator;

function addNumber(number) {
firstNumber ? firstNumber = firstNumber + number : firstNumber = number
document.getElementById('output').innerHTML = firstNumber
}

function getResult() {
  if (operator == 'add') {
    document.getElementById("output").innerHTML = Number(firstNumber) + Number(secondNumber)
  }else if (operator == 'minus') {
    document.getElementById("output").innerHTML = Number(secondNumber) - Number(firstNumber)
  }else if (operator == 'divide') {
    document.getElementById("output").innerHTML = Number(secondNumber) / Number(firstNumber)
  }else if (operator == 'x') {
    document.getElementById("output").innerHTML = Number(secondNumber) * Number(firstNumber)
  }
}

function changeOperator(value) {
  if (!secondNumber) {
  secondNumber = firstNumber
  firstNumber = 0;
} else
  getResult()
  operator = value;
}

function init() {
  firstNumber = 0;
  secondNumber = null;
  operator = null;
  document.getElementById("output").innerHTML = firstNumber;
}
init()
