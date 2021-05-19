// ! Força a conversão para booleano, porém negando.
// Logo, !! força a conversão para booleano mantendo no estado original.
// Poderiamos utilizar Boolean(<aqui o item a ser testado>).

// ******* OS VERDADEIROS: *******

// Todos números inteiros/decimais com exceção do 0.
console.log(!!3.5);
console.log(!!-2);

// String com espaço vazio ou com texto:
console.log(!!" ");
console.log(!!"javascript");

// Array vazio:
console.log(!![]);

// Objeto literal vazio:
console.log(!!{});

// Tipo Infinity:
console.log(!!Infinity);

// Resultado do valor da atribuição, desde que o valor atribuído faça parte dos verdadeiros:
let teste;

// [OUT] - Atribuição em condicional 01: true
console.log(`Atribuição em condicional 01: ${!!(teste = true)}`);

// [OUT] - Teste: true
console.log(`Teste: ${teste}`);

// [OUT] - Atribuição em condicional 02: true
console.log(`Atribuição em condicional 02: ${!!(teste = {})}`);

// [OUT] - Teste: [object Object]
console.log(`Teste: ${teste}`);

//------------------------------------------------------------------------------------------------------------

// ******* OS FALSOS: *******

console.log(!!0)
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Resultado do valor da atribuição, desde que o valor atribuído faça parte dos falsos:

// [OUT] - Atribuição em condicional 03: false
console.log(`Atribuição em condicional 03: ${!!(teste = 0)}`); 

// [OUT] - Teste: 0
console.log(`Teste: ${teste}`); 

//------------------------------------------------------------------------------------------------------------

// ******* EXEMPLOS: *******

// Caso o nome não tenha sido inserido, definir um padrão:
let nome = "" || "Desconhecido";
console.log(nome); // [OUT] - Desconhecido

// Printando o primeiro verdadeiro que encontrar:
// [OUT] - Eu sou o primeiro verdadeiro
console.log('' || undefined || "Eu sou o primeiro verdadeiro" || NaN || true);