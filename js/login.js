const LOCAL_STORAGE_KEY = "authUser";
const USUARIO_REGISTRADO = { email: "usuario@ejemplo.com", password: "123456" };
//Elementos DOM
const form = document.getElementById("formularioInicioSesion");
const correoInput = document.getElementById("correo");
const contrasenaInput = document.getElementById("contrasena");
const errorCorreo = document.getElementById("errorCorreo");
const errorContrasena = document.getElementById("errorContrasena");
const togglePassword = document.getElementById("togglePassword");
//Eventos
window.addEventListener("load", inicializarLogin);
form.addEventListener("submit", manejarEnvioFormulario);
togglePassword.addEventListener("click", alternarVisibilidadContrasena);
//Reviso si hay un usuario logueado
if (localStorage.getItem('authUser')) {
    window.location.replace('../pages/home.html');
}
//Funciones principales
function inicializarLogin() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}
function manejarEnvioFormulario(event) {
    event.preventDefault();
    //Limpiar mensajes de error
    limpiarErrores();
    // Obtener valores del formulario
    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();
    //Validar campos
    if (validarCampos(correo, contrasena)) {
        autenticarUsuario(correo, contrasena);
    }
}
function autenticarUsuario(correo, contrasena) {
    if (correo === USUARIO_REGISTRADO.email && contrasena === USUARIO_REGISTRADO.password) {
        const usuarioData = { email: correo };
        //Guardar en localStorage para la sesión
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(usuarioData));
        //Redirigir al home
        redirigirHome();
    } else {
        mostrarError("Correo o contraseña incorrectos.");
    }
}
function redirigirHome() {
    window.location.replace("../pages/home.html");
}
function validarCampos(correo, contrasena) {
    let esValido = true;
    if (!correo) {
        errorCorreo.textContent = "El correo es obligatorio.";
        esValido = false;
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
        errorCorreo.textContent = "Por favor, ingresa un correo válido.";
        esValido = false;
    }
    if (!contrasena) {
        errorContrasena.textContent = "La contraseña es obligatoria.";
        esValido = false;
    } else if (contrasena.length < 6) {
        errorContrasena.textContent = "La contraseña debe tener al menos 6 caracteres.";
        esValido = false;
    }
    return esValido;
}
function limpiarErrores() {
    errorCorreo.textContent = "";
    errorContrasena.textContent = "";
}
function mostrarError(mensaje) {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = mensaje;
    errorDiv.style.color = "red";
    errorDiv.style.marginTop = "10px";
    form.appendChild(errorDiv);

    setTimeout(() => {
    errorDiv.remove();
    }, 3000);
}
function alternarVisibilidadContrasena() {
    const icono = togglePassword.querySelector("i");

    if (contrasenaInput.type === "password") {
        contrasenaInput.type = "text";
        icono.classList.remove("fa-eye");
        icono.classList.add("fa-eye-slash");
    } else {
        contrasenaInput.type = "password";
        icono.classList.remove("fa-eye-slash");
        icono.classList.add("fa-eye");
    }
}