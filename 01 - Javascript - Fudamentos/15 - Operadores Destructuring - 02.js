// Operadores destructuring em Arrays.

const [a] = [10];
console.log(a); // [OUT] - 10

const [n1, , n3, n4, , n6, n7 = 999] = [1, 2, 3, 4, 5, 6];
console.log(n1, n3, n4, n6, n7); // [OUT] - 1 3 4 6 999

// Ignorando o primeiro array filho.
// Ignorando o primeiro e o terceiro elemento do segundo array filho 
const [, [, nota]] = [[, 8, 9], [9, 6, 8]];
console.log(nota); // [OUT] - 6