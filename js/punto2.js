const nota1 = parseInt(prompt("Por favor ingrese la primera nota"));
const nota2 = parseInt(prompt("Por favor ingrese la segunda nota"));
const nota3 = parseInt(prompt("Por favor ingrese la tercer nota"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 7) {
  alert(`FELICIDADES, usted a promocionado la materia`);
} else {
  alert(`Que lastima, usted NO a promocionado la materia`);
}
