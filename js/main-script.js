const fechaNacimiento = new Date();
var fechaActual = new Date();

var day = fechaActual.getDate();
var month = fechaActual.toLocaleDateString('es-ES', { month: 'long' });
var year = fechaActual.getFullYear();

var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

const ageSpan = document.getElementById("edad");
ageSpan.innerHTML = `${edad} años`