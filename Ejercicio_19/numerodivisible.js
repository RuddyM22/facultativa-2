// Este código devuelve 'true' si un número dado es divisible entre 3 y 5.

// Función para comprobar si el número enviado como parámetro es divisible entre 3 y 5.
let numeroDivisible = num => num % 3 === 0 && num % 5 === 0;

// Pruebas de la función.
console.log(numeroDivisible(15)); // true.
console.log(numeroDivisible(16)); // false.