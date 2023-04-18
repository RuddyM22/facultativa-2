// Este código toma un arreglo, crea una copia de él, lo invierte y devuelve.

// Función que hace una copia del arreglo recibido como parámetro, la invierte y devuelve.
let arregloInvertido = arreglo => {
    let inverso = arreglo.reverse();
    return inverso;
}

// Probando la función.
console.log(arregloInvertido([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1].
console.log(arregloInvertido([9, 43, 12, 65, 87, 19])); // [ 19, 87, 65, 12, 43, 9 ].