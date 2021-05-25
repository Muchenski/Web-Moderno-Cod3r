const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];

// Removendo o último item do array:
pilotos.pop();
console.log(pilotos); // [OUT] - [ 'Vettel', 'Alonso', 'Raikkonen' ]

// Adicionando itens nas últimas posições do array:
pilotos.push("Verstappen", "Hamilton");
console.log(pilotos); // [OUT] - [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen', 'Hamilton' ]

// Removendo o primeiro elemento do array:
pilotos.shift();
console.log(pilotos); // [OUT] - [ 'Alonso', 'Raikkonen', 'Verstappen', 'Hamilton' ]

// Adicionando itens nas primeiras posições do array:
pilotos.unshift("Bottas", "Leclerc");
console.log(pilotos); // [OUT] - ['Bottas', 'Leclerc', 'Alonso', 'Raikkonen', 'Verstappen', 'Hamilton']

// Obtendo uma parte do array:
const algunsPilotos = pilotos.slice(0, 3); // slice(inicio, fim) retorna um novo array, sem modificar o que chamou o método.
console.log(algunsPilotos); // [OUT] - [ 'Bottas', 'Leclerc', 'Alonso' ]

// Adicionando e/ou excluindo itens do array, a partir de um determinado índice.

// A partir do índice 3, excluir os próximos 2 itens.
// A partir do índice 3, adicionar 3 novos itens.
pilotos.splice(3, 2, "Gasly", "Ricciardo", "Sainz");
console.log(pilotos); // [OUT] - [ 'Bottas', 'Leclerc', 'Alonso', 'Gasly', 'Ricciardo', 'Sainz', 'Hamilton' ]