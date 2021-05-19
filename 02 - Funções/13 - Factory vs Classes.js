////////////////////////////////////////////
// Classes / Funções Construtoras
////////////////////////////////////////////

class PessoaClass {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new PessoaClass("Henrique");
p1.falar();

// Classes e funções construtoras possuem o problema do "this" variante.
let falar = p1.falar;
try{
    falar(); // [OUT] - Cannot read property 'nome' of undefined
} catch(e) {
    console.log(e.message);
}

falar = p1.falar.bind(p1);
falar(); // [OUT] - Meu nome é Henrique

console.log()
////////////////////////////////////////////
// Funções Fábricas
////////////////////////////////////////////

const pessoaFabrica = function(nome) {
    return {
        falar() {
            console.log(`Meu nome é ${nome}`);
        }
    }
}
const p2 = pessoaFabrica("Lucas");
p2.falar(); // [OUT] - Meu nome é Lucas

falar = p2.falar;
falar(); // [OUT] - Meu nome é Lucas

////////////////////////////////////////////