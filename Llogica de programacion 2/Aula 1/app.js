//El document es una documento de objetos de lo que se muestra en la pantalla
//Estamos seleccionando el titulo y guardándolo en una variable llamada 'titulo'
let titulo = document.querySelector('h1');

//Con inertHTML podemos asignarle un texto
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('.texto__parrafo');
parrafo.innerHTML = 'Indica un número del 1 al 10';


//Estructura base de una función 
function intentoUsuario() {
    console.log("Mira mama estoy programando")
};