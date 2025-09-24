//2. Crear una función que invierta el orden de las palabras en una frase.
// let cad = miFuncion(“abcd”)
//console.log(obj)  dcba

const miFuncion = (palabra) => {
    let resultado = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        resultado += palabra[i];
    }
    return resultado;
};

console.log();


let obj = miFuncion("abcd");
console.log(obj); 