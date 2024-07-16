let display = document.getElementById('display');
let percentageAmount = document.getElementById('percentageAmount');
let percentageValue = document.getElementById('percentageValue');
let percentageResult = document.getElementById('percentageResult');
let xValue = document.getElementById('xValue');
let xPercentage = document.getElementById('xPercentage');
let yValue = document.getElementById('yValue');
let yPercentage = document.getElementById('yPercentage');
let ruleOfThreeResult = document.getElementById('ruleOfThreeResult');
let convertFrom = document.getElementById('convertFrom');
let convertInput = document.getElementById('convertInput');
let convertResult = document.getElementById('convertResult');

let currentOperation = '';
let firstOperand = '';
let secondOperand = '';
let history = [];

function appendNumber(number) {
    display.value += number;
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function chooseOperation(operation) {
    if (display.value === '') return;
    firstOperand = display.value;
    currentOperation = operation;
    display.value = '';
}

function compute() {
    secondOperand = display.value;
    let result;
    if (currentOperation === '+') {
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (currentOperation === '-') {
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (currentOperation === '*') {
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
    } else if (currentOperation === '/') {
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
    }
    display.value = result;
    addToHistory(`${firstOperand} ${currentOperation} ${secondOperand} = ${result}`);
}

function clearDisplay() {
    display.value = '';
    currentOperation = '';
    firstOperand = '';
    secondOperand = '';
}

function calculatePercentage() {
    let amount = parseFloat(percentageAmount.value);
    let percentage = parseFloat(percentageValue.value);
    let result = amount + (amount * (percentage / 100));
    percentageResult.innerText = `Resultado: ${result}`;
    addToHistory(`${amount} ${percentage > 0 ? '+' : ''}${
