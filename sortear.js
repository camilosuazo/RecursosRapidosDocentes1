document.addEventListener('DOMContentLoaded', () => {
    const sortearButton = document.getElementById('sortearButton');
    const resultContainer = document.getElementById('resultContainer');
    const resetButton = document.getElementById('resetButton');
    let usedNumbers = [];

    sortearButton.addEventListener('click', () => {
        const min = parseInt(document.getElementById('min').value);
        const max = parseInt(document.getElementById('max').value);

        if (isNaN(min) || isNaN(max) || min > max) {
            resultContainer.textContent = 'Por favor, ingresa un rango válido.';
            return;
        }

        // Generar un array de posibles números
        let possibleNumbers = [];
        for (let i = min; i <= max; i++) {
            if (!usedNumbers.includes(i)) {
                possibleNumbers.push(i);
            }
        }

        // Verificar si hay números disponibles para sortear
        if (possibleNumbers.length === 0) {
            resultContainer.textContent = 'Todos los números ya han sido sorteados.';
            resetButton.style.display = 'block';
            return;
        }

        // Elegir un número aleatorio de los posibles
        const randomIndex = Math.floor(Math.random() * possibleNumbers.length);
        const randomNum = possibleNumbers[randomIndex];

        // Agregar el número sorteado a la lista de usados
        usedNumbers.push(randomNum);

        resultContainer.textContent = `Número sorteado: ${randomNum}`;
        resetButton.style.display = 'none';
    });

    resetButton.addEventListener('click', () => {
        usedNumbers = [];
        resultContainer.textContent = '';
        resetButton.style.display = 'none';
    });
});
