const prompt = require('prompt-sync')();
/*• Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres.*/

let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");
let num3 = prompt("Ingresa el tercer número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

let mayor;

if (num1 >= num2 && num1 >= num3) {
  mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
  mayor = num2;
} else {
  mayor = num3;
}

console.log("El número mayor es: " + mayor);