////////////////////////////////////
// Funções != Arrow:
////////////////////////////////////

const obj = {};

let comparaComThis = function(param) {
    console.log(param === this);
}

comparaComThis(globalThis); // [OUT] - true

comparaComThis = comparaComThis.bind(obj)

comparaComThis(globalThis); // [OUT] - false

comparaComThis(obj); // [OUT] - true

console.log()

////////////////////////////////////
// Arrow functions:
////////////////////////////////////

comparaComThis = (param) => console.log(param === this);

comparaComThis(globalThis); // [OUT] - false
comparaComThis(this); // [OUT] - true
comparaComThis(module); // [OUT] - false
comparaComThis(exports); // [OUT] - true
comparaComThis(module.exports); // [OUT] - true

comparaComThis = comparaComThis.bind(obj);

// Não conseguimos alterar o "this" de uma arrow function nem com o .bind()
comparaComThis(obj); // [OUT] - false