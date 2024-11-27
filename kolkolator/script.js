let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Replace × with * for proper calculation
        let expression = display.value.replace('×', '*');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Numbers and operators
    if (/[\d+\-*/.()]/.test(key)) {
        appendToDisplay(key);
    }
    // Enter key for calculation
    else if (key === 'Enter') {
        calculate();
    }
    // Backspace key
    else if (key === 'Backspace') {
        backspace();
    }
    // Escape key to clear
    else if (key === 'Escape') {
        clearDisplay();
    }
});
