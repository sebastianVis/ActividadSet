const invitados=["jorge"];
const setInvitados= new Set(invitados); // Set creado para eliminar

function agregarInvitado(){
    const addInv= prompt(`Ingrese nombre a agregar`).toUpperCase;
    setInvitados.add(addInv);
    return setInvitados; // Imprime el Set Actualizado
} //Agrega un nombre al Set de invitados.
function eliminarInvitado(){
    const deleteInv= prompt(`Ingrese nombre a eliminar`).toUpperCase; 
    setInvitados.delete(deleteInv);
    return setInvitados; // Imprime el Set Actualizado
} //Elimina un nombre del Set.
function mostrarInvitados(){
    console.log(setInvitados)
} //Muestra todos los nombres en el Set.

/* para poner cada funcion, agregar un texto que diga los siguientes comandos

Agregar = agregarInvitado(setInvitados)
Eliminar = function eliminarInvitado(setInvitados)
Mostrar Invitados = function mostrarInvitados(setInvitados)

Agregar y eliminar, generan un prompt en la pantalla para seleccionar un nombre.

*/