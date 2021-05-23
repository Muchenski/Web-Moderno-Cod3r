String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}
// Agora, todos objetos provenientes de String possuirão o método reverse.

console.log("Henrique".reverse()); // [OUT] - euqirneH


Array.prototype.first = function () {
    return this[0];
}
// Agora, todos objetos provenientes de Arry possuirão o método first.

console.log([9, 2, 5, 8].first()); // [OUT] - 9

///////////////////////////////////////////////////////
// OBS: NÃO ALTERAR MÉTODOS JÁ EXISTENTES NO PROTOTYPE.
///////////////////////////////////////////////////////

Object.prototype.toString = function () {
    return "Lascou tudo";
}

const obj = { nome: "Lucas", idade: 19 };
console.log(obj.toString()); // [OUT] - Lascou tudo
