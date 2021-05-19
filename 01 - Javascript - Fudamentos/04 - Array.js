const valores = [7.7, 8.9, 6.3, 9.2];

// Javascript não gera erro de acesso a índice não existente.
// [OUT] - undefined
console.log(valores[10]);

valores[10] = 9.5;

// [OUT] - 9.5
console.log(valores[10]);

// [OUT] - [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 9.5 ]
console.log(valores);

// Tamanho do Array:
// [OUT] - 11
console.log(valores.length);

// Podemos adicionar quantos itens quisermos com o push:
valores.push({ id: 5, nome: "Henrique" }, null, NaN, 8.5);

// [OUT] - [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 9.5, { id: 5, nome: 'Henrique' }, null, NaN, 8.5];
console.log(valores);

// ****** OBS: Apesar de podemos ter Arrays heterogêneos, o ideal é sempre que os Arrays sejam homogêneos. ******

// pop() Remove o último elemento e o retorna:
// [OUT] - 8.5
console.log(valores.pop()); 

// [OUT] - [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 9.5, { id: 5, nome: 'Henrique' }, null, NaN];
console.log(valores)

// delete remove o valor do elemento do índice, insere um valor vazio no lugar, e retorna um boolean
// para indicar se a operação foi realizada.
// OBS: o índice permanece.
// [OUT] - true
console.log(delete valores[11]);

// [OUT] - [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 9.5, <1 empty item>, null, NaN ]
console.log(valores);

// [OUT] - object
console.log(typeof valores);