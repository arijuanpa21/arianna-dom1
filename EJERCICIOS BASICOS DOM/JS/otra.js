function calcularPresupuesto() {
  
  const inputs = document.querySelectorAll('input');
  
  let invitados = parseFloat(inputs[0].value) || 0;
  let costoComida = parseFloat(inputs[1].value) || 0;
  let costoBebida = parseFloat(inputs[2].value) || 0;
  let decoracion = parseFloat(inputs[3].value) || 0;
  let musica = parseFloat(inputs[4].value) || 0;
  let porcentajePropina = parseFloat(inputs[5].value) || 0;
  
  
  let comidaTotal = invitados * costoComida;
  let bebidaTotal = invitados * costoBebida;
  
  let subtotal = comidaTotal + bebidaTotal + decoracion + musica;
  let propina = subtotal * (porcentajePropina / 100);
  let totalGeneral = subtotal + propina;
  
  
  let costoPorInvitado = invitados > 0 ? totalGeneral / invitados : 0;
  
  
  const celdas = document.querySelectorAll('td');
  
 
  celdas[1].textContent = "$" + comidaTotal.toFixed(2);
  celdas[3].textContent = "$" + bebidaTotal.toFixed(2);
  celdas[5].textContent = "$" + decoracion.toFixed(2);
  celdas[7].textContent = "$" + musica.toFixed(2);
  celdas[9].textContent = "$" + subtotal.toFixed(2);
  celdas[11].textContent = "$" + propina.toFixed(2);
  celdas[13].textContent = "$" + totalGeneral.toFixed(2);
  celdas[15].textContent = "$" + costoPorInvitado.toFixed(2);
}