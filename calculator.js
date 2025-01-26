const calculate = function (firstNumber, secondNumber, operation) {
    return operation(firstNumber, secondNumber);
}

const getAdd = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const getSubtract = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

const getMultiply = function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

const getDivide = function (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

const operations = {
    summation: getAdd,
    difference: getSubtract,
    multiplication: getMultiply,
    dividing: getDivide,
}

/*const selectedOperations = ["summation", "difference", "multiplication", "dividing"];

for (let selectedOperation of selectedOperations) {
    console.log(calculate(6, 3, operations[selectedOperation]));
}*/
const selectedOperation = "summation";// "difference", "multiplication", "dividing"
console.log(calculate(6, 3, operations[selectedOperation]));