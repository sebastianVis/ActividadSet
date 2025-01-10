function duplicados (data){ // funcion para verificar si es duplicado o no, recibe data que es el array
    const checkDup = new Set(data); // convierte el array en un set eliminando duplicados 
    const info = data.length != checkDup.size ? "true" : "false"; // con operador ternario se filtra si es duplicado o no
    console.log(info); // imprime resultado
}

const NoTieneDuplicados = ([1, 2, 3, 4, 5]); // false
const tieneDuplicados = ([1, 2, 3, 3, 5]); // true

duplicados(NoTieneDuplicados); //retorna false
duplicados(tieneDuplicados); //retorna true