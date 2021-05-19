///////////////////////////////////////////////////////////////////////////////
////////////////////////////// Exemplo com erro: //////////////////////////////
///////////////////////////////////////////////////////////////////////////////
class PessoaErro {
    constructor(idade = 0) {
        this.idade = idade;

        setInterval(function () {
            console.log(this.idade);
            this.idade++;
        }, 1000);
    }
}
// [OUT] - NaN, NaN, NaN, NaN, NaN, NaN, NaN...
new PessoaErro();

// setInterval possui um "this" diferente do "this" da instância de PessoaErro.
// A função anônima que passamos como argumento em setInterval possui o "this"
// variante, em relação ao contexto em que é chamada.
// Como quem irá chamá-la é a função setInterval, o "this" da função anônima 
// será o "this" de setInterval.

///////////////////////////////////////////////////////////////////////////////
//////////////////////////// Exemplo com resoluções: //////////////////////////
///////////////////////////////////////////////////////////////////////////////

class PessoaBind {
    constructor(idade = 0) {
        this.idade = idade;
        
        setInterval(function () {
            console.log(this.idade);
            this.idade++;
        }.bind(this), 1000);
    }
}
// [OUT] - 0, 1, 2, 3, 4, 5, 6, 7...
new PessoaBind;

// Definimos o contexto do "this" da função anônima, passada como argumento em setInterval, como o da instância
// de PessoaBind.
// Apesar parecer que o .bind() está dentro de setInterval, ele está fora.
// .bind() está apenas alterando o argumento passado.
// Então, o "this" do .bind() é externo ao setInterval,
// e externo a própria função anônima em que ele opera.

// Outras abordagens:

class PessoaSelf {
    constructor(idade = 0) {
        const self = this;

        self.idade = idade;
        
        setInterval(function () {
            console.log(self.idade);
            self.idade++;
        }.bind(self), 1000);
    }
}
// [OUT] - 0, 1, 2, 3, 4, 5, 6, 7...
new PessoaSelf;

