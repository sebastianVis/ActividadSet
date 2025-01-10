const numerosDuplicados = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10]; // Crear array con duplicados
const ejercicioDos = new Set(numerosDuplicados); // Crear set con el array de duplicados
console.log(ejercicioDos); // Imprimir Set
const nuevoArrayE2 = Array.from(ejercicioDos); // conversion de set a array
console.log(nuevoArrayE2); // imprimir array