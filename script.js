function verificarIdades() {
    let idades = [];
    for (let i = 1; i <= 5; i++) {
        let idade = parseInt(document.getElementById('idade' + i).value);
        if (isNaN(idade) || idade < 0) {
            alert("Por favor, insira um número válido para a idade.");
            return;
        }
        idades.push(idade);
    }

    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0; 
    let maiorIdade = 0;

    for (let idade of idades) {
        if (idade <= 15) {
            faixa1++;
        } else if (idade <= 40) {
            faixa2++;
        } else {
            faixa3++;
        }

        if (idade > maiorIdade) {
            maiorIdade = idade;
        }
    }

    document.getElementById('resultado').innerHTML = `
        <p>Faixa etária 1 (até 15 anos): ${faixa1} pessoas</p>
        <p>Faixa etária 2 (16 a 40 anos): ${faixa2} pessoas</p>
        <p>Faixa etária 3 (acima de 40 anos): ${faixa3} pessoas</p>
        <p>Maior idade: ${maiorIdade} anos</p>
    `;
}