const soma = (a, b) => a + b;

const subtracao = (a, b) => a - b;

const imprimirResultado = (a, b, operacao = soma) => console.log(operacao(a, b));

imprimirResultado(5, 5); // [OUT] - 10
imprimirResultado(5, 5, soma); // [OUT] - 10
imprimirResultado(5, 5, subtracao); // [OUT] - 0

// Usando funções anônimas:

// [OUT] - 16
imprimirResultado(2, 8, function(a, b) {
    return a * b;
});

// [OUT] - 5
imprimirResultado(20, 4, (a, b) => a / b);