// Importación de recursos

import companies, {heroes } from "../data/heroes";

// console.log(heroes, companies);

export const getHeroeById = ( id ) => {
    return heroes.find( heroe => heroe.id == id );
}


export const getCompanyById = ( id ) => {
    return companies.find( company => company.id == id );
}

// console.log( getCompanyById(2) );
