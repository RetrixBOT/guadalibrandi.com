const mensaje = "Se acerca tu cumpleaños, y si bien faltan unos días aún, queríamos que tu regalo llegara en tiempo y forma.\nQuisimos regalarte algo especial, algo que sabemos que siempre fue tu sueño tener, para que puedas hacer algo que siempre te gustó.\nAsí que este es tu regalo con amor de parte de Gene y Retrix ❤️";
const mensajeElement1 = document.getElementById("mensaje1");
const mensajeElement2 = document.getElementById("mensaje2");
const mensajeElement3 = document.getElementById("mensaje3");
const contadorElement = document.getElementById("contador-regresivo");
const imagen = document.getElementById('imagen');
const title = document.getElementById('title');
const passwordContainer = document.getElementById("password-container");
const mensajeContainer = document.getElementById("mensaje-container");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
let blurValue = 300; // Valor inicial de desenfoque

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

function showImage(){
  mensajeElement1.style.display = 'none'
  mensajeElement2.style.display = 'none'
  title.style.display = 'none'
  //mensajeElement3.style.display = 'none'
  contadorElement.style.display = 'none'
  if (blurValue > 0) { // Si llegamos a 0, detenemos el intervalo
    blurValue--; // Disminuimos el valor de desenfoque
    imagen.style.filter = `blur(${blurValue}px)`; // Aplicamos el nuevo valor de desenfoque
    setTimeout(showImage, 20);
  }
}

function contadorRegresivo(segundos) {
  contadorElement.innerHTML = `Revelando en ${segundos} segundos...`;
  if (segundos > 0) {
    setTimeout(function () {
      contadorRegresivo(segundos - 1);
    }, 1000);
  } else {
    showImage();
    //window.location.assign("https://articulo.mercadolibre.com.ar/MLA-912293480-camara-instantanea-instax-mini-11-rosa-4-rollos-entrega-_JM");
  }
}

passwordContainer.style.display = "block";

passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const password = passwordInput.value;
  if (password === "supercalifragilisticoespialidoso") {
    passwordContainer.style.display = "none";
    mensajeContainer.style.display = "block";
    escribirMensaje();
  } else {
    alert("Contraseña incorrecta, intenta de nuevo");
  }
});
