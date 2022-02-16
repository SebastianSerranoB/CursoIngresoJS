/* Sebastian Serrano -Division Z
Switch EJ 4*/
function mostrar()
{
	let mesDelAño;

	mesDelAño = txtIdMes.value

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Tiene 28 dias.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias.");
			break;
		
		default:
			alert("Tiene 31 dias.");
			break;
	}

}