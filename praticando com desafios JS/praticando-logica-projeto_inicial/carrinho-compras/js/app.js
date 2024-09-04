let valorTotal;
limpar();

function adicionar () {
    //recupera valores nome do produto, qntd e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; //o hífen vai dividir a informação em duas partes. Temos uma informação antes do hífen e uma informação após o hífen. Queremos a informação antes, que é a primeira posição. Portanto, definiremos que é a posição zero.
    let valorUnitario = produto.split('R$')[1];
    let quantiddade = document.getElementById('quantidade').value;

    //calcula o preço, o nosso subtotal
    let subtotal = quantiddade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    //adicionar o carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantiddade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;

    //atualizar o valor total 
    valorTotal = valorTotal + subtotal;
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';


}

//split é uma forma de separar strings em arrays