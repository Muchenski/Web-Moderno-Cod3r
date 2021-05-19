class Pessoa {
    constructor(idade = 0) {
        this.idade = idade;

        setInterval(() => {
            console.log(this.idade);
            this.idade++;
        }, 1000);
    }
}
// [OUT] - 1, 2, 3, 4, 5, 6, 7, 8, 9...
new Pessoa();

// Arrow function's utilizam o "this" de onde foram definidas.
// Neste caso, ela foi definida já como argumento de setInterval.
// Porém, argumentos ainda não estão no escopo da função em que estão
// sendo passados.
// Logo, neste caso, a arrow function foi definida fora de setInterval
// e utiliza o "this" da instância de Pessoa.

