const mensaje = "Se acerca tu cumple, y este es tu regalo de parte de Gene y Retrix ❤️";
const mensajeElement = document.getElementById("mensaje");
const contadorElement = document.getElementById("contador-regresivo");

const passwordContainer = document.getElementById("password-container");
const mensajeContainer = document.getElementById("mensaje-container");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password");

let index = 0;

function escribirMensaje() {
  if (index < mensaje.length) {
    mensajeElement.innerHTML += mensaje.charAt(index);
    index++;
    setTimeout(escribirMensaje, 100);
  } else {
    contadorRegresivo(3);
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