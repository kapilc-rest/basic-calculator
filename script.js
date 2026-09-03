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

let operand, operation, operand2;

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

const show = document.querySelector("#show");

let obj = {}, index = 0;

const numbers = document.querySelectorAll("button.number");
numbers.forEach( number => { 
    number.addEventListener("click",() => {
        enable(operators);
        if(!(index in obj)){
            obj[index] = "";
            show.textContent = "";
        }
        show.textContent += number.textContent;
        obj[index] += number.textContent;
    })
});

const listOperator = [ '+', '-', '*', '/'];

function disable(list) {
    list.forEach(item => { item.disabled = true});
}

function enable(list) {
    list.forEach(item => item.disabled = false);
}

const operators = document.querySelectorAll("button.operator");
operators.forEach( operator => {
    operator.addEventListener("click", () => {
        index++;
        show.textContent = `${operator.textContent}`
        obj[index] = operator.textContent;
        disable(operators);
        index++;
    })
})

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    console.log(obj);
    show.textContent = operate(+obj[0], obj[1], +obj[2]);
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    show.innerHTML = "";
    enable(operators);
    obj={};
    index = 0;
    console.log(obj);
})
