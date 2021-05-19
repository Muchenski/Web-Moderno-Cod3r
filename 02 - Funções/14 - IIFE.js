// Immediately Invoked Function Expression

// O envolvimento em parênteses da IIFE faz com que as variáveis ou outras funções
// declaradas dentro dela, não toquem o escopo global.

(function (nome) {
    console.log(`Meu nome é ${nome}`); // [OUT] - Meu nome é Henrique
})("Henrique");

// Sobre a fuga do escopo global:
// Após a função acima ter sido inicializada, ela será imediatamente chamada. 
// Não é mantida uma referência à função, nem mesmo ao seu valor de retorno. 
// Dessa forma, daria erro tentar chamar ela depois por meio de saudacao(), 
// indicaria que ela não foi definida. 