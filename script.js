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

let operand1="", operation="", operand2="", result = "";

function operate(num1, operator, num2) {
    show.innerHTML = " ";
    switch (operator) {
        case '+' :
            return add(num1, num2);
        case '-' :
            return subtract(num1, num2);
        case '*' :
            return multiply(num1, num2);
        case '/' : 
            return divide(num1, num2);
    }
}

// const show = document.querySelector("#show");

// let objNum = {}, index = 0;

// const numbers = document.querySelectorAll("button.number");
// numbers.forEach( number => { 
//     number.addEventListener("click",() => {
//         enable(operators);
//         if(!(index in obj)){
//             obj[index] = "";
//             show.textContent = "";
//         }
//         show.textContent += number.textContent;
//         obj[index] += number.textContent;
//     })
// });

// const listOperator = [ '+', '-', '*', '/'];

// function disable(list) {
//     list.forEach(item => { item.disabled = true});
// }

// function enable(list) {
//     list.forEach(item => item.disabled = false);
// }

// const operators = document.querySelectorAll("button.operator");
// operators.forEach( operator => {
//     operator.addEventListener("click", () => {
//         // index++;
//         // show.textContent = `${operator.textContent}`
//         // obj[index] = operator.textContent;
//         // disable(operators);
//         // enable(numbers);
//         // index++;
//     })
// })

// const equal = document.querySelector("#equal");
// equal.addEventListener("click", () => {
//     console.log(obj);
//     let result = operate(+obj[0], obj[1], +obj[2]);
//     obj[0] = result;
//     show.textContent = result;
//     obj[1] = "";
//     obj[2] = "";
//     index = 0;
// });

// const clear = document.querySelector("#clear");
// clear.addEventListener("click", () => {
//     show.innerHTML = "";
//     enable(operators);
//     disable(numbers);
//     obj={};
//     index = 0;
//     console.log(obj);
// })

const numbers = document.querySelectorAll("button.number");
const operators = document.querySelectorAll("button.operator");
const equal = document.querySelector("button#equal");
const clear = document.querySelector("#clear");
const show = document.querySelector("#show");
let numIndex = 0, optIndex = 0;

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(result !== "") {
            clearing();
        }
        if(numIndex === 0) {
            show.textContent = "";
            operand1 += number.textContent;
            show.textContent = operand1;
        } else {
            operand2 += number.textContent;
            show.textContent = operand2;
        }
        console.log(`operand1 = ${operand1}, operator = ${operation} operand2 = ${operand2} result = ${result}`)
    })
});

operators.forEach( operator => {
    operator.addEventListener("click", () =>{
        if(result !== "") {
            optIndex = 1;
        }
        if (optIndex === 0 && operand1 == ""){
                operand1 = 0;
                numIndex = 1;
                optIndex = 1;
                operation = operator.textContent;
        } else if(optIndex !== 1) {
            operation = operator.textContent;
            show.textContent = operation;
            numIndex = 1;
            optIndex = 1;
        } else if(optIndex == 1 && operand2 !== ""){
            if( result == ""){
                operand1 = operate(+operand1, operation, +operand2);
            } else {
                operand1 = result;
                result = "";
                operand2="";
            }
            show.textContent = operand1;
            operation = operator.textContent;
            optIndex = 1;
            numIndex = 1;
    } else if(optIndex == 1 && operand2 == "") {
        operation;
    }
    console.log(`operand1 = ${operand1}, operator = ${operation} operand2 = ${operand2} result = ${result}`)})
});

clear.addEventListener("click", () => {clearing()
    console.log(`operand1 = ${operand1}, operator = ${operation} operand2 = ${operand2} result = ${result}`)
})

function clearing() {
    operand1 = ""; operand2 = ""; operation = ""; result = "";
    optIndex = 0; numIndex = 0;
    show.innerHTML = "";
}

equal.addEventListener("click", () => {
    if(operand2 !== "") {
        result = operate(+operand1, operation, +operand2);
        show.textContent = result;
        console.log(`operand1 = ${operand1}, operator = ${operation} operand2 = ${operand2} result = ${result}`)
    } else {
        result = operate(+operand1, operation, +operand1)
        show.textContent = result;
        console.log(`operand1 = ${operand1}, operator = ${operation} operand2 = ${operand2} result = ${result}`)
    }
})