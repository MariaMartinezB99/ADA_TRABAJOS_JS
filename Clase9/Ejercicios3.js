const prompt = require('prompt-sync')();
/*• Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al
usuario que ingrese dos valores booleanos (true o false) y muestra el
resultado de diversas combinaciones lógicas.*/

let condicion1 = prompt("Ingresa el primer valor booleano (true o false):");
let condicion2 = prompt("Ingresa el segundo valor booleano (true o false):");

// Convertir las entradas a valores booleanos
condicion1 = condicion1 === "true";
condicion2 = condicion2 === "true";

// Calcular el resultado de varias combinaciones lógicas
let resultadoAND = condicion1 && condicion2;
let resultadoOR = condicion1 || condicion2;
let resultadoXOR = condicion1 !== condicion2;

// Mostrar los resultados
console.log("AND:", resultadoAND);
console.log("OR:", resultadoOR);
console.log("XOR:", resultadoXOR);