const pessoa = {
    nome: "Henrique",
    idade: 24,
    peso: 58
}

// Listando os atributos
console.log(Object.keys(pessoa)); // [OUT] - [ 'nome', 'idade', 'peso' ]

// Listando os valores
console.log(Object.values(pessoa)); // [OUT] - [ 'Henrique', 24, 58 ]

// Listando cada chave e valor em um array
console.log(Object.entries(pessoa)); // [OUT] - [ [ 'nome', 'Henrique' ], [ 'idade', 24 ], [ 'peso', 58 ] ]


////////////////////////////////////////////////////////////////////////////////////////////////////

// enumerable - Permissão para a propriedade poder ser listada. 
// Valor padrão é false.

// writable - Permissão para a propriedade poder ser alterada(ainda sim pode ser deletada). 
// Valor padrão é false.

// value - Valor inicial da propriedade. 
// Valor padrão é undefined.

// configurable - Controla se uma propriedade pode ser deletada do objeto, 
// e se seus atributos (exceto a mudança de writable para false) podem ser alterados. 
// Valor padrão é false.

////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Enumerable
Object.defineProperty(pessoa, "naoListavel", {
    enumerable: false,
    value: "Não posso ser listado!",
});
console.log(pessoa); // [OUT] - { nome: 'Henrique', idade: 24, peso: 58 }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Writable
Object.defineProperty(pessoa, "naoAlteravel", {
    enumerable: true,
    writable: false,
    value: "Não sou alterável!",
    configurable: true
});
pessoa.naoAlteravel = "testando";
console.log(pessoa); // [OUT] - { nome: 'Henrique', idade: 24, peso: 58, naoAlteravel: 'Não sou alterável!' }

// Não podemos ALTERAR, mas podemos DELETAR.
delete pessoa.naoAlteravel;
console.log(pessoa);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Configurable
Object.defineProperty(pessoa, "naoConfiguravel", {
    value: "Não sou configurável!",
    configurable: false
});
// Não podemos deletar a propriedade.
delete pessoa.naoConfiguravel;
console.log(pessoa); // // [OUT] - { nome: 'Henrique', idade: 24, peso: 58, naoConfiguravel: 'Não sou configurável!' } 

pessoa.naoConfiguravel = 5
console.log(pessoa) // [OUT] - { nome: 'Henrique', idade: 24, peso: 58, naoConfiguravel: 5 }


// Com configurable = true, podemos re-definir a propriedade e alterar as configurações.
Object.defineProperty(pessoa, "souConfiguravel", {
    value: "Eu sou configurável!",
    configurable: true,
    enumerable: true
});
Object.defineProperty(pessoa, "souConfiguravel", {
    value: "Eu fui reconfigurada!"
});
console.log(pessoa); // [OUT] - { nome: 'Henrique', idade: 24, peso: 58, souConfiguravel: 'Eu fui reconfigurada!' }

Object.defineProperty(pessoa, "naoSouConfiguravel", {
    value: "Não sou configurável!"
});
try {
    Object.defineProperty(pessoa, "naoSouConfiguravel", {
        value: "Testando..."
    });
} catch (e){
    console.log(e.message); // [OUT] - Cannot redefine property: naoSouConfiguravel
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Gerando um objeto a partir de vários outros:
const target = {};
const obj1 = { a: 1 };
const obj2 = { b: 2, c: 9 };
const obj3 = { c: 3, d: 4 };
const final = Object.assign(target, obj1, obj2, obj3);
console.log(final); // [OUT] - { a: 1, b: 2, c: 3, d: 4 }