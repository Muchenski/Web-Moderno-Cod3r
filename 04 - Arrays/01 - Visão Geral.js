let alunos = ["Henrique", "João", "Letícia", "Bruna"];

// Ordenando(manupula o array original):
alunos.sort();
console.log(alunos); // [OUT] - [ 'Bruna', 'Henrique', 'João', 'Letícia' ]

// Em arrays, diferentemente de quando utilizamos o delete, onde ele realmente exclui propriedades
// de objetos, ele apenas irá transformar o índice "deletado", em um índice vazio.
delete alunos[0];
console.log(alunos); // [OUT] - [ <1 empty item>, 'Henrique', 'João', 'Letícia' ]

// SPLICE:
// A função .splice() serve para removermos, ou adicionarmos itens em índices que desejarmos(podemos remover e adicionar ao mesmo tempo).
// .splice(<índice a ser trabalhado>, <número de itens após o índice a serem deletados>, <...novos items>)
// Obs: Os <...novos itens> serão sempre adicionados a partir do <índice a ser trabalhado>

// Exemplo - Deletando "de verdade" o primeiro elemento:
alunos.splice(0, 1);
console.log(alunos); // [OUT] - [ 'Henrique', 'João', 'Letícia' ]

// Exemplo - Removendo do índice 1 até o último item:
alunos.splice(1, (alunos.length - 1));
console.log(alunos); // [OUT] - [ 'Henrique' ]

// Exemplo - Adicionando dois itens a partir do índice 0:
alunos.splice(0, 0, "Juca", "Pedro");
console.log(alunos); // [OUT] - [ 'Juca', 'Pedro', 'Henrique' ]

// Exemplo - Removendo os dois primeiros itens e adicionando 3 novos:
alunos.splice(0, 2, "Paula", "Joana", "Lucas");
console.log(alunos); // [OUT] - [ 'Paula', 'Joana', 'Lucas', 'Henrique' ]