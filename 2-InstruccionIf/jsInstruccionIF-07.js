/* Serrano Sebastian -Division Z
IF/ELSE EJ 7
*/
/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */



function mostrar()
{
	let edad;
	let estadoCivil;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estadoCivil = estadoCivil.value;
	estadoCivil = parseStr(estadoCivil);
	
	
	if(edad <18 && estadoCivil!= "Soltero")
	{
		alert("Es muy pequeñ@ para no ser solter@");
	}
	


}