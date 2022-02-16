/* Sebastian Serrano -Division Z
Switch EJ 1 */

function mostrar()
{
	let mesDelAño 
	mesDelAño = txtIdMes.value;

	switch(mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
		
		default:
			alert("ingrese otro mes");
			break;

	}

}