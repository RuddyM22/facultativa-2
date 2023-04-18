/* Este código toma dos parámetros numéricos y uno booleano, si el booleano es 'true', se devuelve el primer número
elevado a la potencia del segundo, si no, se obtiene la raíz cuadrada del primer número. */

// Función que evalúa los números y el booleano para obtener la potencia o raíz cuadrada.
let potenciaRaiz = (num1, num2, bool) => bool == true ? Math.pow(num1, num2) : Math.sqrt(num1);

// Pruebas de la función.
console.log(potenciaRaiz(8, 2, true)); // 64.
console.log(potenciaRaiz(4, 3, false)); // 2.