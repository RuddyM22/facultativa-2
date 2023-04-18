// Este código recibe una cadena y devuelve 'true' si es palíndromo, 'false' en caso contrario.

// Función que evalúa si un texto es palíndromo.
let esPalindromo = cadena => {
    const sinespacios = cadena.toLowerCase().replace( /[\W_]/g, ''); // Se hace una copia de la cadena original sin espacios y en minúsculas.
    const cadenaInv = sinespacios.split('').reverse().join(''); // Se crea otra variable a partir de la copia y se invierte.
    return sinespacios.toLowerCase() === cadenaInv; // Se retorna la comparación de la copia con la cadena invertida.
}

// Pruebas de la función.
console.log(esPalindromo('Amad a la dama')); // true
console.log(esPalindromo('Anona')); // true
console.log(esPalindromo('No palindromo')); // false