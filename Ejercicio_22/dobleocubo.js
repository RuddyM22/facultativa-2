// Este código toma un número y devuelve el cubo del mismo si es negativo; en caso que sea positivo devolverá el doble.

// Función que evalúa si el número es negativo o positivo y devuelve una respuesta según el resultado.
let dobleoCubo = num => num < 0 ? Math.pow(num, 3) : num*2;

// Probando la función.
console.log(dobleoCubo(5)); // 10.
console.log(dobleoCubo(-2)); // -8.