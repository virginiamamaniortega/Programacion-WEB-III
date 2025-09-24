// 3. Crear una función que reciba un arreglo de números y devuelva 
// en un objeto a los pares e impares:
// let obj = miFuncion([1,2,3,4,5])
// console.log(obj)  { pares: [2,4], impares: [1,3,5]}


function miFuncion(numeros) {
  
  let obj = { pares: [], impares: [] };

  for (let i = 0; i < numeros.length; i++) {
    let x = numeros[i];

    if (x % 2 === 0) {
      obj.pares[obj.pares.length] = x; 
    } else {
      obj.impares[obj.impares.length] = x; 
    }
  }

  return obj; 
}


let obj = miFuncion([1, 2, 3, 4, 5]);
console.log(obj);

