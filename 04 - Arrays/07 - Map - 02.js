// Desafio:

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

const jsonToObject = valor => JSON.parse(valor);
const getPreco = valor => valor.preco;

const precos = carrinho.map(jsonToObject).map(getPreco);
console.log(precos); // [OUT] - [ 3.45, 13.9, 41.22, 7.5 ]