"use strict"

//********************************0
//*** Ciclo DO..WHILE | Ciclo Indefinido
// Iteración indeterminada o desconocida variante primero hace luego pregunta


var productos = 5; 


do { 
   	console.log( 'Producto vendido');
   	productos--;
   debugger;
} 
while(productos>=1)

var y = 5;
var texto = "";

do{
    for (let x = 0; x < y; x++) {
        texto = texto + "*";
    }
    console.log(texto)
    texto = "";
    y--;
} 
while (y>0);