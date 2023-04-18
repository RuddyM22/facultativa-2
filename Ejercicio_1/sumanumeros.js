// Este código devuelve la suma de dos números generados aleatoriamente. 

//Función para obtener un número aleatorio. 
let obtenerNumRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

//Se declaran las variables que contendrán ambos números y se les asigna un valor aleatorio.
let num1 = obtenerNumRandom(10,99);
let num2 = obtenerNumRandom(10,99);
console.log('El primer número es: ' + num1 + '\nEl segundo número es: ' + num2);

//Función para sumar los números.
let sumaNumeros = (x, y) => ('La suma de ambos números es: ' + (x + y));

//Se ejecuta la función de suma con los parámetros necesarios.
console.log(sumaNumeros(num1, num2));