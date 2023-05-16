// Promesas en Javascript
// Las promesas son asincronas por definición

import { getCompanyById, getHeroeById } from "./bases/importacion-exportcion";

const getHeroeByIdAsyc = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            //console.log('Han pasado 2 segundos');
            const heroe = getHeroeById( id );
            // console.log(heroe);

            if (heroe)
                // Cambia estado a fulfill
                resolve( heroe );
            else
                reject('No se encuentra el heroe');

        }, 2000 );
    });
}


// En caso de que la respuesta es exitosa
getHeroeByIdAsyc(2)
.then( heroe => { console.log(heroe) })
.catch( error => console.log(error) )