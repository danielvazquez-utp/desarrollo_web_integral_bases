// Desestructuracion de arreglos

const personajes = ['Mazinger', 'Ultraman', 'Goku', 'Pedro picapiedra'];

console.log(personajes[0]);

const [ ,,, p2 ] = personajes;

console.log(p2);

const arreglo = () => {
    return ['ASBCD', 1258];
}

const [ letras, numeros] = arreglo();
console.log(letras, numeros);

const _useState = ( valor ) => {
    return [ valor, () => 'Esta es una función' ];
}

console.log(_useState('Daniel'));

// Ejercio para medio punto
// Desestrutura el arreglo que proviene de invicar a la función _useState()
// 1. el valor desestructuralo como "nombre"
// 2. la función desestructurala como "getMensaje"

const [nombre, getMensaje] = _useState('Daniel');

console.log(nombre, getMensaje());