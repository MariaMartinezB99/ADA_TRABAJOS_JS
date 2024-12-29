const prompt = require('prompt-sync')();
/*• Ejercicio 7:
Pide al usuario que ingrese su peso en kilogramos y conviértelo a
libras. Muestra el resultado con un mensaje. (Averigua como pasar de
kg a libras, Pista: 2.20462)*/

let pesoKg = prompt("Ingresa tu peso en kilogramos:");

// Convertir la entrada a un número
pesoKg = parseFloat(pesoKg);

// Convertir kilogramos a libras (1 kg = 2.20462 libras)
let pesoLb = pesoKg * 2.20462;

// Mostrar el resultado
console.log("Tu peso en libras es: " + pesoLb.toFixed(2) + " lb");