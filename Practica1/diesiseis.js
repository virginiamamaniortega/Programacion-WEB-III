// 16. Proporcione un ejemplo para migrar una función con promesas a async/await.

function operacionPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("migracion exitosa!"), 2000);
  });
}


async function ejecutarAsync() {
  
  let resultado = await operacionPromesa();
  console.log(resultado);
}

ejecutarAsync();
