function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return b === 0 ? "nope" : (a/b);
}

let operand1, operation, operand2;

function operate(num1, operator, num2) {
    switch (operator) {
        case '+' :
            add(num1, num2);
        case '-' :
            subtract(num1, num2);
        case '*' :
            multiply(num1, num2);
        case '/' : 
            divide(num1, num2);
    }
}