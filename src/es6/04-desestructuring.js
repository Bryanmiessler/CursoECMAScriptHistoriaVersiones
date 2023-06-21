const usuario = { nombre: "Bryan", edad: 27, plataforma: "Platzi" }

const { plataforma, edaad, nombre } = usuario

console.log(nombre)  // 'Bryan' 
console.log(edad)  // 27
console.log(plataforma)  // 'Platzi'

// Cambiar el nombre de las variables con desestructuración

const usuario1 = { nombre: "Bryann", edad: 23, plataforma: "Platzi" }

const { nombre: name, edad: age, plataforma: platform } = usuario1

console.log(name)  // 'Bryann' 
console.log(age)  // 23
console.log(platform)  // 'Platzi'

// Desestructuración en parámetros de una función

const usuario3 = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario3) // 'Andres', 23, 'Platzi'

// Desestructuración de arrays

const array = [ 1, 2, 3, 4, 5 ]

// Desestructuración
const [uno, dos, tres ] = array

console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3

// Desestructuración para valores retornados de una función

function useState(value){
  return [value, updateValue()]
}

//Sin desestructuración 
const estado = useState(3)
const valor = estado[0]
const actualizador = estado[1]

//Con desestructuración 
const [valor, actualizador] = useState(3)

// acceder indice por medio de desestructuracion array

const array2 = [ 1, 2, 3, 4, 5 ]

const {4: cinco} = array2

console.log(cinco) // 5