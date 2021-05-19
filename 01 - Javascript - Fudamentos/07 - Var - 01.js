////////////////////// Testando var em escopo de bloco que não seja uma função //////////////////////

{
    {
        {
            var testeVarEmBloco = "Teste var em escopo de bloco";
        }
    }
}

// [OUT] - "Teste var em escopo de bloco"
console.log(testeVarEmBloco);

////////////////////// Testando var em função //////////////////////

function teste() {
    var testeVarEmFuncao = "Teste var em escopo de funcao";
}

// Var respeita o escopo da função e não está acessível fora dela.

try {
    console.log(testeVarEmFuncao);
} catch (error) {
    // [OUT] - ReferenceError: testeVarEmFuncao is not defined
    console.log(error.message);
}

//////////////////////////////////////////////////////////////////////////////////////
// Conclusão: var não respeita o escopo de um bloco de código que não seja uma função.
// Com var, só podemos ter dois escopos: Global e de função.
// Uma variável var que não for declarada dentro de uma função, terá escopo global.
// Caso seja declarada dentro de uma função, ela terá escopo global da função. 
//////////////////////////////////////////////////////////////////////////////////////