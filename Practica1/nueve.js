// 9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.

function miFuncion() {
    return new Promise((mensaje) => {
        setTimeout(() => {
            mensaje("éxito después de 3 segundos");
        }, 3000);
    });
}


miFuncion().then(console.log);
