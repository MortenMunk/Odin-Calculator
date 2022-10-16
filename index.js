let operator = '';
let currentNumber = '';
let previousNumber = '';

document.addEventListener("DOMContentLoaded", function(){
    const clear = document.querySelector('#clear');
    const equal = document.querySelector('#equals');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    let displayedNumber = document.querySelector('.current-number-field');

    // Assigning the updateNumber function to each 'number' button
    // showing the user which numbers has been typed in the calculator
    numbers.forEach((number) => number.addEventListener("click", function(e){
        updateNumber(e.target.textContent)
        displayedNumber.textContent = currentNumber;
    }))
    
    // doing the same as above, but for operators, while displaying it.
    operators.forEach((operation) => operation.addEventListener("click", function(e){
        updateOperator(e.target.textContent)
        displayedNumber.textContent = previousNumber + " " + operator + " " + currentNumber;
    }))

    // functionality for the clear button, showing 0 as default
    clear.addEventListener("click", function(){
        previousNumber = '';
        currentNumber = '';
        operator = '';
        displayedNumber.textContent = 0;
    })

    // functionality for equals button, and adding dots at the end if 
    // number exceed 9 digits
    equal.addEventListener("click", function(){
        if(currentNumber != '' && previousNumber != ''){
            operate();
            previousNumber = roundNumber(previousNumber);
            previousNumber = previousNumber.toString();
            currentNumber = previousNumber.toString();
            if(previousNumber.length <= 9){
                displayedNumber.textContent = previousNumber;
            } else{
                displayedNumber.textContent = previousNumber.slice(0,9) + "...";
            }
        }
    })
})

function updateNumber(num) {
    if(currentNumber.length < 10){
        currentNumber += num;
    }
}

function updateOperator(operation) {
    operator = operation;
    previousNumber = currentNumber;
    currentNumber = '';
}

function add(){
    return previousNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
}

function subtract(){
    return previousNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
}

function multiply(){
    return previousNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
}

function divide(){
    if(currentNumber === 0 && previousNumber === 0){
        alert("Cannot divide by zero!");
        clear.click();
    } else {
        return previousNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
    }
}

function operate(){
    switch(operator){
        case '+':
            return add();
        case '-':
            return subtract();
        case 'x':
            return multiply();
        case '/':
            return divide();
        default:
            return null;
    }
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}