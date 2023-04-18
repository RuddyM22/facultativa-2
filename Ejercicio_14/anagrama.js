// Este código evalúa y devuelve 'true' si una cadena es un anagrama de otra; caso contrario, devuelve 'false'.

// Función que evalúa si cadena1 es un anagrama de cadena2.
let anagramas = (cadena1, cadena2) => cadena1.toLowerCase().split('').sort().join('') === cadena2.toLowerCase().split('').sort().join('');

// Pruebas de la función.
console.log(anagramas('Mora', 'Roma')); // true.
console.log(anagramas('Ballena', 'llenaba')); // true.
console.log(anagramas('Brasa', 'Brazo')); // false.