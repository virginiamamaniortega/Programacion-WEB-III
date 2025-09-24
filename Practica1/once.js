// 11. Proporcione un ejemplo concreto de encadenamiento de promesas.

function sumaPromesa(valor) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor + 3), 2000);
  });
}

sumaPromesa(1)
  .then((r1) => {
    console.log(r1);      
    return sumaPromesa(r1);
  })
  .then((r2) => {
    console.log(r2);    
    return sumaPromesa(r2); 
  })
  .then((r3) => console.log(r3));