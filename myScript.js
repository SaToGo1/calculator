
// we covert to Number, then we do operation save in variable c
// and we convert to string again on the return.
//a, b -> string with a number "3"
function add(a, b) {
    a = Number(a);
    b = Number(b);
    let c = a + b;
    return '' + c;
}

//a, b -> string with a number "3"
function subtract(a, b){
    a = Number(a);
    b = Number(b);
    let c = a - b;
    return '' + c;
}

//a, b -> string with a number "3"
function multiply(a, b){
    a = Number(a);
    b = Number(b);
    let c = a*b;
    return '' + c;
}

//a, b -> string with a number "3"
function divide(a, b){
    a = Number(a);
    b = Number(b);
    if(b == 0) return 'ERROR';
    let c = a/b;
    return '' + c;
}

//operation -> string with operation "add", ...
//a, b -> string with a number "3"
function operate(operation, a, b){
    if(operation == "add") return add(a, b);
    else if(operation == "subtract") return subtract(a, b);
    else if(operation == "multiply") return multiply(a, b);
    else if(operation == "divide") return divide(a, b);
}

//string -> save the numbers that we will operate.
let displayValue2 = "0";
let displayValue = "0";

//string -> save operation "add", ...
let lastOperation = "";
let operation = "";
//string -> save operation "+", ... to show in the display.
let displayOperation = "";

//HTML element of the display, actual number.
let displayResult = document.getElementById("display_result");
//HTML element of the display, total expresison.
let displayFullOperation = document.getElementById("display_operation");

//result --> string with the number to show in the display
//              it can be displayValue or displayValue2.
function actualizeDisplay(result){
    displayResult.textContent = result;
    if(displayValue2 == "0"|| displayValue2 == ""){
        displayFullOperation.textContent = `${displayValue}`;
    } else if(displayValue2 == 'ERROR'){
        displayFullOperation.textContent = `${displayValue2}`;
        displayValue2 = "0";
    } else {
        displayFullOperation.textContent = `${displayValue2} ${displayOperation} ${displayValue}`;
    }
}

//value --> string that contains a number.
function saveNumbers(value){
    displayValue = displayValue + value;
    if(displayValue === "0" + value) displayValue = value; //doesn't save the default 0.
    actualizeDisplay(displayValue);
}

//value -> string with operation "add", ...
function saveOperation(value){
    if(value == "add"){
        operation = "add";
        displayOperation = "+";
    }
    else if(value == "subtract"){
        operation = "subtract";
        displayOperation = "-";
    }
    else if(value == "multiply"){
        operation = "multiply";
        displayOperation = "*";
    }
    else if(value == "divide"){
        operation = "divide";
        displayOperation = "/";
    }
    doOperation(lastOperation);
    lastOperation = value;
    actualizeDisplay(displayValue2);
}

//value -> string with operation "add", ...
function doOperation(value){
    if(displayValue2 == "0"){
        displayValue2 = displayValue;
        displayValue = "0";
    } else {
        displayValue2 = operate(value, displayValue2, displayValue);
        displayValue = 0;
    }
}

function clear(){
    displayValue2 = "0";
    displayValue = "0";
    operation = "";
    actualizeDisplay(displayValue);
}

function equal(){
    if(operation == ""){
        return 0;
    }
    displayFullOperation.textContent = `${displayValue2} ${displayOperation} ${displayValue} =`;
    displayValue2 = operate(operation, displayValue2, displayValue);
    displayResult.textContent = displayValue2;
    if(displayValue2 == 'ERROR'){
        displayFullOperation.textContent = `${displayValue2}`;
        displayValue2 = "0";
    }
}

document.getElementById("number_7").onclick= () => saveNumbers('7');
document.getElementById("number_8").onclick= () => saveNumbers('8');
document.getElementById("number_9").onclick= () => saveNumbers('9');

document.getElementById("number_4").onclick= () => saveNumbers('4');
document.getElementById("number_5").onclick= () => saveNumbers('5');
document.getElementById("number_6").onclick= () => saveNumbers('6');

document.getElementById("number_1").onclick= () => saveNumbers('1');
document.getElementById("number_2").onclick= () => saveNumbers('2');
document.getElementById("number_3").onclick= () => saveNumbers('3');

document.getElementById("number_0").onclick= () => saveNumbers('0');

//document.getElementById("number_point").onclick=...;
document.getElementById("number_equal").onclick= () => equal();

document.getElementById("operation_clear").onclick= () => clear();

document.getElementById("operation_plus").onclick= () => saveOperation("add");
document.getElementById("operation_minus").onclick= () => saveOperation("subtract");
document.getElementById("operation_multiply").onclick= () => saveOperation("multiply");
document.getElementById("operation_divide").onclick= () => saveOperation("divide");

// let buttons = document.getElementsByClassName("buttons");
// for(let i = 0; i < buttons.length; i++){
//     buttons[i].onclick = () => actualizeDisplay();
// }