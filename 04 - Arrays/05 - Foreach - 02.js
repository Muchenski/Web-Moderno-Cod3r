// Implementando o nosso foreach:

Array.prototype.forEach2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}

const aprovados = [
    "Henrique", "João", "Pedro", "Lucas", "Matheus"
];

// [OUT]:
// 1 - Henrique
// 2 - João
// 3 - Pedro
// 4 - Lucas
// 5 - Matheus
aprovados.forEach2(function(valor, indice) {
    console.log(`${indice + 1} - ${valor}`);
});