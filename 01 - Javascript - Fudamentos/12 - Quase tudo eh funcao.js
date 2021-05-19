// Diferente de outras linguagens, JavaScript é fortemente baseada em funções!
// Agora o que isso quer dizer? Uma forma simples de pensar é: ao comparar JS com outras
// linguagens substitua a palavra classe por função! Vamos dar uma olhada em alguns exemplos: 

// Criando uma "classe" utilizando a notação de função:

function Animal(nome, filo) {
    this.nome = nome
    this.filo = filo

    this.apresentar = function () {
        console.log(`Nome: ${this.nome}\nFilo: ${this.filo}`);
    }
}

let cachorro = new Animal("Cachorro", "Cordados");

cachorro.apresentar();

// Animal é uma função! E podemos instanciar objetos a partir dessa função, assim como foi feito com cachorro! 
// Dessa maneira podemos fazer um paralelo com outras linguagens, onde em JS uma função tem um comportamento 
// semelhante à uma classe.

//  inspecionarmos os tipos veremos que: 

console.log(typeof Animal); // Resultado: function
console.log(typeof cachorro); // Resultado: object

// Quando em JS temos a seguinte notação: 

class Animal {
    constructor(nome, filo) {
        this.nome = nome
        this.filo = filo
    }

    apresentar() {
        console.log(`Nome: ${this.nome}\nFilo: ${this.filo}`);
    }
}

let cachorro = new Animal("Cachorro", "Cordados");
cachorro.apresentar()

// Por debaixo dos panos é criada uma função, assim como foi feito no primeiro exemplo! 
// Se inspecionarmos, teremos o resultado semelhante: 

console.log(typeof Animal); // Resultado: function
console.log(typeof cachorro); // Resultado: object

// Quanto aos Arrays, a lógica é a mesma! Dá uma olhada:

const teste = ['a', 'b', 'c']

console.log(typeof Array); // Resultado: function
console.log(typeof teste); // Resultado: object