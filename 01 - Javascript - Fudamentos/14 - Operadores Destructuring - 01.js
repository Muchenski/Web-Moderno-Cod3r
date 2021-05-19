// Operadores destructuring em Objetos.

const pessoa = {
    nome: "Henrique",
    idade: 24,
    endereco: {
        logradouro: "Rua x",
        numero: 6
    },
    testeUndefined: undefined,
    testeNull: null
}

// Extraindo as propriedades que desejamos, do objeto pessoa.
const { nome, idade } = pessoa;
console.log(nome, idade); // [OUT] - Henrique 24

// Extraindo e dando um apelido para as propriedades.
const { nome: n, idade: i } = pessoa;
console.log(n, i); // [OUT] - Henrique 24

// Tentando extrair algo que não existe.
const { atributoInexistente } = pessoa;
console.log(atributoInexistente); // [OUT] - undefined

// Tentando extrair uma propriedade, utilizando um apelido 
// E CASO A PROPRIEDADE NÃO EXISTA OU SEJA ESTRITAMENTE UNDEFINED,
// definindo um valor padrão.
const { atributoInexistente: attrInexistente = "teste" } = pessoa;
console.log(attrInexistente); // [OUT] - teste

const { testeUndefined = 999 } = pessoa;
console.log(testeUndefined) // [OUT] - 999

const { testeNull = 999 } = pessoa;
console.log(testeNull) // [OUT] - null

// Extraindo propriedades de objetos dentro de outro objeto.

const { endereco : { logradouro, numero } } = pessoa;
console.log(logradouro, numero); // [OUT] - Rua x 6

// Ou (recomendado):

const {logradouro:log, numero:num} = pessoa.endereco;
console.log(log, num); // [OUT] - Rua x 6