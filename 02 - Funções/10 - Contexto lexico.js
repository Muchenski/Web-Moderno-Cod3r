const valor = "Global";

function minhaFuncao() {
    console.log(valor);
} 

function exec() {
    const valor = "Local";
    minhaFuncao();
}

exec(); // [OUT] - Global

// As funções carregam dados do contexto léxico em que foram declaradas, não do contexto
// em que são chamadas.

// Por este motivo que minhaFuncao() não utilizou a constante "valor" do contexto de exec() quando
// foi chamada.
// Utilizou a constante "valor" do contexto léxico em que foi declarada.