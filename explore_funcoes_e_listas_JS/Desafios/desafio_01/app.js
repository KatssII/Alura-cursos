let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarBotaoConsole() {
    console.log('O botão foi clicado!!')
}

function verificarBotaoAlerta() {
    alert('Eu amo o Bruno <3')
}

function verificarBotaoPrompt() {
    let nome = prompt('Insira um membro do BTS:')
    alert(`O ${nome} é realmente um gostoso!`)
}

 function soma() {
    let numero1 = parseInt(prompt('Insira um número inteiro: '));
    let numero2 = parseInt(prompt('Insira outro número inteiro: '));
    let resultado = numero1 + numero2;
    alert(`A soma de ${numero1} e ${numero2} é ${resultado}`)
 }