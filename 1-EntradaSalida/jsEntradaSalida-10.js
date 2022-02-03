/* Sebastian Serrano - Division Z
Ejercicio E/S 10  
*/

/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;
	

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = importe * 25 / 100;
	resultado = importe - descuento;

	 document.getElementById("txtIdResultado").value = resultado; // aca estamos operando en el cuadro de resultado

} 

	//alert(total);
	//txtIdResultado
	/* el = resultado debe ir del lado derecho si no no funciona, 
//el = es un operador de asignacion , es importante
}
