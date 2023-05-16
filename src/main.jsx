// Async - Await

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


const getHeroeByIdAsyc2 = async ( id ) => {
    try {
        const heroe = await getHeroeByIdAsyc( id );
        console.log(heroe);
    } catch (error) {
        console.log(error);
    }
}

getHeroeByIdAsyc2(5);