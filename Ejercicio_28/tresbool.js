// Este código toma tres valores booleanos y devuelve 'true' si al menos uno de ellos es 'true'.

// Función que evalúa los booleanos y devuelve 'true' si al menos uno es 'true'.
let tresbooleanos = (bool1, bool2, bool3) => bool1 || bool2 || bool3;

console.log(tresbooleanos(true, false, false)); // true.
console.log(tresbooleanos(false, false, false)); // false.
console.log(tresbooleanos(true, true, true)); // true.
