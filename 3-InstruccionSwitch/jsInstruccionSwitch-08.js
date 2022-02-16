/* Sebastian Serrano -Division Z
Switch EJ 8  */

function mostrar()
{
	let destino;
	destino = txtIdDestino.value;
	

	switch(destino)
	{
		case "Bariloche":
			alert("y .. llevate un abrigo");
			break;
		case "Cataratas":
			alert("Un calor infernal")
			break;
		case "Mar del plata":
			alert("Hace calor, llevate protector solar");
			break;
		case "Ushuaia":
			alert("Ice cold");
			break;

		default:
			alert("Ingrese otro destino:");
			break;
	}
	

}