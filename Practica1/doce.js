// 12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
// reescribir mejor con async/await haciendo el código más limpio y mantenible.


function obtenerDato(callback) {
  setTimeout(() => callback("hola mundo"), 2000);
}


async function miFuncionAsync() {
 
  let promesa = new Promise((resolve) => obtenerDato(resolve));
  let resultado = await promesa;

  console.log(resultado);
}


miFuncionAsync();