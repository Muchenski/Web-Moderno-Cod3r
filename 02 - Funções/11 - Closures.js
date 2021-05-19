// Closure é o escopo criado quando uma função é declarada.
// Esse escopo permite acessar e modificar variáveis externas a função.

// Closure é o contexto léxico que a função carrega com ela.

const x = "Global";

function fora() {
    const x = "Local";
    function dentro() {
        return x;
    }
    return dentro;
}

console.log(fora()()); // [OUT] - local