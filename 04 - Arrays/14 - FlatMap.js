const turma01 = {
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
};

const turma02 = {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}

const escola = [turma01, turma02];

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const notas = escola.flatMap(turma => turma.alunos.map(aluno => aluno.nota));
console.log(notas); // [OUT] - [ 8.1, 9.3, 8.9, 7.3 ]