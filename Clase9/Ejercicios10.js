const prompt = require('prompt-sync')();
/*• Ejercicio 10:
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
semana correspondiente. Si el número no está dentro de ese rango,
muestra un mensaje de error.*/

let numeroDia = prompt("Ingresa un número del 1 al 7:");

// Convertir la entrada a un número entero
numeroDia = parseInt(numeroDia);

let diaSemana;

switch (numeroDia) {
  case 1:
    diaSemana = "Domingo";
    break;
  case 2:
    diaSemana = "Lunes";
    break;
  case 3:
    diaSemana = "Martes";
    break;
  case 4:
    diaSemana = "Miércoles";
    break;
  case 5:
    diaSemana = "Jueves";
    break;
  case 6:
    diaSemana = "Viernes";
    break;
  case 7:
    diaSemana = "Sábado";
    break;
  default:
    diaSemana = "Número inválido. Ingresa un número del 1 al 7.";
}

console.log(diaSemana);