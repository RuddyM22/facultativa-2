// Este código devuelve la suma de todos los números pares de un arreglo; de no haber números pares, devuelve 0.

// Función que recorre el arreglo, busca los números pares para sumarlos y retorna el resultado.
let sumaPares = arreglo =>{
    let suma = 0;
    if (arreglo.length > 0) {
        for(let i=0; i<=arreglo.length-1; i++){
            if(arreglo[i] % 2 === 0)
                suma += arreglo[i];
        }
    }
    return suma;
}

// Pruebas de la función.
console.log(sumaPares([1, 2, 4, 5, 6])); // 12.
console.log(sumaPares([17, 9, 5, 3, 11])); // 0.
console.log(sumaPares([])); // 0.