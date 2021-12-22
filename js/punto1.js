const num1 = parseInt(prompt("Ingrese un primer numero, Por favor"));
const num2 = parseInt(prompt("Ingrese un segundo numero, Por favor"));

if (num1 > num2) {
  alert(
    `El resultado de la suma es:  ${num1 + num2} y el de la diferencia es: ${
      num1 - num2
    }`
  );
} else if (num1 < num2) {
  alert(
    `El resultado del producto es:  ${num1 * num2} y el de la division es: ${
      num1 / num2
    }`
  );
} else {
  alert(`No se a podido realizar esta operacion`);
}
