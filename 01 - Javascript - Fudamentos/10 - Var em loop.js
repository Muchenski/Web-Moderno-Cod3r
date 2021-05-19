const items = []

for (var index = 0; index < 10; index++) {
    items.push(function () {
        console.log(index);
    });
}

// Var não possui o conceito de Closure, então o valor de "index" é o último que foi atribuído,
// e isso impacta em todas funções.
// Var não consegue lembrar o valor/estado de "index" em cada momento(volta) do loop.

items[2](); // [OUT] - 10
items[8](); // [OUT] - 10