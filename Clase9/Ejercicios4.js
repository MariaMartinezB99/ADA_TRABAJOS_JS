const prompt = require('prompt-sync')();
/*• Ejercicio 4:
Declara una variable nombre y pide al usuario que ingrese su nombre.
Verifica si el nombre ingresado es igual a tu nombre.*/

let nombre = prompt("Por favor, ingresa tu nombre:");

if (nombre === "Bard") {
  console.log("¡Vaya, tenemos el mismo nombre!");
} else {
  console.log("Tu nombre es " + nombre + ". Es un nombre bonito.");
}
