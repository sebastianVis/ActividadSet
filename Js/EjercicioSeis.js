function sonIguales(arreglo1, arreglo2) {
    // Verificar si las longitudes son diferentes
    if (arreglo1.length !== arreglo2.length) {
      return false;
    }
    // Ordenar los arreglos y compararlos elemento por elemento
    const sorted1 = [...arreglo1].sort();
    const sorted2 = [...arreglo2].sort();
  
    for (let i = 0; i < sorted1.length; i++) {
      if (sorted1[i] !== sorted2[i]) {
        return false;
      }
    }
  
    return true;
  }
  console.log(sonIguales([1, 2, 3], [3, 2, 1])); // true
  console.log(sonIguales([1, 2, 3], [4, 5, 6])); // false
  console.log(sonIguales([1, 2, 2], [2, 1, 1])); // false