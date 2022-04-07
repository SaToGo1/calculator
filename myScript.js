
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

let displayValue = "";
//value --> string that contains a number.
function saveNumbers(value){
    displayValue = displayValue + value
}

 let displayResult = document.getElementById("display_result");
function actualizeDisplay(){
    displayResult.textContent = displayValue;
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

//document.getElementById("#number_point").onclick=...;
//document.getElementById("#number_equal").onclick=...;

//document.getElementById("#operation_clear").onclick=...;
//document.getElementById("#operation_plus").onclick=...;
//document.getElementById("#operation_minus").onclick=...;
//document.getElementById("#operation_multiply").onclick=...;
//document.getElementById("#operation_divide").onclick=...;

// let buttons = document.getElementsByClassName(".buttons");
// for(let i = 0; i < buttons.length; i++){
//     buttons[i].onclick = () => actualizeDisplay();
// }