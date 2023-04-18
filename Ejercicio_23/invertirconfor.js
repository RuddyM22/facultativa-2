// Este código invierte una cadena de texto utilizando un ciclo for.

// Función para invertir una cadena recibida como parámetro.
let invertirCadena = cadena => {
    let cadenainvertida = "";

    for(let i = (cadena.length-1); i >= 0; i--){
        cadenainvertida += cadena[i];
    }

    return cadenainvertida;
}

// Llamando a la función y pasándole la cadena a invertir.
console.log(invertirCadena('Hola')); // aloH.
