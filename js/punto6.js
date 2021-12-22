const num = parseInt(prompt("Ingrese un número, por favor"));

if (num < 10) {
  alert(`El número: ${num} tiene 1 digito`);
} else if (num < 100) {
  alert(`El número: ${num} tiene 2 digitos`);
} else if (num < 1000) {
  alert(`El número: ${num} tiene 3 digitos`);
} else {
  alert(`ERROR, Ingrese otro número`);
}
