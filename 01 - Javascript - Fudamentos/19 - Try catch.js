function gritarNome(obj) {
    try {
        console.log(obj.nome.toUpperCase());
    } catch (error) {
        console.log(error.toString());
    }
}

gritarNome({ name: "Henrique" }); // [OUT] - TypeError: Cannot read property 'toUpperCase' of undefined

gritarNome({ nome: "Henrique" }); // [OUT] - HENRIQUE