function mostrar()
{
	let numeroIngresado;
	let suma;
	let promedio;
	let contador;
	let pregunta;
	

	contador = 0;
	suma = 0;
	pregunta = "si";


	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese 5 numeros: ");
		numeroIngresado = parseInt(numeroIngresado);
		
		contador = contador + 1;
		suma = suma + numeroIngresado

		pregunta = prompt("¿Desea ingresar otro numero? si o no?");
		if(pregunta == "si")
		{
			numeroIngresado = prompt("Ingrese 5 numeros: ");
			numeroIngresado = parseInt(numeroIngresado);

			contador = contador + 1;
			suma = suma + numeroIngresado
			
			pregunta = prompt("¿Desea ingresar otro numero? si o no?");
		}
		else
		{
			break;
		}
		
	}

	promedio = suma / contador;

	alert("La suma es de " + suma + " y el promedio es de " + promedio);

}
	
/* while( respuesta == "si")
	{
		respuesta = prompt("Ingresa otro numero? si/no").toLowerCase;
	}
	*/

	/*

	function mostrar()
	{
		let numeroIngresado;
		let acumulador;
		let contador;
		let promedio;

		respuesta = "si";
		acumulador = 0;
		contador = 0;

		while(respuesta == "si")
		{
			numeroIngresado = prompt("ingrese un nuevo numero");
			numeroIngresado = parseInt(numeroIngresado);

			acumulador = acumulador + numeroIngresado;
			contador = contador + 1;

			respuesta = prompt("Desea ingresar un nuevo numero? si o no?");
		}

		promedio = acumulador / contador;

		alert(promedio + suma);

	}