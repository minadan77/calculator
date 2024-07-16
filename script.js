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
    addToHistory(`${amount} ${percentage > 0 ? '+' : ''}${percentage}% = ${result}`);
}

function calculateRuleOfThree() {
    let x = parseFloat(xValue.value);
    let xPercent = parseFloat(xPercentage.value);
    let y = parseFloat(yValue.value);
    let yPercent = parseFloat(yPercentage.value);
    let result;

    if (isNaN(x)) {
        result = (y * xPercent) / yPercent;
        xValue.value = result;
    } else if (isNaN(xPercent)) {
        result = (yPercent * x) / y;
        xPercentage.value = result;
    } else if (isNaN(y)) {
        result = (x * yPercent) / xPercent;
        yValue.value = result;
    } else if (isNaN(yPercent)) {
        result = (xPercent * y) / x;
        yPercentage.value = result;
    }
    ruleOfThreeResult.innerText = `Resultado: ${result}`;
    addToHistory(`Regla de tres: ${x} es a ${xPercent} como ${y} es a ${yPercent} -> ${result}`);
}

function convertUnits() {
    let input = parseFloat(convertInput.value);
    let result;
    switch (convertFrom.value) {
        case 'kgToLbs':
            result = input * 2.20462;
            break;
        case 'lbsToKg':
            result = input / 2.20462;
            break;
        case 'kmToMiles':
            result = input * 0.621371;
            break;
        case 'milesToKm':
            result = input / 0.621371;
            break;
    }
    convertResult.innerText = `Resultado: ${result}`;
    addToHistory(`Conversión: ${input} -> ${result}`);
}

function addToHistory(entry) {
    history.push(entry);
    if (history.length > 20) {
        history.shift();
    }
}

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Set default tab
document.getElementsByClassName('tablinks')[0].click();
