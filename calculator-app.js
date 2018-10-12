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
    secondNumber = document.getElementById("output").innerHTML;
    firstNumber = 0;
  }else if (operator == 'minus') {
    document.getElementById("output").innerHTML = Number(secondNumber) - Number(firstNumber)
    secondNumber = document.getElementById("output").innerHTML;
    firstNumber = 0;
  }else if (operator == 'divide') {
    document.getElementById("output").innerHTML = Number(secondNumber) / Number(firstNumber)
    secondNumber = document.getElementById("output").innerHTML;
    firstNumber = 0;
  }else if (operator == 'x') {
    document.getElementById("output").innerHTML = Number(secondNumber) * Number(firstNumber)
    secondNumber = document.getElementById("output").innerHTML;
    firstNumber = 0;
  }
}

function changeOperator(value) {
  if (!secondNumber) {
  secondNumber = firstNumber;
  firstNumber = 0;
} else
  getResult()
  operator = value;
}
function addNeg() {
  teprNumber = Number(document.getElementById("output").innerHTML)
  if (teprNumber > 0) {
    secondNumber = "-" + teprNumber
    firstNumber = 0;
  }else if (teprNumber < 0) {
    secondNumber = teprNumber - (teprNumber*2)
    firstNumber = 0;
  }else {
    return
  }
}

function init() {
  firstNumber = 0;
  secondNumber = null;
  operator = null;
  document.getElementById("output").innerHTML = firstNumber;
}
init()
