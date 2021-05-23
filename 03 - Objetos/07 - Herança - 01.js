// Cadeia de protótipo:

// __proto__ é um atributo que referencia o super objeto do mesmo.

let avo = { attrA: "A" };
let pai = { __proto__: avo, attrB: "B", attrExtra: "X" };
let filho = { __proto__: pai, attrC: "C", attrExtra: "Y" };

// Por padrão, o toString() só irá mostrar as propriedades que pertencem exclusivamente a aquele objeto.
// Serão ignoradas propriedades ou métodos herdados.
console.log(filho); // [OUT] - { attrC: 'C', attrExtra: 'Y' }

console.log(filho.attrA, filho.attrB, filho.attrC, filho.attrExtra); // [OUT] - A B C Y


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exemplo mais abrangente:

avo = {
    nome: "Joao",
    idade: 80,
    apresentar() {
        return `Meu nome é ${this.nome}`;
    }
}

pai = {
    nome: "Paulo",
    idade: 45,
    apresentar() {
        return `Meu nome é ${this.nome}, o nome do meu pai é ${super.nome}`;
    }
}

filho = {
    nome: "Matheus",
    idade: 13,
    apresentar() {
        return `Meu nome é ${this.nome}, o nome do meu pai é ${super.nome}, o nome do meu avô é ${super.__proto__.nome}.`
    }
}

Object.setPrototypeOf(pai, avo);
Object.setPrototypeOf(filho, pai);

console.log(avo.apresentar()); // [OUT] - Meu nome é Joao
console.log(pai.apresentar()); // [OUT] - Meu nome é Paulo, o nome do meu pai é Joao
console.log(filho.apresentar()); // [OUT] - Meu nome é Matheus, o nome do meu pai é Paulo, o nome do meu avô é Paulo.