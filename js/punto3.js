const num = parseInt(prompt("Ingrese un número, por favor"));

if (num >= 10) {
  if (num <= 100) {
    alert(`El numero: ${num} tiene 2 digitos`);
  } else {
    alert(`A ocurrido un error, Reingrese un numero`);
  }
} else {
  alert(`El numero: ${num} tiene 1 digito`);
}
