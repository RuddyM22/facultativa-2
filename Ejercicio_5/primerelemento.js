// Este código devuelve el primer elemento de un arreglo dado.

// Función que toma el primer elemento del arreglo y lo devuelve.
let elementoInicial = arreglo => arreglo.shift();

// Se hace el llamado de la función y se le envía el arreglo como parámetro.
console.log(elementoInicial([2,3,4,5])); // resultado esperado: 2.