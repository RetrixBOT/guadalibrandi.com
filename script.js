const mensaje = "Se acerca tu cumple, y si bien faltan unos días aún, queriamos que tu regalo llegara en tiempo y forma\nQuisimos regalarte algo especial, algo que sabemos que siempre fue tu sueño tener, para hacer algo que siempre te gustó\nasí que\neste es tu regalo de parte de Gene y Retrix ❤️";
const mensajeElement1 = document.getElementById("mensaje1");
const mensajeElement2 = document.getElementById("mensaje2");
const mensajeElement3 = document.getElementById("mensaje3");
const contadorElement = document.getElementById("contador-regresivo");

const passwordContainer = document.getElementById("password-container");
const mensajeContainer = document.getElementById("mensaje-container");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password");

let index = 0;
let element = 1;

function escribirMensaje() {
  if (index < mensaje.length) {
    if (element == 1){
      mensajeElement1.innerHTML += mensaje.charAt(index);
    }
    else if (element == 2){
      mensajeElement2.innerHTML += mensaje.charAt(index);
    }
    else {
      mensajeElement3.innerHTML += mensaje.charAt(index);
    }
    if (mensaje.charAt(index) == '\n') element++;
    index++;
    setTimeout(escribirMensaje, 100);
  } else {
    contadorRegresivo(10);
  }
}

function contadorRegresivo(segundos) {
  contadorElement.innerHTML = `Redireccionando en ${segundos} segundos...`;
  if (segundos > 0) {
    setTimeout(function () {
      contadorRegresivo(segundos - 1);
    }, 1000);
  } else {
    window.location.assign("https://articulo.mercadolibre.com.ar/MLA-912293480-camara-instantanea-instax-mini-11-rosa-4-rollos-entrega-_JM");
  }
}

passwordContainer.style.display = "block";

passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const password = passwordInput.value;
  if (password === "guada123") {
    passwordContainer.style.display = "none";
    mensajeContainer.style.display = "block";
    escribirMensaje();
  } else {
    alert("Contraseña incorrecta, intenta de nuevo");
  }
});