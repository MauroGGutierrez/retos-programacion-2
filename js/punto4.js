const num1 = parseInt(prompt("Por favor ingrese el primer numero"));
const num2 = parseInt(prompt("Por favor ingrese el segundo numero"));
const num3 = parseInt(prompt("Por favor ingrese el tercer numero"));

if (num1 > num2) {
  if (num1 > num3) {
    alert(`El número: ${num1}, es mayor que ${num2} y ${num3}`);
  } else {
    alert(`El número: ${num3}, es mayor que ${num1} y ${num2}`);
  }
} else {
  if (num2 > num3) {
    alert(`El número: ${num2}, es mayor que ${num1} y ${num3}`);
  } else {
    alert(`El número: ${num3}, es mayor que ${num1} y ${num2}`);
  }
}
