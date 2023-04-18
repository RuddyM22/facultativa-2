/* Toma tres parámetros (dos números y un booleano), si el valor del booleano es 'true', multiplica ambos números;
caso contrario, los resta*/

// Función que evalúa el parámetro booleano y ejecuta una acción según su valor.
let operacionSegunBool = (num1, num2, bool) => bool == true ? num1*num2 : num1-num2;

// Probando la función.
console.log(operacionSegunBool(6, 5, true)); // 30.
console.log(operacionSegunBool(6, 5, false)); // 1.