var formulario = document.getElementById('formulario');
var form = document.getElementById("form")
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido')
var email = document.getElementById('correo');
var contraseña = document.getElementById('contraseña');
var confirmacion = document.getElementById('confirmacion');
var telefono = document.getElementById('numero');
var botones = document.getElementById("opciones");
var cuidado = document.getElementById("cuidado");


function soloLetras(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyz"
    especiales = "8-37-38-46-164";
    tecladoEspecial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecladoEspecial = true;
            break;
        }
    }
    if (letras.indexOf(teclado) == -1 && !tecladoEspecial) {
        return false;
    }
}

function soloNumeros(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    numeros = "1234567890"
    especiales = "8-37-38-46-164";
    tecladoEspecial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecladoEspecial = true;
            break;
        }
    }
    if (numeros.indexOf(teclado) == -1 && !tecladoEspecial) {
        return false;
    }
}


/*funciones de validacion*/
function validateName(nombre) {
    if (nombre.value === 0 || nombre.value == "" || nombre.value.length < 10) {
        console.log("escribe un nombre")

        event.preventDefault()

        nombre.classList.add("error")
        nombre.classList.remove("correcto")
        nombre.classList.remove("alert")
        return (false)
    } else if (/^(![0-9])$/.test(nombre.value)) {
        event.preventDefault()

        nombre.classList.remove("error")
        nombre.classList.remove("correcto")
        nombre.classList.add("alerta")

        return (false)
    } else {
        console.log("nombre adecuado");

        nombre.classList.remove("alert")
        nombre.classList.remove("error")
        nombre.classList.add("correcto")
        return (true)
    }
}


function validateEmail(email) {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo.value)) {
        console.log("asas");

        email.classList.remove("alert")
        email.classList.remove("error")
        email.classList.add("correcto")
        return (true)

    }

    event.preventDefault()

    email.classList.add("error")
    email.classList.remove("correcto")
    email.classList.remove("alert")
    return (false)
}


function validatePassword(contraseña) {
    if (contraseña.value === 0 || contraseña.value == "") {

        console.log("escribe una contraseña")
        event.preventDefault()
        contraseña.classList.add("error");

        contraseña.classList.remove("correcto");
        contraseña.classList.remove("alerta");

        return (false)
    } else if (contraseña.value.length < 5) {
        event.preventDefault()
        contraseña.classList.remove("error")
        contraseña.classList.remove("correcto")
        contraseña.classList.add("alerta")
    } else {
        contraseña.classList.remove("alerta")
        contraseña.classList.remove("error")
        contraseña.classList.add("correcto")
        return (true)
    }
}

function validatePassword2(confirmacion) {
    if (confirmacion.value === 0 || confirmacion.value == "") {
        console.log("repite la contreaseña")
        event.preventDefault()

        confirmacion.classList.add("error")
        confirmacion.classList.remove("correcto")
        confirmacion.classList.remove("alerta")
        return (false)
    } else if (confirmacion.value !== contraseña.value) {
        event.preventDefault()

        confirmacion.classList.remove("error");
        confirmacion.classList.remove("correcto");
        confirmacion.classList.add("alerta");

    } else {
        console.log("las contraseñas coinciden");

        confirmacion.classList.remove("alerta");
        confirmacion.classList.remove("error");
        confirmacion.classList.add("correcto");
        return (true)
    }
}

function passwordOk() {
    if (contraseña.value !== confirmacion.value) {
        event.preventDefault()

        contraseña.classList.remove("error")
        contraseña.classList.remove("correcto")
        contraseña.classList.add("alerta")
        confirmacion.classList.remove("error")
        confirmacion.classList.remove("correcto")
        confirmacion.classList.add("alerta")
        console.log("sadasd")

        return (false)
    } else {
        return (true)
    }
}


function validatePhone(numero) {
    if (numero.value === 0 || numero.value == "" || numero.value.length < 8) {

        event.preventDefault()
        numero.classList.add("error")
        numero.classList.remove("correcto")
        numero.classList.remove("alert")
        return (false)
    } else if (/^[0-9]$/.test(numero.value)) {
        event.preventDefault()
        numero.classList.remove("error")
        numero.classList.remove("correcto")
        numero.classList.add("alerta")
        alert("numero equivocado")
        return (false)
    } else {

        numero.classList.remove("alert")
        numero.classList.remove("error")
        numero.classList.add("correcto")
        return (true)
    }
}

/*validacion de botton radius */
var btn1 = document.getElementsByName("boton1");
var btn2 = document.getElementsByName("boton2").value = 0;
var comprovacion = document.getElementById("opcion");
var alert = document.getElementById("seleccionaAlgo")


function comprobar() {
    var pulsado = false; //variable de comprobación
    var opciones = document.formulario.opcion; //array de elementos
    var elegido = -1; //número del elemento elegido en el array
    for (i = 0; i < opciones.length; i++) { //bucle de comprobación
        if (opciones[i].checked == true) {
            pulsado = true
            elegido = i //número del elemento elegido en el array
        }
    }
    if (pulsado == true) { //mensaje de formulario válido
        console.log("oki")
        alert.classList.remove("actived")

    } else { //mensaje de formulario no válido.
        alert.classList.add("actived")

        return false //el formulario no se envía.
    }
}




formulario.addEventListener("submit", e => {


    validateName(nombre);

    validatePhone(numero);

    validateEmail(email);

    validatePassword(contraseña);
    validatePassword2(confirmacion);

    passwordOk();
    confirm("Verifica tu informacion \n \n Rojo: el campo esta vacio y es obigatorio llenarlo \n Amarillo: hay un error, verifica que todo este bien escrito \n Verde: Exelente, podemos continuar")

})