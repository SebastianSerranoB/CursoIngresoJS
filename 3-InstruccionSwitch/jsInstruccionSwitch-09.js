/* Sebastian Serrano -Division Z
Switch EJ 9 */
function mostrar()
{
	let estacion;
	let destino;
	let tarifaBase;
	let porcentaje;
	let cuenta;
	let tarifaFinal;
	let mensaje;

	tarifaBase = 15000;

	estacion = txtIdEstacion.value;
	
	destino = txtIdDestino.value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 0.2;
					cuenta = tarifaBase * porcentaje;
					tarifaFinal = tarifaBase + cuenta;
					
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 0.1;
					cuenta = tarifaBase * porcentaje;
					tarifaFinal = tarifaBase - cuenta;
					
					break;
				case "Mar del plata":
					porcentaje = 0.2;
					cuenta = tarifaBase * porcentaje;
					tarifaFinal = tarifaBase - cuenta;

					break;
				
				default:
					break;
			}
			
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 0.2;
					cuenta = tarifaBase * porcentaje;
					tarifaFinal = tarifaBase - cuenta;
					
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 0.1;
					cuenta = tarifaBase * porcentaje;
					tarifaFinal = tarifaBase + cuenta;

					break;
				case "Mar del plata":
					porcentaje = 0.2;
					cuenta = tarifaBase * porcentaje;
					tarifaFinal = tarifaBase + cuenta;

					break;
				
				default:
					break;
				
			}

			break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{	
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					porcentaje = 0.1;
					cuenta = tarifaBase * porcentaje;
					tarifaFinal = tarifaBase + cuenta;

				break;
				default:
					tarifaFinal = tarifaBase;

				break;
			}


			break;
		
		default:
			break;
	}
	
	mensaje = " La tarifa es de " + tarifaFinal;
	alert(mensaje);

}