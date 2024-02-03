var usuarioText = document.getElementById('usuarioText');
var botonEncriptar = document.getElementById('btn-encriptador');
//var botonDesencriptar = document.getElementById('btn-desencriptador');
//var botonCopiar = document.getElementById('btn-copiar');
//var desincriptadoText = document.getElementById('desincriptadoText');


function buttonEncriptar(){
    const textDeUsuario = usuarioText.value.toLowerCase();
    
    let textoCifrado = textDeUsuario
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat')
    
    desincriptadoText.innerHTML = textoCifrado;
    document.getElementById("mensaje-inical").style.display = "none";
    document.getElementById("mensaje-descincriptado").style.display = "flex";
}

function desencriptarTexto(){
    const textDeUsuario = usuarioText.value.toLowerCase();
    
    let textoCifrado = textDeUsuario
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u')
    
    desincriptadoText.innerHTML = textoCifrado;
}


function copiarTexto(){
    var contenido = desincriptadoText;
    contenido.select();
    document.execCommand("copy")
}


/*
function ocultarMensajeFinal(){
  if( usuarioText == ""){
        document.getElementById("mensaje-descincriptado").style.display = "none";
    }else{
        document.getElementById("mensaje-inical").style.display = "none";
    }
}
ocultarMensajeFinal()*/