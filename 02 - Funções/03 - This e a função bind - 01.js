const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao);
    }
}
// [OUT] - Bom dia
pessoa.falar();

////////////////////////////////////////////////////////////////
//      Armazenando a função do objeto em uma variável:       //
////////////////////////////////////////////////////////////////

// Neste caso, a referência ao "this" é perdida.
// Pois o "this" em que a variável "falar" está, 
// é diferente do "this" de pessoa(que é o próprio objeto pessoa).
// Desta forma, não conseguimos acessar o atributo "saudacao".

const falar = pessoa.falar;
// [OUT] - undefined
falar();


// Para resolver isso, podemos definir, com a função "bind()", qual contexto que a variável 
// possuirá como referência ao "this".

const falarBind = pessoa.falar.bind(pessoa);
// [OUT] - Bom dia
falarBind();

// O retorno de .bind(<contexto para o this>), foi armazenada na variável "falarBind", 
// com o contexto definido ao objeto "pessoa".