// constructor.name pega o nome da classe do objeto.

class Veiculo {
    constructor(velocidade, rodas) {
        this.velocidade = velocidade;
        this.rodas = rodas;
    }
    acelerar() {
        console.log(`${this.constructor.name} está acelerando`);
    }
}

class Moto extends Veiculo {
    constructor(velocidade, rodas) {
        super(velocidade, rodas);
    }
}

class Carro extends Veiculo {
    constructor(velocidade, rodas) {
        super(velocidade, rodas);
    }
}

new Veiculo(220, 4).acelerar(); // [OUT] - Veiculo está acelerando
new Moto(120, 4).acelerar(); // [OUT] - Moto está acelerando
new Carro(320, 4).acelerar(); // [OUT] - Carro está acelerando