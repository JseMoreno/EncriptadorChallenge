var botonEncriptar = document.querySelector(".btn_encriptar");
var botonDesencriptar = document.querySelector(".btn_desencriptar");
var resultado = document.querySelector(".texto_resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    var caja_texto = recuperarTexto();
    resultado.textContent = encriptarTexto(caja_texto);
}

function desencriptar(){
    var caja_texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(caja_texto);
}

function recuperarTexto(){
    var caja_texto = document.querySelector(".caja_texto");
    return caja_texto.value;
}

function encriptarTexto(mensaje){
    var textoFinal = "";

    for(var i = 0; i < mensaje.length; i++){
        if(mensaje[i] == "a"){
            textoFinal += "ai";
        }
        else if(mensaje[i] == "e"){
            textoFinal += "enter";
        }
        else if(mensaje[i] == "i"){
            textoFinal += "imes";
        }
        else if(mensaje[i] == "o"){
            textoFinal += "ober";
        }
        else if(mensaje[i] == "u"){
            textoFinal += "ufat";
        }
        else{
            textoFinal += mensaje[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var textoFinal = mensaje
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    return textoFinal;
}

// Función para copiar el texto al portapapeles y mostrar un alert
const btnCopiar = document.querySelector(".btn_copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});
/*
const btnCopiar = document.querySelector(".btn_copiar"); 
btnCopiar.addEventListener("click", () => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido).then(() => {
        console.log("Texto copiado al portapapeles");
    });
});
*/