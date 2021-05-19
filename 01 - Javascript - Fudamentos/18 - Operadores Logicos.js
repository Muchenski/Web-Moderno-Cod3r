/*
Se os dois trabalhos derem certo, compra tv de 50 e toma sorvete.
Se só um entre os dois trabalhos derem certo, compra uma tv de 32 e toma sorvete.
Se nenhum dos dois trabalhos derem certo, não compra tv e não toma sorvete. 
*/

function compras(trabalho01, trabalho02) {
    const tomarSorvete = trabalho01 || trabalho02;
    const comprarTv50 = trabalho01 && trabalho02;
    const comprarTv32 = trabalho01 != trabalho02;
    const saudavel = !tomarSorvete;

    return {tomarSorvete, comprarTv50, comprarTv32, saudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))

console.log(compras(false, true))
console.log(compras(false, false))