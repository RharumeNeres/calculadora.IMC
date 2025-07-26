document.getElementById('calcular').addEventListener('click', function () {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso😣';
    } else if (imc < 25) {
        classificacao = 'Peso normal😁';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso=😪';
    } else if (imc < 35) {
        classificacao = 'Obesidade grau I😶';
    } else if (imc < 40) {
        classificacao = 'Obesidade grau 😶‍🌫️';
    } else {
        classificacao = 'Obesidade grau III🤯';
    }

    document.getElementById('imc').innerHTML = `Seu IMC é: <strong>${imc.toFixed(2)}</strong>`;
    document.getElementById('classificacao').textContent = `Classificação: ${classificacao}`;
});
