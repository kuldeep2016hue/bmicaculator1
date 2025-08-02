document.addEventListener('DOMContentLoaded', () => {
    // Get elements from the DOM
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');

    // --- Event listener for the 'Calculate BMI' button ---
    calculateBtn.addEventListener('click', () => {
        // Get input values
        const weight = parseFloat(weightInput.value);
        const heightCm = parseFloat(heightInput.value);

        // Validate inputs
        if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
            resultDiv.innerHTML = 'Please enter a valid weight and height.';
            resultDiv.style.color = '#ef4444'; // Red color for error
            resultDiv.style.backgroundColor = '#fee2e2';
            return;
        }

        // Convert height from cm to meters
        const heightM = heightCm / 100;

        // Calculate BMI: weight (kg) / (height (m) * height (m))
        const bmi = weight / (heightM * heightM);
        const bmiFormatted = bmi.toFixed(2); // Format to 2 decimal places

        // Determine BMI category and corresponding styles
        let category = '';
        let color = '';
        let bgColor = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            color = '#3b82f6'; // Blue
            bgColor = '#dbeafe';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal weight';
            color = '#22c55e'; // Green
            bgColor = '#dcfce7';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
            color = '#f59e0b'; // Amber
            bgColor = '#fef3c7';
        } else {
            category = 'Obesity';
            color = '#ef4444'; // Red
            bgColor = '#fee2e2';
        }

        // Display the result with the category
        resultDiv.innerHTML = `Your BMI is <strong>${bmiFormatted}</strong> (${category})`;
        resultDiv.style.color = color;
        resultDiv.style.backgroundColor = bgColor;
    });

    // --- Event listener for the 'Clear' button ---
    clearBtn.addEventListener('click', () => {
        // Clear the input fields
        weightInput.value = '';
        heightInput.value = '';

        // Clear the result display area
        resultDiv.innerHTML = '';
        resultDiv.style.backgroundColor = 'transparent'; // Reset background
    });
});
