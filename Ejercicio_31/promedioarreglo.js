// Este código devuelve el promedio de la suma de los elementos en un arreglo numérico.

// Función que suma los elementos y calcula el promedio de todos ellos.
let promedioDeArreglo = arreglo => arreglo.reduce((a,b)=> a+b) / arreglo.length;

// Pruebas de la función.
console.log(promedioDeArreglo([2, 8, 20, 10])); // 10.
console.log(promedioDeArreglo([25, 60, 5])); // 30.