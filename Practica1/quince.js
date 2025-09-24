// 15. Proporcione un ejemplo para convertir un callback en una promesa.

function operacionCallback(cb) {
  setTimeout(() => {
    cb(null, "Convertimos callback en una promesa!");
  }, 2000);
}


function callbackAPromesa() {
  return new Promise((resolve, reject) => {
    operacionCallback((error, resultado) => {
      if (error) reject(error);  
      else resolve(resultado);  
    });
  });
}

callbackAPromesa().then((msg) => console.log(msg));
