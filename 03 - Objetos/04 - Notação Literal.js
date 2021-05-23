const nomeDoAttr = "logradouro";
const valorDoAttr = "Rua floresta x";

const obj1 = {}[nomeDoAttr] = valorDoAttr;
// Ou 
// obj1[nomeDoAttr] = valorDoAttr;
console.log(obj1); // [OUT] - Rua floresta x

const obj2 = {
    nome: "Henrique",
    endereco: {
        [nomeDoAttr]: valorDoAttr
    }
}
console.log(obj2); // [OUT] - { nome: 'Henrique', endereco: { logradouro: 'Rua floresta x' } }