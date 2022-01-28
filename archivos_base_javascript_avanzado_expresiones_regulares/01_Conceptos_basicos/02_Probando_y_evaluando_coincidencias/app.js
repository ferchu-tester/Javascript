// esto quiere decir que si hay una coincidencia de la palabra en el texto porque en console da true 

//dos maneras de usar las expresiones regulares con regexp y con //

var expresion1 = new RegExp('abc');
console.log(expresion1.test('abcdef'));

var expresion2 = /Hola Mundo/;

console.log(expresion2.test('El primer programa es Hola Mundo'));