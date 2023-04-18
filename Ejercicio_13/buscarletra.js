/*  Este código recorrerá una cadena de texto dada y devolverá 'true' si contiene la letra 'a';
    de lo contrario, devolverá 'false'.*/

//función que busca entre el texto recibido como parámetro la letra 'a'.
let buscarLetraA = texto =>{
    console.log('¿El siguiente texto contiene la letra "a"?: \n' + texto);
    return texto.includes('a') || texto.includes('A');
}

//Se ejecutan las funciones con su parámetro correspondiente.
console.log(buscarLetraA('El recio viento mece los pinos del denso bosque')); //false.
console.log(buscarLetraA('Mejor es callar y escuchar que hablar')); //true.