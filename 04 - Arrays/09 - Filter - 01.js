const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

// [OUT] - [ { nome: 'iPad Pro', preco: 4199, fragil: true } ]
console.log(produtos.filter(function(produto) {
    return produto.preco > 2500;
}));

const ehFragil = item => item.fragil;
const ehMaisCaroQueQuinhentos = item => item.preco > 500;

// [OUT]:
// [
//     { nome: 'Notebook', preco: 2499, fragil: true },
//     { nome: 'iPad Pro', preco: 4199, fragil: true }
// ]
console.log(produtos.filter(ehFragil && ehMaisCaroQueQuinhentos));

// ou

// [OUT]:
// [
//     { nome: 'Notebook', preco: 2499, fragil: true },
//     { nome: 'iPad Pro', preco: 4199, fragil: true }
// ]
console.log(produtos.filter(ehFragil).filter(ehMaisCaroQueQuinhentos));