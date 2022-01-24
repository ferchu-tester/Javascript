//para medir el rendimiento time-time end varia dependiendo del brouser
//se prueba en varios brouser para hacer un promedio y tener un valor real
console.time('revisión')

var animales = ["perro", "gato", "pez"];
var l = animales.length;

for (var i = 0; i < 10000; i++) {
    animales[i] = i;
}

console.timeEnd('revisión')