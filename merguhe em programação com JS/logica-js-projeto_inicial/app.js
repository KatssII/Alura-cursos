alert('Boas vindas ao Jogo do Número Secreto!'); 
let numeroMaximo = 250;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
     
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`Você errou! O número secreto é menor que ${chute}`);
        } else {
            alert(`Você errou! O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //operador ternário
alert(`Parabéns! Você acertou!!! O número secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//     alert(`Parabéns! Você acertou!!! O número secreto era ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Você acertou!!! O número secreto era ${numeroSecreto} com ${tentativas} tentativa.`);
// }
