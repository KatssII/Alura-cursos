// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let parafrafo = document.querySelector('p');
// parafrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) { //criando função
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto') //exectando a função, só basta substituir a string
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!!');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}