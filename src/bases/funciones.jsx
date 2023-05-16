// Funciones en JS

function mensaje(cadena) {
    return cadena;
}

//console.log(mensaje('Hola mundo'));

//mensaje = 50;

console.log(mensaje);

const mensaje1 = function(cadena){
    return cadena;
};

// mensaje1 = 100;

// Funcion flecha

const mensaje2 = (cadena) => {
    return cadena;
};

console.log(mensaje, mensaje1, mensaje2);

const mensaje3 = () => ({
    id: 1,
    nick: 'admin',
});

console.log(mensaje3());