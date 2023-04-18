/* Este código toma cuatro números y multiplica la resta del primer número por el segundo por la división del tercer
número entre el cuarto. */

// Función que hace resta dos números y el resultado lo multiplica por la división de otros dos números.
let operacionesMultiples = (num1, num2, num3, num4) => (num1 - num2) * (num3 / num4);

// Probando la función.
console.log(operacionesMultiples(4, 2, 6, 3)) // 4.
console.log(operacionesMultiples(8, 6, 15, 5)) // 6.