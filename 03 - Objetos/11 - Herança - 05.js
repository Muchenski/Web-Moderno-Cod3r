function Aula(videoId, nome) {
    this.nome = nome;
    this.videoId = videoId;
}

const aula1 = new Aula(1, "Bem vindo");
console.log(aula1); // [OUT] - Aula { nome: 'Bem vindo', videoId: 1 }


// Simulando o new
function novo(funcaoConstrutora, ...construtor) {
    const obj = {};
    obj.__proto__ = funcaoConstrutora.prototype;
    funcaoConstrutora.apply(obj, construtor);
    return obj;
}
const aula2 = novo(Aula, 2, "Javascript básico");
console.log(aula2); // [OUT] - Aula { nome: 'Javascript básico', videoId: 2 }