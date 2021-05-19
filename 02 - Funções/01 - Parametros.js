//////////////////////////////////////////////////////////////////////////////////
// Arguments:

// Toda função tem o parâmetro implícito "arguments".
// "Arguments" é um objeto que guarda todos os argumentos passados de forma indexada,
// tenham as funções parâmetros definidos ou não.
function implicito() {
    console.log(arguments);
}

// [OUT] - [Arguments] {}
implicito();

// [OUT] - [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 'Teste' }
implicito(1, 2, 3, 4, 5, "Teste");

//////////////////////////////////////////////////////////////////////////////////
// Parâmetros padrões:

function soma_1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

// 0 em booleano vai para falso, então neste contexto de cálculo, não temos uma estratégia
// que funcione.
console.log(soma_1(0, 0, 0)); // [OUT] - 3



function soma_2(a, b, c) {
    a = a != undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;

    return a + b + c;
}

// Neste caso temos 3 boas estratégias.

// No "a", verificamos se algum argumento foi passado para o parâmetro "a".
// No "b", verificamos se no índice 1 de arguments, que se refere ao segundo parâmetro(b), foi passado algum argumento.
// No "c", temos a estratégia mais interessante nesse contexto, que é verificar se algum argumento numérico foi passado para "c".

console.log(soma_2(0, 0, 0)); // [OUT] - 0

console.log(soma_2(1, 1, 1)); // [OUT] - 3



// Utilizando o padrão do próprio javascript:
function soma_3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma_3(0, 0, 0)) // [OUT] - 0
console.log(soma_2(1, 1, 1)); // [OUT] - 3
