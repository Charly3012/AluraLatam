let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del desafío";

function clicado() {
    console.log("El botón fue presionado");

}

function preguntarCiudad() {
    let ciudad = prompt("Dame una ciudad de México");
    alert(`Yo estuve en la ciudad ${ciudad} y me acordé de ti`);
}

function alerta() {
    alert("Yo amo JS");
}

function suma() {
    let n1 = parseFloat(prompt("Dame el primer número: "));
    let n2 = parseFloat(prompt("Dame el segundo número: "));
    let resultado = n1 + n2;

    alert("El resultado de la suma es " + resultado);

}


