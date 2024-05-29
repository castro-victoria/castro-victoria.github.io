

let nom = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cel = document.getElementById("celular");
let opcion = document.getElementById("opcion");
let text = document.getElementById("mensaje");
let lerr = document.getElementById("listaErrores");


function validar(){
    lerr.innerHTML = "";
    //nom.classList.remove("error");
    //nom.classList.remove("error");
    //apellido.classList.remove("error");
    //email.classList.remove("error");
    //celular.classList.remove("error");
    //motivo.classList.remove("error");
    //mensaje.classList.remove("error");

    let errores = [];

    let nbre = nom.value.trim();
    if(nbre.length == 0){
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


    let exre_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let e = email.value.trim();
    if(e.lenght == 0){
        errores.push("Falta ingresar el email");
        email.classList.add("Error");
    } else if(e.length > 0 && !exre_email.test(e.value)){
        errores.push("Email inválido (25 dígitos, no puede empezar con cero)");
        email.classList.add("Error");
    }

    let exre_cel = /^[1-9]\d{9}$/;
    celu = celular.value.trim();
    if(celu.length == 0){
        errores.push("Falta ingresar el celular");
        celular.classList.add("error");
    }else if(celu.length > 0 && !exre_cel.test(celu)){
        errores.push("Teléfono inválido (10 dígitos, no puede empezar con cero)");
        celular.classList.add("Error");
    }

    

    if(opcion.value == ""){
        errores.push("Debe elegir una opcion");
        opcion.classList.add("Error");
    }

    let text = mensaje.value.trim();
    if(text.length == ""){
        errores.push("Falta ingresar su mensaje");
        mensaje.classList.add("Error");
    } else if(text.lenght > 150){
        errores.push("Mensaje muy largo");
        mensaje.classList.add("Error");
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