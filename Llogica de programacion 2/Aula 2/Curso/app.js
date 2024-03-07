let numeroSecreto = generarNumeroSecreto();
let contador = 1;
console.log("Número secreto: " + numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

mensajesIniciales();

function generarNumeroSecreto() {
    //Se usa la función random de math para generar un número aleatorio
    //Esta función genera un número decimal, se multiplica por 10 y se usa una función para redondear
    return (Math.floor(Math.random() * 10) + 1);

}


function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('.texto__parrafo', `Acertaste el número secreto en ${contador} ${(contador > 1) ? 'veces' : 'vez'}`);
        document.getElementById("reiniciar").removeAttribute('disabled')
    } else {
        if (numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento('.texto__parrafo', `El número secreto es mayor`);
        }
        else {
            asignarTextoElemento('.texto__parrafo', `El número secreto es menor`);

        }
        contador++;
        limpiarCaja("valorUsuario");
    }
    return;

}

function limpiarCaja(elemento) {

    document.getElementById(elemento).value = '';
}

function mensajesIniciales() {
    asignarTextoElemento('h1', "Juego del número secreto!");
    asignarTextoElemento('.texto__parrafo', "Indica un número del 1 al 10");
}

function reiniciarJuego() {
    console.log("Hola")
    limpiarCaja("valorUsuario")
    contador = 1;
    numeroSecreto = generarNumeroSecreto();
    console.log("Número secreto: " + numeroSecreto);
    mensajesIniciales();
    document.getElementById("reiniciar").setAttribute('disabled', 'true');

}