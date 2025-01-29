// Función para convertir el texto a mayúsculas
function convertirAMayusculas(event) {
    event.target.value = event.target.value.toUpperCase();
}

// Función para permitir solo números
function permitirSoloNumeros(event) {
    // Expresión regular para permitir solo números
    const regex = /^[0-9]*$/;
    if (!regex.test(event.key)) {
        event.preventDefault();
    }
}

// Función para validar los campos en tiempo real
function validarCampo(event) {
    const campo = event.target;
    const valor = campo.value;

    // Validación para convertir en mayúsculas
    if (campo.id === 'NombreCompleto' || campo.id === 'Apellido1' || campo.id === 'Apellido2' || campo.id === 'Direccion' || campo.id === 'Programa' || campo.id === 'Barrio') {
        convertirAMayusculas(event);
    }

    // Validación para permitir solo números en Estrato y Semestre
    if (campo.id === 'Estrato' || campo.id === 'Semestre' || campo.id === 'Telefono') {
        if (isNaN(valor) && valor !== '') {
            campo.setCustomValidity('Este campo solo puede contener números');
        } else {
            campo.setCustomValidity(''); // Si es válido, limpia el mensaje de error
        }
    }

    // Validación de campos obligatorios
    if (campo.id === 'NombreCompleto' || campo.id === 'Apellido1' || campo.id === 'Apellido2' || campo.id === 'Direccion' || campo.id === 'Programa' || campo.id === 'Barrio') {
        if (valor.trim() === '') {
            campo.setCustomValidity('Este campo es obligatorio');
        } else {
            campo.setCustomValidity('');
        }
    }
}

// Asociar los eventos a los campos
document.getElementById('NombreCompleto').addEventListener('input', validarCampo);
document.getElementById('Apellido1').addEventListener('input', validarCampo);
document.getElementById('Apellido2').addEventListener('input', validarCampo);
document.getElementById('Direccion').addEventListener('input', validarCampo);
document.getElementById('Programa').addEventListener('input', validarCampo);
document.getElementById('Barrio').addEventListener('input', validarCampo);
document.getElementById('Estrato').addEventListener('input', validarCampo);
document.getElementById('Semestre').addEventListener('input', validarCampo);

// Validación en tiempo real para solo números en los campos de Estrato y Semestre
document.getElementById('Estrato').addEventListener('keypress', permitirSoloNumeros);
document.getElementById('Semestre').addEventListener('keypress', permitirSoloNumeros);
document.getElementById('Telefono').addEventListener('keypress', permitirSoloNumeros);



//validacion para que solo permita del 1 al 6
const estratoInput = document.getElementById('Estrato');

// Permitir solo los números entre 1 y 6
estratoInput.addEventListener('input', function (e) {
    let value = e.target.value;

    // Eliminar cualquier valor fuera del rango 1-6
    if (value && (value < 1 || value > 6)) {
        e.target.value = "";  // Borrar el valor
    }
});

// Validar que los valores estén dentro del rango 1-6 cuando el campo pierde el enfoque
estratoInput.addEventListener('blur', function (e) {
    let value = e.target.value;

    // Si no es un valor válido, borrar el campo
    if (value !== "" && (value < 1 || value > 6)) {
        e.target.value = "";  // Borrar el valor
    }
});

// Calculo de la edad segun la fecha de nacimiento ingresada
const fechaNacimientoInput = document.getElementById('FechaNacimiento');
const edadInput = document.getElementById('Edad');

// Función para calcular la edad
function calcularEdad() {
    const fechaNacimiento = new Date(fechaNacimientoInput.value);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    // Ajustar la edad si el cumpleaños aún no ha pasado este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    // Establecer la edad calculada en el campo de edad
    edadInput.value = edad;
}

// Calcular la edad cada vez que se cambie la fecha de nacimiento
fechaNacimientoInput.addEventListener('input', calcularEdad);


//validaciones permitir solo dos dijitos en semestre
const semestreInput = document.getElementById('Semestre');

// Función para limitar los dígitos a 2
semestreInput.addEventListener('input', function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2); // Limitar a 2 dígitos
    }
});







