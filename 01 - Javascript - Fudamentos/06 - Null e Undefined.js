// Null deve ser atribuído quando temos uma referência que não queremos que aponte
// para lugar algum, ou quando queremos inicializar/setar uma variável com ausência de valor.

// Undefined é atribuído, automaticamente, para variáveis que não foram inicializadas.

let nome;

console.log(nome); // [OUT] - undefined

nome = null;

// Regra de acessos a atributos ou métodos para não causar erros:

// undefined.metodoQualquer() || undefined.atributoQualquer
// ou
// null.metodoQualquer() || null.atributoQualquer

// Ocorrerão erros do tipo TypeError.

// TypeError: Cannot read property 'nome' of undefined
// TypeError: Cannot read property 'nome' of null

const produto = { nome: "celular" };

// produto.undefined -> ok, não gera erro.
// [OUT] - undefined
console.log(produto.categoria); 

// produto.undefined.atributoQualquer entra na regra de acesso que foi descrita anteriormente.

// TypeError: Cannot read property 'nome' of undefined
// console.log(produto.categoria.nome);

// O resumo da regra é: 
// Para acessar um undefined ou null, sem gerar TypeError, quem está acessando não pode ser undefined ou null.
// [OUT] - { nome: 'celular' }
console.log(produto);

// Deletando propriedade de objeto:
delete produto.nome;

// [OUT] - {}
console.log(produto);