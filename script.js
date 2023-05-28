var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".contendor-muneco");
var contendor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".contenedor-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto .value 
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contendor.classList.add("ocultar");
}



function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
          
        }
       
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
           
        }

        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
           
        }

        else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
 
}


function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
          
        }
       
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;

        }
        
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
           
        }

        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;

        
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
           
        }

        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btncopiar = document.querySelector(".btn-copiar");
    btncopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".contenedor-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");    
    })

    