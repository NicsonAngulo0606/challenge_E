var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var imgMunieco = document.querySelector(".contenedor-img");
var contenedorMensaje = document.querySelector(".contenedor-mensaje");
var textoResultado = document.querySelector(".resultado");

btnEncriptar.onclick = encriptarTexto;
btnDesencriptar.onclick = desencriptarTexto;

function encriptarTexto() {
    ocultarElementos();
    var texto = obtenerTexto();
    textoResultado.textContent = procesarEncriptado(texto);
}

function desencriptarTexto() {
    ocultarElementos();
    var texto = obtenerTexto();
    textoResultado.textContent = procesarDesencriptado(texto);
}

function obtenerTexto() {
    var texto = document.querySelector(".texto");
    return texto.value;
}

function ocultarElementos() {
    imgMunieco.classList.add("ocultar");
    contenedorMensaje.classList.add("ocultar");
}

function procesarEncriptado(mensaje) {
    var texto = mensaje;
    var resultadoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            resultadoFinal += "ai";
        } else if (texto[i] == "e") {
            resultadoFinal += "enter";
        } else if (texto[i] == "i") {
            resultadoFinal += "imes";
        } else if (texto[i] == "o") {
            resultadoFinal += "ober";
        } else if (texto[i] == "u") {
            resultadoFinal += "ufat";
        } else {
            resultadoFinal += texto[i];
        }
    }
    return resultadoFinal;
}

function procesarDesencriptado(mensaje) {
    var texto = mensaje;
    var resultadoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            resultadoFinal += "a";
            i += 1;
        } else if (texto[i] == "e") {
            resultadoFinal += "e";
            i += 4;
        } else if (texto[i] == "i") {
            resultadoFinal += "i";
            i += 3;
        } else if (texto[i] == "o") {
            resultadoFinal += "o";
            i += 3;
        } else if (texto[i] == "u") {
            resultadoFinal += "u";
            i += 3;
        } else {
            resultadoFinal += texto[i];
        }
    }

    return resultadoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar"); 
btnCopiar.addEventListener("click", copiarTexto = () => {
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado"); 
});
