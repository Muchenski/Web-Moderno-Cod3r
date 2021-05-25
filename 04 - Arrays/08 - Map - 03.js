// Implementando o nosso Map:

Array.prototype.map2 = function (callback) {
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this));
    }
    return novoArray;
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

const jsonToObject = valor => JSON.parse(valor);
const getPreco = valor => valor.preco;

const precos = carrinho.map2(jsonToObject).map(getPreco);
console.log(precos); // [OUT] - [ 3.45, 13.9, 41.22, 7.5 ]