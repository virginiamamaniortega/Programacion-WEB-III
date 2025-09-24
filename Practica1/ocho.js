// 8. Realizar un código para ejecutar una función callback después 2 segundos

const mensaje= (mens) => {
    console.log(mens);
}


function miFuncion(callback) {
    setTimeout(() => {
        callback("pasaron 2 segundos...");
    }, 2000);
}

miFuncion(mensaje);