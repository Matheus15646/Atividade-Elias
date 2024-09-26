// app.js

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function toUpperCase(str) {
    return str.toUpperCase();
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sumButton').addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const result = sum(num1, num2);
        addResult('sumResults', `Resultado: ${result}`);
    });

    document.getElementById('multiplyButton').addEventListener('click', () => {
        const num3 = parseFloat(document.getElementById('num3').value);
        const num4 = parseFloat(document.getElementById('num4').value);
        const result = multiply(num3, num4);
        addResult('multiplyResults', `Resultado: ${result}`);
    });

    document.getElementById('uppercaseButton').addEventListener('click', () => {
        const text = document.getElementById('textInput').value;
        const result = toUpperCase(text);
        addResult('uppercaseResults', `Resultado: ${result}`);
    });
});

// Função para adicionar resultado na lista
function addResult(listId, resultText) {
    const list = document.getElementById(listId);
    const listItem = document.createElement('li');
    listItem.textContent = resultText;

    // Botão para remover o resultado
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Excluir';
    removeButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    list.appendChild(listItem);
}

// Exportando funções para testes
module.exports = { sum, multiply, toUpperCase };
