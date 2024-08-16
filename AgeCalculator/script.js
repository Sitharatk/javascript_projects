document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#date", {
        dateFormat: "Y-m-d",
    });

    document.getElementById('calculate').addEventListener('click', function() {
        const dateInput = document.getElementById('date').value;
        const resultElement = document.getElementById('result');

        if (!dateInput) {
            resultElement.textContent = 'Please select a date.';
            return;
        }

        const birthDate = new Date(dateInput);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        resultElement.textContent = `You are ${age} years old.`;
    });
});
