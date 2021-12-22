const numero = parseInt(prompt("Ingrese un número, Por favor"));

if (numero > 0) {
  alert(`El número: ${numero} es un valor POSITIVO`);
} else if (numero < 0) {
  alert(`El número: ${numero} es un valor NEGATIVO`);
} else {
  alert(`El número: ${numero} es un valor NULO`);
}
