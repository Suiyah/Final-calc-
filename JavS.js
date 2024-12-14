function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const display = document.getElementById('display');
        displayvalue = eval(display.value);  
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}


function calculateSquareRoot() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}


function calculateTrig(functionName) {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
        return;
    }

    let result;
    switch (functionName) {
        case 'sin':
            result = Math.sin(value);
            break;
        case 'cos':
            result = Math.cos(value);
            break;
        case 'tan':
            result = Math.tan(value);
            break;
        default:
            result = 'Error';
            break;
    }

    display.value = result;
}


function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); 
}


document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');


    event.preventDefault();

    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }

    if (key === '(' || key === ')') {
        appendToDisplay(key);
    }

    if (key === 'c' || key === 'C') {
        clearDisplay();
    }

    if (key === 'Enter') {
        calculateResult();
    }

    if (key === 's' || key === 'S') {
        if (event.shiftKey) {
            calculateSquareRoot();
        }
    }
 
    if (key === 's' || key === 'S') {
        if (!event.shiftKey) {
            calculateTrig('sin');
        }
    } else if (key === 'c' || key === 'C') {
        calculateTrig('cos');
    } else if (key === 't' || key === 'T') {
        calculateTrig('tan');
    }

    if (key === '%') {
        appendToDisplay('%');
    }

    if (key === 'Backspace') {
        backspace();
    }
});
