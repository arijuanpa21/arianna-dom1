function calcularVenta() {
  const inputs = document.querySelectorAll('input');
  
  
  let cantidad = parseFloat(inputs[1].value);
  let precioUnitario = parseFloat(inputs[2].value);
  
  
  let subtotal = cantidad * precioUnitario;
  
 
  let iva = subtotal * 0.19;
  
  
  let descuento = subtotal > 50 ? subtotal * 0.10 : 0; 
  
  
  let totalPagar = (subtotal + iva) - descuento;
  
  
  inputs[3].value = subtotal.toFixed(2);
  inputs[4].value = iva.toFixed(2);
  inputs[5].value = descuento.toFixed(2);
  inputs[6].value = totalPagar.toFixed(2);
}