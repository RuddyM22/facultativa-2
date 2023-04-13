//  Este código recorrerá una cadena de texto dada y devolverá 'True' si contiene la letra 'a';
//  de lo contrario, devolverá 'False'.

//Se declaran las variables y se asignan su contenido en cadena de texto.
let cadena = 'El recio viento mece los pinos del denso bosque';
let cadena2 = 'Mejor es callar y escuchar que hablar';

//función que busca entre el texto recibido como parámetro la letra 'a'.
function buscarLetraA(texto){
    console.log('¿El siguiente texto contiene la letra "a"?: \n' + texto);
    if (texto.includes('a') == true || texto.includes('A') == true) {
        console.log('True');
    } else
        console.log('False');
}

//Se ejecutan las funciones con su parámetro correspondiente.
buscarLetraA(cadena);
buscarLetraA(cadena2);