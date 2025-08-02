document.addEventListener('DOMContentLoaded', () => {
    // Get elements from the DOM
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');

    // --- Event listener for the 'Calculate BMI' button ---
    calculateBtn.addEventListener('click', () => {
        // Always remove the 'show' class to re-trigger the animation
        resultDiv.classList.remove('show');

        const weight = parseFloat(weightInput.value);
        const heightCm = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
            resultDiv.innerHTML = 'Please enter a valid weight and height.';
            resultDiv.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
            resultDiv.style.color = '#f87171';
            // Use a timeout to allow the class removal to register before adding it again
            setTimeout(() => resultDiv.classList.add('show'), 10);
            return;
        }

        const heightM = heightCm / 100;
        const bmi = weight / (heightM * heightM);
        const bmiFormatted = bmi.toFixed(2);

        let category = '';
        let color = '';
        let bgColor = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            color = '#60a5fa'; // Blue
            bgColor = 'rgba(96, 165, 250, 0.15)';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal weight';
            color = '#4ade80'; // Green
            bgColor = 'rgba(74, 222, 128, 0.15)';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
            color = '#facc15'; // Yellow
            bgColor = 'rgba(250, 204, 21, 0.15)';
        } else {
            category = 'Obesity';
            color = '#f87171'; // Red
            bgColor = 'rgba(248, 113, 113, 0.15)';
        }

        resultDiv.innerHTML = `Your BMI is <strong>${bmiFormatted}</strong> (${category})`;
        resultDiv.style.color = color;
        resultDiv.style.backgroundColor = bgColor;
        
        // Use a timeout to allow the style changes to apply before the animation starts
        setTimeout(() => resultDiv.classList.add('show'), 10);
    });

    // --- Event listener for the 'Clear' button ---
    clearBtn.addEventListener('click', () => {
        weightInput.value = '';
        heightInput.value = '';
        resultDiv.innerHTML = '';
        resultDiv.classList.remove('show'); // Hide the result area with animation
    });
});
