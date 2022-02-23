/*
Serrano Sebastian
Division Z
While ej 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

/*function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
} */
/*
function mostrar()
{
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let banderaNumeros;
	let respuesta;

	respuesta = "si";
	banderaNumeros = 0;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero entero: ");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(banderaNumeros == 0)
		{
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;

			banderaNumeros = 1;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}

		respuesta = prompt("¿Desea ingresar un nuevo numero: si o no?").toLowerCase();
	}


} */
function mostrar()
{
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let banderaNumeros;
	let respuesta;

	respuesta = "si";
	banderaNumeros = 0;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero entero: ");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(banderaNumeros == 0 || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if(banderaNumeros == 0 || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;

			banderaNumeros = 1;
		}

		respuesta = prompt("¿Desea ingresar un nuevo numero: si o no?").toLowerCase();
	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}