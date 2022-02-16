/* Sebastian Serrano -Division Z
Switch EJ 10 */

function mostrar()
{
	let estacion;
	let destino;
	let mensaje;
	
	destino = txtIdDestino.value;
	
	estacion = txtIdEstacion.value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "Se viaja.";
					
					break;
				
				default:
					mensaje = "No se viaja.";
					
					break;
			}
		break;
		
		case "Verano":
			switch(destino)
			{	
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja.";
				
				break;

				default:
					mensaje = "No se viaja.";
					break;
			}
		break;
		
		case "Otoño":
			mensaje = "Se viaja.";
			break;		

		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "No se viaja.";
				break;
			
			
				default:
					mensaje = "Se viaja.";
					break;
			}
		break

		default:
			mensaje = "Incorrecto , ingrese nuevamente:";
			break;
		
	}

	alert(mensaje);
	
}