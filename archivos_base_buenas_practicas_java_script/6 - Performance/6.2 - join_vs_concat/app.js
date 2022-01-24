//tener cuidado la conquetenacion con join cadena de texto separada por ,
// concat es un arreglo (objeto)
//join es mas eficaz si solo buscas un texto
var animales = ["perro", "gato", "pez"];

var listaAnimales = animales.join(", ");

var nuevaLista = animales.concat(",");

console.log(listaAnimales);
console.log(typeof listaAnimales);

console.log(nuevaLista);
console.log(typeof nuevaLista);
