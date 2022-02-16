/* Sebastian Serrano -Division Z
Switch EJ 7 */


function mostrar()
{
	let destino;

	destino = txtIdDestino.value;

	switch(destino)
	{
		case "Bariloche":
			alert("West side");
			break;
		case "Cataratas":
			alert("North side")
			break;
		case "Mar del plata":
			alert("East side");
			break;
		case "Ushuaia":
			alert("South side");
			break;

		default:
			alert("Ingrese otro destino:");
			break;
	}	

}