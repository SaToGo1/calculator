
function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operate(operation, a, b){
    return operation(a, b);
}

//We use value as a string.
let displayValue = "";
function saveNumbers(value){
    displayValue = displayValue + value
}

