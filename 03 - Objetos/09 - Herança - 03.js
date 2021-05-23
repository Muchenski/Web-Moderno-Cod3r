function MeuObjeto() { }

console.log(MeuObjeto.prototype); // [OUT] - {}

const obj01 = new MeuObjeto();
const obj02 = new MeuObjeto();

console.log(obj01.__proto__ === obj02.__proto__); // [OUT] - true

console.log(MeuObjeto.prototype === obj01.__proto__); // [OUT] - true

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
}

obj01.falar(); // [OUT] - Meu nome é Anônimo

obj02.nome = "Rafael";
obj02.falar(); // [OUT] - Meu nome é Rafael


const obj03 = {};
obj03.__proto__ = MeuObjeto.prototype;
obj03.nome = "Paulo";
obj03.falar(); // [OUT] - Meu nome é Paulo


// Algumas conclusões:

// A partir do atributo __proto__, acessamos o atributo prototype do objeto pai.
console.log((new MeuObjeto()).__proto__ === MeuObjeto.prototype); // true

// Apenas funções possuem o atributo prototype. OBS: Lembrar que Object é uma função e também possui. 
console.log(MeuObjeto.__proto__ === Function.prototype); // true
console.log((new MeuObjeto()).prototype) // undefined

console.log(Function.prototype.__proto__ === Object.prototype); // true

// Object.prototype é o nível mais genérico da herança. Como Object em java.
console.log(Object.prototype.__proto__ === null); // true