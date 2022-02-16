/* Sebastian Serrano -Division Z
Switch EJ 5*/
function mostrar()
{
	let horarioActual;
	horarioActual = txtIdHora.value;
	horarioActual = parseInt(horarioActual);
	
	switch(horarioActual)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert( "Es de mañana.");
			break;
		
		default:
			alert("Se te fue la mañana dormilón");
			break;
	}


}