/*
Serrano Sebastian
Division Z
Ej 8 while

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	let numeroIngresado;
	let acumuladorPositivo;
	let acumuladorNegativo;
	let respuesta;

	
	acumuladorPositivo = 0;
	acumuladorNegativo = 1;
	respuesta = "si";

	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero entero: ");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0)
		{
			acumuladorNegativo = acumuladorNegativo * numeroIngresado;
		}
		else
		{
			acumuladorPositivo = acumuladorPositivo + numeroIngresado;
		}
				
		respuesta = prompt("¿Desea ingresar un nuevo numero: si o no?").toLowerCase(respuesta);

	}

	document.getElementById("txtIdSuma").value = acumuladorPositivo;
	document.getElementById("txtIdProducto").value = acumuladorNegativo;

}