const peso01 = 1.0;
const peso02 = Number("2.0");

// Javascript ignora números flutuantes com final .0, e os transforma em inteiros.
// [OUT]
// 1 
// 2
console.log(`${peso01}\n${peso02}`);

// [OUT]
// true
// true
console.log(`${Number.isInteger(peso01)}\n${Number.isInteger(peso02)}`);

const avaliacao01 = 9.871;
const avaliacao02 = 6.871;

const total = (avaliacao01 * peso01 + avaliacao02 * peso02);
const media = total / (peso01 + peso02);

// [OUT] - 7.8709999999999996
console.log(media);

// Limitando as casas decimais em 2:
// [OUT] - 7.87
console.log(media.toFixed(2));

// Convertendo a média para a base binária(2):
// [OUT] - 111.11011110111110011101101100100010110100001110010101
console.log(media.toString(2));

// [OUT] - number -> é um tipo de dado de valores numéricos.
console.log(typeof media);

// [OUT] - function
console.log(typeof Number)