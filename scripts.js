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
            return add(num1, num2);    
        case '-':
            return subtract(num1, num2);
         
        case 'x':
            return multiply(num1, num2);
       
        case '/':
            return divide(num1, num2);
   }
}

//this function clears the display text
function clear(){
    displayText = '';
    display.textContent = '.';
    operator = '';
    runningTotal = 0;
    count = 0;
}

//-------------------------------------------------------------
let displayText = '';   //The text that will be displayed
let operator = '+';  //The operator to use for the calculation.
let runningTotal = 0;   //The running total.
let count = 0;

const digits = document.querySelectorAll(".btns .num");
const display = document.querySelector('.display p');
const operatorButtons = document.querySelectorAll('.btns .op');
const equals = document.querySelector('#equals');
const clr = document.querySelector('#clr');

//add event listener to each number that onclick changes the display text
digits.forEach(element => element.addEventListener('click', function(){
   if(displayText.length < 16){
    displayText += element.textContent; 
    display.textContent = displayText;
   }    
}));

//add event listener to each operator that operates the math on the numbers.
operatorButtons.forEach(element => element.addEventListener('click', function(){
    count === 0 ? runningTotal = parseInt(displayText): runningTotal = operate(operator, runningTotal, parseInt(displayText));

    operator = element.textContent;
    displayText = '';
    
    display.textContent = runningTotal;
}));

//add event listener to equals button and run operate().
equals.addEventListener('click', function(){
    runningTotal = operate(operator, runningTotal, parseInt(displayText));
    display.textContent = runningTotal;
});

//add event listener to clear
clr.addEventListener('click', clear);






