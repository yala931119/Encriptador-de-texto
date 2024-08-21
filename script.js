//-- seleccion de elementos--//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".text-area");
const aviso =document.querySelector(".informacion")
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btncopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");


//--- boton de encriptar--//

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "el campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500)
    }

    else if(texto !== txt){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500)
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "el texto debe ser todo en minuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500)
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btncopiar.style.visibility = "inherit";
        contenido.remove();
        
    }

});

//--- boton de desencriptar--//

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "el campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500)
    }

    else if(texto !== txt){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500)
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "el texto debe ser todo en minuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500)
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btncopiar.style.visibility = "inherit";
        contenido.remove();
        
    }

});

//--- boton de copiar--//

btncopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});













