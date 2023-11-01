const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const modulo = function (a, b) {
    return a % b;
}

const power = function (a, b) {
    return a ** b;
}

let FirstNumber = "";
let SecondNumber = "";
let Operator = "";
let result = "";
let memory = ""; // Store the result of the previous operation

const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText === "C") {
            // Clear the display and reset values
            display.textContent = "0";
            FirstNumber = "";
            SecondNumber = "";
            Operator = "";
            memory = "";
        } else if (buttonText === "=") {
            // Perform the operation when "=" is clicked
            if (FirstNumber && SecondNumber && Operator) {
                result = Operate(parseFloat(FirstNumber), Operator, parseFloat(SecondNumber));
                display.textContent = result;
                // Store the result in memory for the next operation
                memory = result;
                // Reset the FirstNumber and SecondNumber for next calculation
                FirstNumber = result;
                SecondNumber = "";
            }
        } else if (["+", "-", "*", "/", "%", "^"].includes(buttonText)) {
            // Set the operator when an operator button is clicked
            Operator = buttonText;
            display.textContent = Operator;
        } else {
            // Handle digits and build the numbers
            if (!Operator) {
                FirstNumber += buttonText;
                display.textContent = FirstNumber;
            } else {
                SecondNumber += buttonText;
                display.textContent = SecondNumber;
            }
        }
    });
});

// Your Operate function remains the same
function Operate(FirstNumber, Operator, SecondNumber) {
    // Implement your operator logic here
    // Example:
    switch (Operator) {
        case "+":
            return add(FirstNumber, SecondNumber);
        case "-":
            return subtract(FirstNumber, SecondNumber);
        case "*":
            return multiply(FirstNumber, SecondNumber);
        case "/":
            return divide(FirstNumber, SecondNumber);
        case "%":
            return modulo(FirstNumber, SecondNumber);
        case "^":
            return power(FirstNumber, SecondNumber);
        default:
            return "Error";
    }
}
