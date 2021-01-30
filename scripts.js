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



