//Serrano Sebastian -Division Z
// ejercicio IF 1

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;  //la edad ingresa por getelement
	edad = parseInt(edad);

	
	if(edad == 15)      // no va ";" , estariamos terminando ahi el if, en este caso daria true , pero el interprete 
						// no lee los corchetes como ligados al if.
	{ 
		alert("niña bonita");
	}
	
	alert("Termino el programa.");
}