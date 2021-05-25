// Desafios:

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

// Verificar se todos alunos são bolsistas:
console.log(alunos.map(aluno => aluno.bolsista).reduce((acumulador, atual) => acumulador && atual)); // [OUT] - false

// Verifica se algum dos alunos é bolsista:
console.log(alunos.map(aluno => aluno.bolsista).reduce((acumulador, atual) => acumulador || atual)); // [OUT] - true