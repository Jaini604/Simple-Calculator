// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function displays values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result with error handling
function calculate() {
    let resultField = document.getElementById("result");
    let expression = resultField.value;

    try {
        // Validate the expression
        if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
            throw new Error("Invalid");
        }

        // Evaluate the expression
        let result = eval(expression);

        // Check if the result is a finite number
        if (!isFinite(result)) {
            throw new Error("Infinity");
        }

        // Display the result
        resultField.value = result;
    } catch (error) {
        // Display an error message in the result field
        resultField.value = " " + error.message;
    }
}
