//function that adds two numbers
function add(num1, num2){
    return num1 + num2;
}
   
//function to multiply two numbers
function multiply(num1, num2){
    return num1 * num2;
}

//function to subtract two numbers
function subtract(num1, num2){
    return num1 - num2;
}

//function to divide two numbers
function divide(num1, num2){
    return num1 / num2;
}

//this function takes two numbers and an operator and calls the appropriate function calculation.
function operate(operator, num1, num2){
    switch (operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

//this function clears the display text
function clear(){
    displayText = '';
    display.textContent = '.';
}

//-------------------------------------------------------------
let displayText = '';   //The text that will be displayed
let operator = '+';  //The operator to use for the calculation.
let runningTotal = 0;   //The running total.

const digits = document.querySelectorAll(".btns .num");
const display = document.querySelector('.display p');
const operatorButtons = document.querySelectorAll('.btns .op')

//add event listener to each number that onclick changes the display text
digits.forEach(element => element.addEventListener('click', function(){
   if(displayText.length < 16){
    displayText += element.textContent; 
    display.textContent = displayText;
   }    
}));

//add event listener to each operator that operates the math on the numbers.
operatorButtons.forEach(element => element.addEventListener('click', function(){
    runningTotal = parseInt(displayText);
    operator = element.textContent;
    clear();
}));







