const prompt = require('prompt-sync')();
/*• Ejercicio 6:
Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso.*/

let edad = prompt("Por favor, ingresa tu edad:");

edad = parseInt(edad);

if (edad >= 18) {
  console.log("Eres mayor de edad. ¡Bienvenido al mundo de los adultos!");
} else {
  console.log("Eres menor de edad. ¡Disfruta de tu juventud!");
}