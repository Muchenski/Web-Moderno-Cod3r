// Map retorna um novo array, com as modificações que foram realizadas.

const nums = [1, 2, 3, 4, 5, 6];

const triplificar = n => n * 3;
const somarDez = n => n + 10;
const paraDinheiro = n => `R$${parseFloat(n).toFixed(2).replace(".", ",")}`;

const dobro = nums.map(somarDez).map(triplificar).map(paraDinheiro);

console.log(dobro); // [OUT] - [ 'R$33,00', 'R$36,00', 'R$39,00', 'R$42,00', 'R$45,00', 'R$48,00' ]