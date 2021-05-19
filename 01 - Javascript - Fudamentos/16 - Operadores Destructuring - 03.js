function random({ min = 0, max = 100 } = {}) {
    if(max < min) [max, min] = [min, max];
    return Math.round(Math.random() * (max - min) + min);
}

// De 10 até 20.
console.log(random({ min: 10, max: 20 }))

// De 50 até 100.
console.log(random({ min: 50 }))

// Do 0 até o 200.
console.log(random({ max: 200 }))

// Retornatá um valor entre o mínimo e o máximo estipulados como padrão(0 até 100).
console.log(random({}))

// Caso a função fosse:  function random({ min = 0, max = 100 }) {...}
// Ocorreria um erro, já que não teria um objeto padrão para ser desestruturado (o parâmetro da função "= {}").
// Pois, tentaria acessar as propriedades "min" e "max" de undefined.
// Como possuímos um objeto padrão para ser desestruturado, a operação ocorrerá normalmente.
console.log(random());

// Testando nossa inversão caso o min seja maior que o max.
console.log(random({min: 10, max: 0}));