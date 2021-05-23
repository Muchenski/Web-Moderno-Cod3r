// Object.preventExtensions - Não permite ADICIONAR novos atributos ao objeto.
const obj1 = Object.preventExtensions({
    nome: "Henrique", idade: 24
});
console.log(Object.isExtensible(obj1)); // [OUT] - false

obj1.novoAtributo = "Teste";

console.log(obj1); // [OUT] - { nome: 'Henrique', idade: 24 }

///////////////////////////////////////////////////////////////////////////////////

// Object.seal - Não permite ADICIONAR novos atributos e nem REMOVER.
const obj2 = Object.seal({
    nome: "Joao", idade: 35
});
console.log(Object.isSealed(obj2)); // [OUT] - true

obj2.novoAtributo = "Teste";
delete obj2.nome;

console.log(obj2); // [OUT] - { nome: 'Joao', idade: 35 }

///////////////////////////////////////////////////////////////////////////////////

// Object.freeze - Não permite ADICIONAR novos atributos, REMOVER, e nem EDITAR.
const obj3 = Object.freeze({
   nome: "Bruna", idade: 22 
});
console.log(Object.isFrozen(obj3)); // [OUT] - true

delete obj3.nome;
obj3.novoAtributo = "Teste";
obj3.idade = 68;

console.log(obj3); // [OUT] - { nome: 'Bruna', idade: 22 }