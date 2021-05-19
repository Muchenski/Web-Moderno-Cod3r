// Não ocorre erro em divisão por 0.
// [OUT] - Infinity
console.log(7 / 0);

// Operações matemáticas envolvendo Strings e Numbers.
// Com exceção da adição, o javascript é inteligente o suficiente
// para entender que houve a intenção de realizar a operação.

// [OUT] - 5
console.log("10" / "2");

// [OUT] - 0
console.log("10" % 2);

// [OUT] - 20
console.log("10" * 2);

// [OUT] - 100
console.log("10" ** "2");

// [OUT] - 8
console.log("10" - 2);

// Apenas adição não é realizada, ocorre concatenação.
// [OUT] - 102
console.log("10" + 2);

// Não podemos acessar médodos do Number a partir de valores numéricos literais.
// Error: 1000.toString(2);

// Porém, se colocarmos o valor literal entre parênteses, é posssível.
// [OUT] - 1111101000
console.log((1000).toString(2));