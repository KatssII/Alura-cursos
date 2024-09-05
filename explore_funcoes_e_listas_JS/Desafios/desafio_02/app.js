function mensagem () {
    console.log('Olá Bruno :))')
}

function nome() {
    let nome = prompt('Insira seu nome: ');
    alert(`Olá ${nome}! Você sabia que a Mônica ama o Bruno? `)
}

function dobro() {
    let numero = parseInt(prompt('Insira um número: '));
    alert(`O dobro de ${numero} é ${numero * 2}`)
}

function media() {
    let numero1 = parseInt(prompt('Insira o 1° número: '));
    let numero2 = parseInt(prompt('Insira o 2° número: '));
    let numero3 = parseInt(prompt('Insira o 3° número: '));
    let somaMedia = numero1 + numero2 + numero3;
    let resultado = somaMedia / 3;
    alert(`A média dos números informados é ${resultado.toFixed(2)} `) //O método .toFixed(2) é usado para formatar o número resultado com exatamente duas casas decimais.
                                                                       //Ele retorna uma string, então a média será exibida com o formato desejado.
}

function numeroMaior() {
    let numero1 = parseInt(prompt('Insira o 1° número: '));
    let numero2 = parseInt(prompt('Insira o 2° número: '));
    if (numero1 > numero2) {
        alert(`${numero1} é maior que ${numero2}`)
    } else if (numero1 < numero2) {
        alert(`${numero2} é maior que ${numero1}`)
    } else {
        alert(`${numero1} e ${numero2} são iguais`)
    }
}

function multiplicacao() {
    let numero = parseInt(prompt('Insira um número: '));
    alert(`A multiplicação de ${numero} é ${numero * numero}`)
}