/* Serrano Sebastian -Division Z
IF/ELSE EJ 6 
*/
/* Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Es mayor de edad.");
	}
		else if(edad > 12 && edad <18)
		{	
			alert("Es adolescente");
		}
			else
			{
				alert("es menor de edad");
			}

}