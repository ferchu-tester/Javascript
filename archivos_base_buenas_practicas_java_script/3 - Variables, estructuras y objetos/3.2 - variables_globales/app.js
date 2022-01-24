var mensaje = "mensaje local";
resultado += 2;
//agrega un objeto para reducir el riesgo de variables iguales 
var datos={};
datos.mensaje = "mensaje local del objeto";
datos.resultado = 120;

function saludar(){
	console.log(mensaje);
	console.log(resultado);
	
	console.log(datos.mensaje );
    console.log(datos.resultado);
}

saludar()