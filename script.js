let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    currentInput += ` ${operator} `;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.trim();
    currentInput = currentInput.slice(0, -1).trim();
    display.innerText = currentInput || '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace(/x/g, '*')).toString();
        display.innerText = currentInput;
    } catch {
        display.innerText = 'Error';
    }
}
