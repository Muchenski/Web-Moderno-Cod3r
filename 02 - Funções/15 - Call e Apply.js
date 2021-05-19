function calcularPreco(moeda = "R$", imposto = 0) {
    return `${moeda} ${(this.preco * (1 - this.desconto) * (1 + imposto)).toFixed(2)}`
}

const p1 = {
    nome: "Notebook",
    preco: 3900.00,
    desconto: 0.2,

    // Associando "calcularPreco a p1"
    calcularPreco
}
console.log(p1.calcularPreco()); // [OUT] - R$ 3120.00
console.log(p1.calcularPreco("$", 0.1)); // [OUT] - $ 3432.00

// Definindo o contexto da execução da função com apply e call:

// .apply(<contexto>, [...args da função]);
// .call(<contexto>, ...args da função);

console.log(calcularPreco.apply(p1)); // [OUT] - R$ 3120.00
console.log(calcularPreco.call(p1)); // [OUT] - R$ 3120.00

console.log(calcularPreco.apply(p1, ["¢", 0.2])); // [OUT] - ¢ 3744.00
console.log(calcularPreco.call(p1, "$", 0.1)); // [OUT] - $ 3432.00
