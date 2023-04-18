// Este código devuelve la suma de todos los elementos de un arreglo dado.

//Función que suma todos los elementos del arreglo que recibe como parámetro.
let sumarNumArreglo = arreglo => {
    let suma;
    return suma = arreglo.reduce((a,b) => a + b);
}

// Se llama la función y se agrega el arreglo como parámetro.
console.log(sumarNumArreglo([6,2,5,3])); // 16.