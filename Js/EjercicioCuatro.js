const conjuntoA = [1, 2, 3, 4, 5];
const conjuntoB = [4, 5, 6, 7, 8];

const conjuntoAset = new Set(conjuntoA); // crear set uno
const conjuntoBset = new Set(conjuntoB); // crear set dos

const interSet = conjuntoAset.intersection(conjuntoBset); // se crea interseccion en interSet
console.log(interSet); // imprime interseccion
