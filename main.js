// Pre-Entrega 2: Lógica de Programación y Control de Flujo
// Simulador de compra de entradas

const PRECIO_ENTRADA = 5000;
const MAX_ENTRADAS = 5;

let total = 0;
let entradasCompradas = 0;
let continuar = true;

console.log("=== SIMULADOR DE COMPRA DE ENTRADAS ===");
console.log(`Precio por entrada: $${PRECIO_ENTRADA}`);

// BUCLE: permite realizar varias compras hasta elegir salir
while (continuar) {
  const cantidadIngresada = prompt(
    `¿Cuántas entradas querés comprar? (1 a ${MAX_ENTRADAS})\n` +
    "Escribí ESC para terminar."
  );

  // Permite detener el simulador
  if (cantidadIngresada === null || cantidadIngresada.toUpperCase() === "ESC") {
    continuar = false;
    console.log("Simulador finalizado por el usuario.");
  } else {
    const cantidad = Number(cantidadIngresada);

    // CONDICIONAL dentro del BUCLE
    if (cantidad >= 1 && cantidad <= MAX_ENTRADAS) {
      const subtotal = cantidad * PRECIO_ENTRADA;
      total += subtotal;
      entradasCompradas += cantidad;

      console.log(`Compra realizada: ${cantidad} entrada(s).`);
      console.log(`Subtotal: $${subtotal}`);
      console.log(`Total acumulado: $${total}`);

      // Decisión adicional según la cantidad comprada
      if (cantidad >= 4) {
        console.log("¡Compra grande! Estás llevando 4 o más entradas.");
      } else if (cantidad >= 2) {
        console.log("Compra de varias entradas.");
      } else {
        console.log("Compra de una entrada.");
      }

      const respuesta = prompt("¿Querés realizar otra compra? (si/no)");

      if (respuesta !== null && respuesta.toLowerCase() === "no") {
        continuar = false;
      }
    } else {
      console.log(`Cantidad inválida. Elegí entre 1 y ${MAX_ENTRADAS} entradas.`);
      alert(`Cantidad inválida. Debés ingresar entre 1 y ${MAX_ENTRADAS}.`);
    }
  }
}

// Resultado final coherente al terminar el bucle
if (entradasCompradas > 0) {
  console.log("=== RESUMEN FINAL ===");
  console.log(`Entradas compradas: ${entradasCompradas}`);
  console.log(`Total a pagar: $${total}`);

  if (total >= 20000) {
    console.log("Tu compra supera los $20.000.");
  } else if (total >= 10000) {
    console.log("Tu compra supera los $10.000.");
  } else {
    console.log("Tu compra es menor a $10.000.");
  }
} else {
  console.log("No se realizaron compras.");
}
