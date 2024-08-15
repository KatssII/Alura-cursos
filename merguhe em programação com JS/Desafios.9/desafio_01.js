function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
// normalize("NFD"): Normaliza a string para a forma de decomposição canônica, onde caracteres acentuados são divididos em caracteres base e marcas de acento.
// replace(/[\u0300-\u036f]/g, ""): Remove as marcas de acento que foram separadas na normalização.


let diaSemana = normalizeString(prompt('Informe o dia da semana: ').trim().toLowerCase()); // trim remove os espaços adicionaIS que o usuario coloca  //toLowerCase(): Converte a entrada do usuário para minúsculas.

const diaDescanso = ['Sábado', 'Domingo'];
const diaTrabalho = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];


if (diaTrabalho.includes(diaSemana)) { //includes: Método usado para verificar se o valor está no array.
    if (diaDescanso.includes(diaSemana)) {
        alert('Hoje é dia de descanso!');
    } else {
        alert('Hoje não é dia de descanso! Vai trabalhar vagabundo(a)!!');
    }
} else {
    alert('Você não informou um dia válido da semana.');
}





// if (diaSemana === sabado) {  //=== realiza uma comparação estrita
//     alert('Hoje é dia de descanso!');

// } else if (diaSemana === domingo) {
//     alert('Hoje é dia de descanso!');

// // } else if (value === null) {
// //     alert('Você não informou o dia da semana.');

// } else {
//     alert('Hoje não é dia de descanso! Vai trabalhar vagabundo(a)!!');
// }