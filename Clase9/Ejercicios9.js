const prompt = require('prompt-sync')();
/*• Ejercicio 9:
Define una constante PI con el valor de pi (3.14159). Pide al usuario
que ingrese el radio de un círculo y calcula su área y perímetro
utilizando la constante PI*/

const PI = 3.14159;

let radio = prompt("Ingresa el radio del círculo:");

// Convertir la entrada a un número
radio = parseFloat(radio);

// Calcular el área del círculo
let area = PI * radio * radio;

// Calcular el perímetro del círculo
let perimetro = 2 * PI * radio;

// Mostrar los resultados
console.log("El área del círculo es: " + area);
console.log("El perímetro del círculo es: " + perimetro);
