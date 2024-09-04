let amigos = [];

function adicionar (){
    let amigo = document.getElementById('nome-amigo');

    // Verifica se o valor do campo está vazio
    if (amigo.value.trim() === '') {
        alert('O nome não pode ser vazio.');
        return; // Não faz nada se o valor for vazio
    }

    if (amigos.includes(amigo.value.trim())) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value.trim());

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', '+ amigo.value;
    }
    amigo.value = ''; // Limpa o campo de entrada
}

function sortear() {

    // Verifica se há pelo menos quatro amigos na lista
    if (amigos.length < 4) {
        alert('Você precisa de pelo menos 4 amigos para sortear.');
        return; // Interrompe a função se a condição não for atendida
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'; //contatenei om sorteio
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>'; //contatenei om sorteio
        }

    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}