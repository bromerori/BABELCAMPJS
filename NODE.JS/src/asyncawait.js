'use strict';

// Funcion que devuelve una promesa
const sleep = ms => new Promise(resolve => setTimeout(() => {
    resolve('Terminado');
}, ms));

async function main() {
    for(let i=0; i < 5; i++) {
        const resultado = await sleep(2000);
        console.log('Terminado', resultado);
        throw new Error('fatal');
    } 
}

main().catch(err => {
    console.log('Hubo un error', err);
});