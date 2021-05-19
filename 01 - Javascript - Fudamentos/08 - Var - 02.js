var teste = 1;

{
    {
        var teste = 2;
        console.log("Dentro = " + teste); // [OUT] - Dentro = 2
    }
}

console.log("Fora = " + teste); // [OUT] - Fora = 2

// Variáveis var podem ser re-declaradas. 
// Neste caso, que foram re-declaradas no mesmo escopo,
// sobrepões os valores uma das outras.