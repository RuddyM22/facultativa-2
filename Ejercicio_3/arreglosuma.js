// Este código devuelve la suma de los valores de un arreglo numérico dado.

//Función que suma todos los elementos del arreglo que recibe como parámetro.
let sumarNumArreglo = arreglo => {
    let suma;
    return suma = arreglo.reduce((a,b) => a + b);
}

// Se llama la función y se agrega el arreglo como parámetro.
console.log(sumarNumArreglo([1,2,3,4])); // 10.