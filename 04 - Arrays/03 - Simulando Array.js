const quaseArray = {
    0: "Henrique",
    1: "Bruno",
    3: "João",
    4: "Paula",
    5: "Bruna"
};

const array = ["Henrique", "Bruno", "João", "Paula", "Bruna"];

// [OUT]:
// {
//     '0': 'Henrique',
//     '1': 'Bruno',
//     '3': 'João',
//     '4': 'Paula',
//     '5': 'Bruna'
// }
console.log(quaseArray);

console.log(array); // [OUT] - [ 'Henrique', 'Bruno', 'João', 'Paula', 'Bruna' ]

// Arrumando o print do nosso array simulado:
Object.defineProperty(quaseArray, "toString", {
    enumerable: false,
    value: function() {
        return Object.values(this);
    }
});
console.log(quaseArray.toString()); // [OUT] - [ 'Henrique', 'Bruno', 'João', 'Paula', 'Bruna' ]