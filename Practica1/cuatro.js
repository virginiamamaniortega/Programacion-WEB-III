// 4. Crear una función que reciba un arreglo de números y 
// devuelva el número mayor y el menor, en un objeto.
// let obj = miFuncion([3,1,5,4,2])
// console.log(obj) // { mayor: 5, menor: 1 }


function miFuncion(array) {
  
  let mayor = array[0];
  let menor = array[0];

  
  for (let i = 1; i < array.length; i++) {
    let num = array[i];

    if (num > mayor) {
      mayor = num;
    }

    if (num < menor) {
      menor = num; 
    }
  }

  return { mayor, menor }; 
}


let obj = miFuncion([3, 1, 5, 4, 2]);
console.log(obj);

