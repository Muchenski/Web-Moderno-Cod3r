/*
    Tem valores diferentes dependendo de onde é usado:
    
    01 - Em um método, this refere-se ao objeto proprietário.
    02 - Sozinho, this refere-se ao objeto global do node.
    03 - Em uma função, this refere-se ao objeto global da aplicação.
    04 - Em uma função, no modo estrito, this é undefined.
    05 - Em um evento, this refere-se ao elemento que recebeu o evento.
    06 - Os métodos gostam call() e apply() podem referir this a qualquer objeto.
*/

// Exemplo 01:
let exemploThisEmMetodo = {
    nome: "Henrique",
    teste() {
        return `Sou o nome do ${this.nome}, meu this é ${this}`;
    },
    get this() {
        return this;
    }
}
// [OUT] - Sou o nome do Henrique, meu this é [object Object] 
console.log(exemploThisEmMetodo.teste());
// Provando que o 'this' no objeto refere-se a ele mesmo.
// [OUT] - true
console.log(exemploThisEmMetodo.this === exemploThisEmMetodo);


// Exemplo 02:
const escopoGlobalDoNode = this;
// [OUT] - true
console.log(escopoGlobalDoNode == exports);


// Exemplo 03:
function escopoGlobalDaAplicacao() {
    return this === globalThis;
}
console.log(escopoGlobalDaAplicacao());


// Exemplo 04:
function funcaoUseStrict() {
    "use strict";
    return this;
}
// [OUT] - undefined
console.log(funcaoUseStrict());
