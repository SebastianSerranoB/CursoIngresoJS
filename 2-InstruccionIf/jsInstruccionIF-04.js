/* Serrano Sebastian -Division Z
IF/ELSE EJ 4
*/
/*Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) . */
/*
function mostrar()
{
	let edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 12 && < 18)     //&& operador de interseccion, conecta 	
	{					      // conveniente evitar el <= porque le exigimos hacer dos procesos al procesador ,
							// la igualacion y el mayor menor ej(>=13 && <=17)
		alert("Es adolescente.");
	
	}

	alert("ok");

}
*/
function mostrar()
{
	let edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 12 && edad < 18)        // importante , cuando conecto , debo poner la variable las dos veces
	{
		alert("Es adolescente.");
	
	}

	alert("ok");

}