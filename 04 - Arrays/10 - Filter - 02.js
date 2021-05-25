// Implementando o nosso filter:

Array.prototype.filter2 = function(callback) {
    const novoArray = [];
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this) && novoArray.push(this[index]);
    }
    return novoArray;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

const ehFragil = item => item.fragil;
const ehMaisCaroQueQuinhentos = item => item.preco > 500;

// [OUT]:
// [
//     { nome: 'Notebook', preco: 2499, fragil: true },
//     { nome: 'iPad Pro', preco: 4199, fragil: true } 
// ]
console.log(produtos.filter2(ehFragil).filter2(ehMaisCaroQueQuinhentos));

// [OUT]:
// [
//     { nome: 'Notebook', preco: 2499, fragil: true },
//     { nome: 'iPad Pro', preco: 4199, fragil: true } 
// ]
console.log(produtos.filter2(ehFragil && ehMaisCaroQueQuinhentos));