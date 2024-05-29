let nom = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cel = document.getElementById("celular");
let opcion = document.getElementById("opcion");
let text = document.getElementById("mensaje");
let lerr = document.getElementById("listaErrores");
let lmen = document.getElementById("listaMensajes");

function validar(){
    lerr.innerHTML = "";
    let errores = [];

    let nbre = nom.value.trim();
    if(nbre.length == 0){
        errores.push("Falta ingresar el nombre");
        nom.classList.add("Error");
    } else if(nbre.length > 20){
        errores.push("Nombre muy largo (20 carcteres)");
        nom.classList.add("Error");
    }

    let apel = apellido.value.trim();
    if(apel.length == 0){
        errores.push("Falta ingresar el apellido");
        apellido.classList.add("Error");
                
    } else if(apel.length > 20){
        errores.push("Apellido muy largo (20 carcteres)");
        apellido.classList.add("Error");
        
    }

    let exre_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let e = email.value.trim();
    if(e.length == 0){
        errores.push("Falta ingresar el email");
        email.classList.add("Error");
    } else if(e.length > 0 && !exre_email.test(e)){
        errores.push("Email inválido (es mayor a 25 dígitos y no puede empezar con cero)");
        email.classList.add("Error");
    }

    let exre_cel = /^[1-9]\d{9}$/;
    celu = cel.value.trim();
    if(celu.length == 0){
        errores.push("Falta ingresar el celular");
        cel.classList.add("error");
    }else if(celu.length > 0 && !exre_cel.test(celu)){
        errores.push("Teléfono inválido (10 dígitos, no puede empezar con cero)");
        cel.classList.add("Error");
    }

    if(opcion.value == ""){
        errores.push("Debe elegir una opcion");
        opcion.classList.add("Error");
    }

    let tex = text.value.trim();
    if(tex.length == 0){
        errores.push("Falta ingresar su mensaje");
        text.classList.add("Error");
    } else if(tex.lenght > 150){
        errores.push("Mensaje muy largo");
        text.classList.add("Error");
    }

    for(let err of errores){
        let li = document.createElement("li");
        li.innerHTML = err;
        lerr.appendChild(li);
    }
    if(errores.length == 0){
        let li = document.createElement("li");
        li.innerHTML = 'El formulario se envió exitosamente. Aguarde a su respuesta. Atte: Yoga Studio.'
        lmen.appendChild(li);
        document.forms[0].reset();
        return false;
    }

}