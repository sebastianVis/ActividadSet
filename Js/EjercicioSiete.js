const text = "Hola mundo mundo de JavaScript";

function contarPalabrasUnicas (text){
    const arrayUno = text.toLowerCase().split(" ");
    const palabrasUnicas = new Set(arrayUno);
    return palabrasUnicas.size;
}
console.log(contarPalabrasUnicas(text));