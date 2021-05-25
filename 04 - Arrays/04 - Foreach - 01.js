const aprovados = [
    "Henrique", "João", "Pedro", "Lucas", "Matheus"
];

// [OUT]:
// 1 - Henrique
// 2 - João
// 3 - Pedro
// 4 - Lucas
// 5 - Matheus

// .forEach() passa 3 argumentos para a callback: Elemento, Índice, e o próprio Array. 
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1} - ${nome}`);
});


// [OUT]:
// HENRIQUE
// JOÃO
// PEDRO
// LUCAS
// MATHEUS
const mostrarAprovadosToUpperCase = nome => console.log(nome.toUpperCase());
aprovados.forEach(mostrarAprovadosToUpperCase);