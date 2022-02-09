/* Serrano Sebastian -Division Z
Ejercicios IF/ELSE 5 
*/

function mostrar()
{
	let edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13 || edad > 17)            // "||" no exige que se cumplan las dos,con una es suficiente.
	{
		alert("no es adolescente.");

	}
	alert("es un adolescente");
}