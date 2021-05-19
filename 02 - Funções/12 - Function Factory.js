// Function factory retorna um objeto sem precisarmos do new.
// Nessas funções, também não corremos o risco do "this" variável, como ocorre nas funções construtoras 
// ou classes.

function criarPessoa(nome, idade) {
    return {
        nome,
        idade,
        email: "Sem e-mail"
    }
}

console.log(criarPessoa("Henrique", 24)); // [OUT] - { nome: 'Henrique', idade: 24, email: 'Sem e-mail' }