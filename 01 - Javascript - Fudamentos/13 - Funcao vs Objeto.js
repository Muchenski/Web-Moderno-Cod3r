console.log(typeof Object) // [OUT] - function
console.log(typeof new Object()) // [OUT] - object

const Cliente = function () { }
console.log(typeof Cliente) // [OUT] - function
console.log(typeof new Cliente()) // [OUT] - object

class Producto { }
console.log(typeof Producto) // [OUT] - function
console.log(typeof new Producto()) // [OUT] - object

// As classes, que são funções, são sempre do tipo function.
// Instâncias são sempre do tipo object.