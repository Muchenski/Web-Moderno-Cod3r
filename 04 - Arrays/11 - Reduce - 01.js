const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

const getNota = aluno => aluno.nota;
const somarNotas = (acumulador = 0, atual) => acumulador + atual;

// .reduce(callback(acumulador, valorAtual), valorInicialDoAcumulador);

console.log(alunos.map(getNota).reduce(somarNotas)); // [OUT] - 35
console.log(alunos.map(getNota).reduce(somarNotas, 10)); // [OUT] - 45