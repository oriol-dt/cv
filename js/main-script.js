const fechaNacimiento = new Date();
var fechaActual = new Date();

var day = fechaActual.getDate();
var month = fechaActual.toLocaleDateString('es-ES', { month: 'long' });
var year = fechaActual.getFullYear();