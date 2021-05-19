// Objetos em javascript são um conjunto de chave/valor.

const produto1 = {
    id: Math.random().toString().substring(2)
}

// Criando atributo dinâmico "nome".
produto1.nome = "Celular";

produto1.preco = 3500.89;

// [OUT] - { id: '8084946442208445', nome: 'Celular', preco: 3500.89 }
console.log(produto1);

// [OUT] - object
console.log(typeof produto1);