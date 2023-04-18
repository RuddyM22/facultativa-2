// Este código devuelve un arreglo de cadenas con todas las palabras en minúsculas.

// Función que pasa a minúsculas todas las palabras de un arreglo en una copia del mismo.
let arregloEnMinusculas = arreglo => {
    nuevoArray = arreglo;
    for(let i=0; i<=nuevoArray.length-1; i++){
        nuevoArray[i] = nuevoArray[i].toLowerCase();
    }
    return nuevoArray;
}

// Prueba de la función.
console.log(arregloEnMinusculas(['HOLA', 'ESTAS', 'SON', 'MINÚSCULAS'])); // [ 'hola', 'estas', 'son', 'minúsculas' ].