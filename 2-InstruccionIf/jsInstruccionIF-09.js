/* Serrano Sebastian -Division Z
IF/ELSE EJ 9
*/
/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	let numero;
	numero = Math.floor(Math.random() * 11);    //math.floor genera un entero random
												//math.random es una ecuacion 
												//redondea para abajo por eso va 11
												//maximo + 1 para incluir el 10
											
	
	alert(numero);
}
// forma "correcta";
// var minimo ;
// var maximo;
// numero = Math.floor(Math.random() + (maximo + 1 - minimo)) + minimo ;
// no es 100% preciso el round al usar el math floor perdemos decimales