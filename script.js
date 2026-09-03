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

let operand1="", operation="", operand2="";

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
const equal = document.querySelector("button.equal");
const clear = document.querySelector("button.clear");
const show = document.querySelector("#show");
let numIndex = 0;

numbers.forEach(number => {
    number.addEventListener("click", () => {
        numIndex === 0 ? operand1 += number.textContent : operand2 += number.textContent;
        show.textContent += number.textContent;
    })
});

operators.forEach( operator => {
    operator.addEventListener("click", () =>{
        numIndex = 1;
        operand1 === "" ? operation = "" : operation = operator.textContent;
        operation !== "" ? show.textContent = operate(operand1, operation,operand2) : operation = operator.textContent;
    })
});