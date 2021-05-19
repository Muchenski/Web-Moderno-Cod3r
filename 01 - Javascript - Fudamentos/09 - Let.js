let teste = 1;

{
    {
        let teste = 2;
        console.log("Dentro = " + teste); // [OUT] - Dentro = 2
    }
}

console.log("Fora = " + teste); // [OUT] - Fora = 1

// Let respeita todo escopo de bloco, e uma variável let não pode ser re-declarada
// em mesmo escopo.