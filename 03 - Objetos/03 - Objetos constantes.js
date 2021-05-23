const objConstante01 = {
    nome: "João"
}

// Tornando o objeto imutável:
Object.freeze(objConstante01);

objConstante01.nome = "teste";
console.log(objConstante01); // [OUT] - { nome: 'João' }

delete objConstante01.nome;
console.log(objConstante01); // [OUT] - { nome: 'João' }

objConstante01.sobrenome = "Silva";
console.log(objConstante01); // [OUT] - { nome: 'João' }


// Caso a gente queira criá-lo já de maneira constante:
const objConstante02 = Object.freeze({
    nome: "Junior"
})