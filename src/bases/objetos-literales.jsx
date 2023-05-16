// Objetos literales

const persona = {
    nombre : "Daniel",
    apellido : "Vázquez",
    edad: 23,
    direccion: {
        calle: "De las zucenas",
        no : 1227,
        colonia: "Gregorio Ramo",
        municipio: "Puebla",
    },
};

console.log(persona.apellido);
console.log(persona.direccion.colonia);

/* Operador de propagacion o spread */
const persona2 = {...persona};

console.log(persona.edad);
persona2.edad = 45;
console.log(persona2.edad);

