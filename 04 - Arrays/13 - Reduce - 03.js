Array.prototype.reduce2 = function (callback, acumulador) {
    if (!acumulador) { acumulador = this[0]; };
    for (let index = 1; index < this.length; index++) {
        acumulador = callback(acumulador, this[index], index, this);
    }
    return acumulador;
}

const soma = (total, valor) => total + valor
const multiplicacao = (total, valor) => total * valor;

const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma)); // [OUT] - 21
console.log(nums.reduce2(soma, 21)); // [OUT] - 42

console.log(nums.reduce(multiplicacao)); // [OUT] - 720
console.log(nums.reduce(multiplicacao, 0)); // [OUT] - 0
console.log(nums); // [OUT] - [ 1, 2, 3, 4, 5, 6 ]