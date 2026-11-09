function calcularSalario() {
  const inputs = document.querySelectorAll('input');
  
  let horas = parseFloat(inputs[0].value);
  let valorHora = parseFloat(inputs[1].value);
  
  let salario = horas * valorHora;
  
  inputs[2].value = salario;
}