const sequencia = {
    _id: 0,
    get id() {
        return this._id++;
    },
    set id(valor) {
        if (valor <= this._id) return;
        this._id = valor;
    }
}

console.log(sequencia.id); // [OUT] - 0
console.log(sequencia.id); // [OUT] - 1

sequencia.id = -1; 
console.log(sequencia.id); // [OUT] - 2

sequencia.id = 5;
console.log(sequencia.id); // [OUT] -  5