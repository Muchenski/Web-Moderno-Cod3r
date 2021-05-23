const pai = { nome: "Paulo", corCabelo: "Preto" };

// Object.create(<objeto pai>);
const filha01 = Object.create(pai);

filha01.nome = "Bruna";

console.log(filha01.corCabelo); // [OUT] - Preto

// Podemos, ao criar um objeto, definir propriedades, como se existisse um Object.defineProperty implícito.
const filha02 = Object.create(pai, {
    nome: {
        value: "Ana",
        enumerable: true,
        configurable: false,
        writable: false
    }
});
filha02.nome = "Carla";

console.log(filha02.nome); // [OUT] - Ana

console.log(Object.keys(filha01)); // [OUT] - [ 'nome' ]
console.log(Object.keys(filha02)); // [OUT] - [ 'nome' ]


// Como funções que utilizam o .toString() só mostram os atributos e funções próprios do objeto
// e ignoram as propriedades herdadas, podemos ver todas propriedades percorrendo o objeto:

// [OUT]:
// Atributo próprio: nome
// Atributo herdado: corCabelo
for (const key in filha02) {
    filha02.hasOwnProperty(key) ? console.log("Atributo próprio: " + key) : console.log("Atributo herdado: " + key);
}