// Desestructuración

const vehiculo = {
    anhio : 2023,
    id: 123,
    marca: 'Nissan',
    modelo : 'Sentra',
};

const modelo = 'March';

console.log(vehiculo.marca);

const { modelo:modelo2, id, anhio } = vehiculo;
console.log(modelo, id, anhio, modelo2);

const getModelo = ( { modelo } ) => {
    // return vehiculo.modelo;
    //const {modelo} = v;
    return modelo;
}

console.log(getModelo(vehiculo));

const user = {
    nickname : "Admin",
    name : "Jahir",
    pass : 123456,
};

const _useContext = ( { nickname, name, pass='9999'} ) => {
    return {
        nombre: name,
        usuario: nickname,
        contrasena: pass,
        llaves : {
            publica: '23$%#TERG!"#$"',
            privada: '1233456',
        }
    } 
};

console.log(_useContext(user));

const resul = _useContext(user);

const {llaves:{ publica, privada } }=resul;
// const {publica, privada}=llaves;

console.log(publica);
console.log(privada);