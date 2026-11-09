function sumar() {
  // 1. Buscamos todos los inputs
  const inputs = document.querySelectorAll('input');
  
  // 2. Obtenemos los valores y los convertimos a números
  let num1 = parseFloat(inputs[0].value);
  let num2 = parseFloat(inputs[1].value);
  
  // 3. Hacemos la operación y la ponemos en el tercer input
  inputs[2].value = num1 + num2;
}

function restar() {
  const inputs = document.querySelectorAll('input');
  let num1 = parseFloat(inputs[0].value);
  let num2 = parseFloat(inputs[1].value);
  inputs[2].value = num1 - num2;
}

function multiplicar() {
  const inputs = document.querySelectorAll('input');
  let num1 = parseFloat(inputs[0].value);
  let num2 = parseFloat(inputs[1].value);
  inputs[2].value = num1 * num2;
}

function dividir() {
  const inputs = document.querySelectorAll('input');
  let num1 = parseFloat(inputs[0].value);
  let num2 = parseFloat(inputs[1].value);
  
  // Validación de división por cero
  if (num2 === 0) {
    inputs[2].value = "No se puede dividir por 0";
  } else {
    inputs[2].value = num1 / num2;
  }
}