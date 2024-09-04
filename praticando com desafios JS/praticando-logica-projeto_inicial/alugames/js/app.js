function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');// recupera um elemento na página
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    //classList devolve a lista de classes q o elemento tem. contains vai dizer se na lista de classes dele contém 
    //uma determinada classe, ai passa o nome da classe entre '' pra verficar se tem naquele eelemento
    if (imagem.classList.contains('dashboard__item__img--rented')) { 
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}