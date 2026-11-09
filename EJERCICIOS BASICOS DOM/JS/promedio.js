function calcularPromedio() {
  
  const inputs = document.querySelectorAll('input');
  
  
  let nota1 = parseFloat(inputs[0].value);
  let nota2 = parseFloat(inputs[1].value);
  let nota3 = parseFloat(inputs[2].value);
  
 
  let promedio = (nota1 + nota2 + nota3) / 3;
  
  inputs[3].value = promedio.toFixed(2); 
}