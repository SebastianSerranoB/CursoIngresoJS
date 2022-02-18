/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese un sexo: f ó m ");

	while(sexoIngresado != "m" && sexoIngresado != "f")
	{
		sexoIngresado = prompt("Incorecto , ingreselo nuevamente: ");
	}
	
	txtIdSexo.value = sexoIngresado;
}
// para mostrar el mensaje al usuario de una manera mas correcta
/*
	switch(sexoIngresado)
	{
		case "f":
			generoValidado = "Femenino";
	}