// 14. Proporcione un ejemplo para convertir una promesa en un callback.

function miPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Convertimos una promesa en un callback!"), 2000);
  });
}


function promesaACallback(promise, callback) {
  promise
    .then((resultado) => callback(null, resultado)) 
    .catch((error) => callback(error));          
}


promesaACallback(miPromesa(), (error, resultado) => {
  if (error) console.error("Error:", error);
  else console.log(resultado);
});

