/* Sebastian Serrano - Division Z
Ejercicio E/S 8
*/

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resto;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = parseInt(dividendo);

	divisor = document.getElementById("txtIdNumeroDivisor").value;
	divisor = parseint(divisor);

	resto = dividendo % divisor ;
	
	
	
	alert(resto);
}
// para sacar el resto%