

let nom = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cel = document.getElementById("celular");
//let opcion = document.getElementById("opcion");
//let text = document.getElementById("mensaje")
let lerr = document.getElementById("listaErrores");
let lmen = document.getElementById("listaMensajes");




function validar(){
    lerr.innerHTML = "";
    nom.classList.remove("error");
    //nom.classList.remove("error");
    //apellido.classList.remove("error");
    //email.classList.remove("error");
    //celular.classList.remove("error");
    //motivo.classList.remove("error");
    //mensaje.classList.remove("error");

    let errores = [];

    let nbre = nom.value.trim();
    if(nbre.lenght == 0){
        errores.push("Falta ingresar el nombre");
        nom.classList.add("Error");
    } else if(nbre.lenght > 10){
        errores.push("Nombre muy largo (10 carcteres)");
        nom.classList.add("Error");
    }

    let apel = apellido.value.trim();
    if(apel.length == 0){
        errores.push("Falta ingresar el apellido");
        apellido.classList.add("Error");
                
    } else if(apel.length > 20){
        errores.push("Nombre muy largo (20 carcteres)");
        apellido.classList.add("Error");
        
    }

    let exre_cel = /^[1-9]\d{9}$/;
    if(cel.value.length > 10) {
        errores.push("Teléfono muy largo (10 dígitos)");
        cel.classList.add("error");
       }
       if(cel.value.length > 0 && !exre_cel.test(cel.value)){
        errores.push("Teléfono inválido (10 dígitos, no puede empezar con cero)");
        cel.classList.add("Error");
    }

    let exre_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let e = email.value.trim();
    if(e.lenght == ""){
        errores.push("Falta ingresar el email");
        email.classList.add("Error");
    } else if(e.length > 25){
        errores.push("Email muy largo (25 dígitos)");
        email.classList.add("Error");
       }
       if(email.value.length > 0 && !exre_email.test(email.value)){
        errores.push("Email inválido (25 dígitos, no puede empezar con cero)");
        email.classList.add("Error");
    }






    
    for(let err of errores){
        let li = document.createElement("li");
        li.innerHTML = err;
        lerr.appendChild(li);
    }
    if(errores.lenght == 0){
        let li = document.createElement("li");
        li.innerHTML = 'El formulario se envió exitosamente. Aguarde a su respuesta. Atte: Yoga Studio.'
        lmen.appendChild(li);
        document.forms[0].reset();
        return false;

    }
    let men = 'Hola $(nbre), pronto estaremos en contacto contigo. Yoga Studio.';
    pSaludo.innerHTML = men;
    return false;

}

function erroresf(){
    for(let err of errores){
        console.log(err);
    }

}