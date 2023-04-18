// Este código devuelve el último elemento de un arreglo dado.

// Función que retorna el último elemento del arreglo recibido como parámetro.
let ultimoElemento = arreglo => arreglo[arreglo.length-1];

// Pruebas de la función.
console.log(ultimoElemento([23, 43, 54, 87, 92, 77])); // 77.
console.log(ultimoElemento([4,1,2,3,6,8])); // 8.