const pSaludo = documen.getElementById("pSaludo");
const listaErrores = document.getElementById("listaErrores");


function validar(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let celular = document.getElementById("celular");
    let motivo = document.getElementById("motivo");
    let mensaje = document.getElementById("mensaje")
    let errores = [];
    let campo_error = null;

 
    //nombre.classList.remove("error");
    //apellido.classList.remove("error");
    //email.classList.remove("error");
    //celular.classList.remove("error");
    //motivo.classList.remove("error");
    //mensaje.classList.remove("error");



    let nbre = nombre.value.trim();
    if(nbre.lenght == 0){
        errores.push("Falta ingresar el nombre");
        nombre.classList.add("Error");
    } else if(nbre.lenght > 10){
        errores.push("Nombre muy largo (10 carcteres)");
        nombre.classList.add("Error");
    }

    let apel = apellido.value.trim();
    if(apel.lenght == 0){
        errores.push("Falta ingresar el apellido");
        apellido.classList.add("Error");
    } else if(apel.lenght > 10){
        errores.push("Nombre muy largo (10 carcteres)");
        apellido.classList.add("Error");
    }

    let exre_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let e = email.value.trim();
    if(e.lenght == ""){
        errores.push("Falta ingresar el email");
        email.classList.add("Error");
    } else if(e.length > 25){
        errores.push("Email muy largo (25 dígitos)");
        email.classList.add("Error");
    }else if(e.length > 0 && !exre_email.test(e)){
        errores.push("Email inválido (25 dígitos, no puede empezar con cero)");
        email.classList.add("Error");
    }

    let exre_cel = /^[1-9]\d{9}$/;
    cel = celular.value.trim();
    if(cel.trim.lenght == ""){
        errores.push("Falta ingresar el celular");
        celular.classList.add("error");
    } else if(celular.value.length > 10){
        errores.push("Celular muy largo (10 dígitos)");
        celular.classList.add("error");
    } else if(celular.value.length > 0 && !exre_cel.test(celular.value)){
        errores.push("Celular inválido (10 dígitos, no puede empezar con cero)");
        celular.classList.add("Error");
    }

    let mot = motivo.value.trim();
    if(mot == ""){
        errores.push("Falta seleccionar el motivo");
        motivo.classList.add("Error");
    }

    let text = mensaje.value.trim();
    if(text.length == ""){
        errores.push("Falta ingresar su mensaje");
        mensaje.classList.add("Error");
    } else if(text.lenght > 150){
        errores.push("Mensaje muy largo");
        mensaje.classList.add("Error");
    }




    listaErrores.innerHTML = "";
    if(errores.lenght > 0){
        for(let i=0;i<errores.length;i++){
            let li = document.createElement("li");
            li.innerHTML = errores[i];
            listaErrores.appendChild(li);
        }
        if(campo_error != null){
            campo_error.focus();
        }
        return false;

    }
    let men = 'Hola $(nbre), pronto estaremos en contacto contigo. Yoga Studio.';
    pSaludo.innerHTML = men;
    return false;

}