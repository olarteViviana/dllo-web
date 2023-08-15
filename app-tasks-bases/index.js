// Ejemplo de javascript

// Comentario de linea

/**
 * Comentario de bloque
 */

console.log("Hola Mundo")
console.log("------");

const edad = false;
let nombre = "Juan"
let apellido = "Gonzalez"
const esEstudiante = false
const altura = 1.70
const semestres=[] // List -> Array
// Diccionarios -> objeto -> JSON (Javascript Object Notation)
const materiaPreferida = { nombre: "Calculo", id:0 }

//null - undefined
const universidad = null
const carrera = undefined;

console.log("Tipo de dato de nombre es:" + typeof nombre);
console.log("Tipo de dato de edad es:" + typeof edad);

console.log("----- Converisión de string a number -----")
const precioMatricula = "5000000.5"
console.log("Entero" + parseInt(precioMatricula))
console.log("Flotante" + parseFloat(precioMatricula))

console.log("----- == -----")
console.log("Doble igual: " + "45" == 45); // no -> si // valor
console.log("Triple igual: " + "45" === 45); // no -> no // valor y tipo

console.log("---- Concatenación ----");
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);

console.log("---- operador ternario ( exp ? verdadero : falso ) ----");
console.log(edad > 18 ? "Es mayor de edad" : "Es menor de edad");
let condition = edad > 18
if (condition) { }
if (condition) { } else { }

console.log("---- Condicionales ----");
const dia = "LUNES"
switch (dia) {
    case "LUNES":
        console.log("LUNES");
        break;
    case "MARTES":
        console.log("MARTES");
        break;
    default:
        console.log("NO ES VALIDO");
        break;
}

console.log("---- Ciclos ----");
for (let index = 0; index < 10; index++) {
}
// while (condition){

// }
for (const item of [1, 2, 3]) {
    console.log(item);
}
for (const key in materiaPreferida) {
    console.log(key);
}

[1, 2, 3].forEach(element => {
    console.log(element);
});

console.log('-- FUNCIONES --')
function imprimirNombre() {
    console.log(nombre);
}
// Llamar la función imprimirNombre
imprimirNombre(nombre);

const imprimirNombreApellido = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`);
}

//Llamar imprimirNombreApellido
imprimirNombreApellido(nombre, apellido);

const crearNombreCompleto = (nombre, apellido) => {
    console.log("-- GLOBAL SCOPE FAKE --");
    console.log(nombre, apellido);
    let name = nombre
    if (nombre.lenght > 3) {
        let name = nombre[0] + " " + apellido;
        console.log("94 " + nombre);
    }
    console.log("92 " + name);
}

const botonesHtml = document.getElementsByTagName('button');
console.log(botonesHtml);
crearNombreCompleto(nombre, apellido);

//Array
let estudiantes = []

// estudiantes.push(5)
// estudiantes.push(null)
// estudiantes.push({})
// estudiantes.push(()=>{ console.log(); })
estudiantes.push({ "nombre": "Juan", id:123 })
estudiantes.push({ "nombre": "Maria", id:123 })
estudiantes.push({ "nombre": "Maria", id:12344 })


estudiantes.forEach((x) => console.log(x.nombre))
const marias = estudiantes.filter(x => x.nombre == "Maria")
marias[0].id

const maria = estudiantes.find(x => x.nombre == "Maria")
console.log(estudiantes);

estudiantes = estudiantes.map(x=> {return {...x, edad:null}})
console.log(estudiantes);