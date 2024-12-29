const prompt = require('prompt-sync')();
/*• Ejercicio 8:
Pide al usuario que ingrese las longitudes de los tres lados de un
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
escaleno. (Investiga sobre los triángulos para determinar la formula)*/

let lado1 = prompt("Ingresa la longitud del primer lado:");
let lado2 = prompt("Ingresa la longitud del segundo lado:");
let lado3 = prompt("Ingresa la longitud del tercer lado:");

lado1 = parseFloat(lado1);
lado2 = parseFloat(lado2);
lado3 = parseFloat(lado3);

if (lado1 === lado2 && lado2 === lado3) {
  console.log("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  console.log("El triángulo es isósceles.");
} else {
  console.log("El triángulo es escaleno.");
}