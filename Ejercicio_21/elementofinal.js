// El siguiente código devuelve el último elemento de un arreglo.

// Función que retorna el último elemento del arreglo recibido como parámetro.
let ultimoElemento = arreglo => arreglo[arreglo.length-1];

// Pruebas de la función.
console.log(ultimoElemento([98, 76, 43, 21, 59, 48])); // 48.
console.log(ultimoElemento([2, 3, 5, 7, 11, 13, 17])); // 17.