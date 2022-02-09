/* Serrano Sebastian -Division Z
ejercicios if/else 3
*/
/*
function mostrar()    // SIN ELSE
{
	let edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18)						// ¿tal vez lo correcto sea utilizar else?
	{
		alert("Es mayor de edad.");

	}
	if(edad < 18)
	{
		alert("es menor de edad.");

	}

	alert("ok");

}
*/
function mostrar()    //ahora con ELSE
{
	let edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18)						
	{
		alert("Es mayor de edad.");

	}
	else                                        //no puede declararse un else sin antes un if
												//va dentro de un if , ojo a los corchetes
	{ 
		alert("es menor de edad");

	}

}