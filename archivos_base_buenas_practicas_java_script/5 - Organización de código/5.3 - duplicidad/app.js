var cuenta = 2 + 3;

var cuentaNueva = 20 + 45;

var totalFinal = cuenta + cuentaNueva;

console.log(totalFinal);
//usar una funcion para evitar realizar acciones repetitivas
function suma(datoA, datoB){
	var resultado = datoA + datoB;
	return resultado;
}

suma(2,3);

var cuentaFinal = suma(suma(2, 3), suma(20, 45));

//suma(5, 65)
console.log(cuentaFinal)
