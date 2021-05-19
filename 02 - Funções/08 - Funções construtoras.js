// Funções Construtoras funcionam como classes.

function Carro(velocidadeMaxima = 200, delta = 5) {
    
    // Atributo privado
    let velocidadeAtual = 0;

    // Método público
    this.acelerar = function() {
        let velocidadeProposta = velocidadeAtual + delta;
        velocidadeProposta < velocidadeMaxima ? velocidadeAtual = velocidadeProposta : velocidadeAtual = velocidadeMaxima;
    }

    this.getVelocidadeAtual = () => velocidadeAtual;
}

const uno = new Carro();
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 25);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());