// 1. Crear una función que cuente cuántas veces aparece
// cada vocal en un texto y devuelva el resultado en un objeto.
// let obj = miFuncion(“euforia”)
// console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 }

function miFuncion(palabra) {
    const contador = { a:0, e:0, i:0, o:0, u:0 }; 
    const vocales = ['a','e','i','o','u'];       


    for (let i = 0; i < palabra.length; i++) {  
        let letra = palabra[i];                

        
        if (vocales.includes(letra)) {          
            contador[letra]++;                  
        }
    }

    return contador;                             
}

console.log();

let obj = miFuncion("euforia");
console.log(obj);
