const items = []

for (let index = 0; index < 10; index++) {
    items.push(function() {
        console.log(index);
    });
}

// Let compreende o conceito de Closure. 
// logo, lembra do valor/estado de "index"
// a cada volta no loop.

items[2](); // [OUT] - 2
items[8](); // [OUT] - 8