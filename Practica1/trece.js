// 13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
// reescribir mejor con async/await haciendo el código más limpio y mantenible.


function procesarPedido(paso, tiempo) {
 
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${paso} completado`), tiempo);
  });
}


async function ejecutarPedido() {
  let r1 = await procesarPedido("Tomar pedido", 2000);
  console.log(r1); 

  
  let r2 = await procesarPedido("Preparar pedido", 2000);
  console.log(r2);

  
  let r3 = await procesarPedido("Entregar pedido", 2000);
  console.log(r3);

  console.log("Pedido finalizado");
}

ejecutarPedido();

