// Utilizando a notação literal de objetos:
const notacaoLiteral = {
    // ...
}


// A partir do Object:
const objetos = new Object();


// A partir de uma função construtora:
function Produto(nome, preco, desconto) {
    // Atributo público:
    this.nome = nome;

    // Preço e desconto são atributos privados.

    this.getPrecoComDesconto = () => (preco * (1 - desconto)).toFixed(2);
}
const produto = new Produto("Caneta", 5.00, 0.2);
console.log(produto.getPrecoComDesconto()); // [OUT] - 4.00


// A partir de uma função fábrica:
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        salarioCalculado: function() {
            return (salarioBase / (30) * (30 - faltas)).toFixed(2);
        }
    }
}
const funcionario = criarFuncionario("Henrique", 7980, 4);
// [OUT]:
// {
//     nome: 'Henrique',
//     salarioBase: 7980,
//     faltas: 4,
//     salarioCalculado: [Function: salarioCalculado]
// }
console.log(funcionario);
console.log(funcionario.salarioCalculado()); // [OUT] - 6916.00


// Object.create()
const obj = Object.create(null);


// A partir de um JSON:
const fromJSON = JSON.parse('{"nome": "Javascript", "nota": 10}');

// Neste caso, o editor não irá auxiliar mostrando os atributos do objeto.
console.log(fromJSON.nome); // [OUT] - Javascript