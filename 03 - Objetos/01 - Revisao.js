const produto = new Object();

// Atributo dinâmico.
produto.nome = "Notebook";

console.log(produto); // [OUT] - { nome: 'Notebook' }

// Deletando um atributo.
delete produto.nome;

console.log(produto); // [OUT] - {}

const carro = {
    marca: "AUDI",
    modelo: "A4",
    valor: 90000,
    proprietario: {
        nome: "Henrique",
        profissao: "Desenvolvedor",
        endereco: {
            logradouro: "Rua x",
            numero: 25
        }
    },
    condutores: [
        {
            nome: "Joao",
            profissao: "Enfermeiro"
        },
        {
            nome: "Bruna",
            profissao: "Médica"
        },
        {
            nome: "Chico",
            profissao: "Advogado"
        }
    ],
    calcularSeguro: function() {
        // ...
    }
}

console.log(carro.proprietario.endereco.numero); // [OUT] - 25

carro.proprietario.endereco.numero = 999;

console.log(carro.proprietario.endereco.numero); // [OUT] - 999

// Além de atributos, podemos excluir funções:
delete carro.condutores;
delete carro.calcularSeguro;

// [OUT]:
// {
//     marca: 'AUDI',
//     modelo: 'A4',
//     valor: 90000,
//     proprietario: {
//       nome: 'Henrique',
//       profissao: 'Desenvolvedor',
//       endereco: { logradouro: 'Rua x', numero: 999 }
//     }
// }
console.log(carro);