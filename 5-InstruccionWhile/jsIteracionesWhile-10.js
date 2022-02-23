/* Serrano Sebastian
	Division Z
	Ejercicio 10 switch

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */ //entre contadores dijo gianni;
// de los positivos quiero ver el mas grande , y de los negativos el mas chico;

function mostrar()
{
	let numeroIngresado;
	let sumaPositivos;
	let sumaNegativos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let respuesta;
	//let banderaPositivo;  utilizamos a los contadores como banderas,
	//let banderaNegativo;	utilizamos a los contadores como banderas,
	let maximoPositivo;
	let minimoNegativo;
	let mensajePositivos;
	let mensajeNegativos;


	respuesta = "si";
	
	sumaNegativos = 0;
	sumaPositivos = 0;

	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;

	maximoPositivo = "No ingreso un numero positivo."; // max positivo undefined quickFix
	minimoNegativo = "No ingreso un numero negativo."; // min negativo undefined quickFix

	//banderaPositivo = 0; utilizamos a los contadores como banderas,
	//banderaNegativo = 0; utilizamos a los contadores como banderas,
	

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero entero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado; 
			//sumaNegativos += numeroIngresado, le suma el valor que esta a la derecha
			contadorNegativos = contadorNegativos + 1;     // contadorNegativos++
		
			if(numeroIngresado < minimoNegativo || contadorNegativos == 1) //utilizamos a los contadores como banderas,
			{
			
				minimoNegativo = numeroIngresado;
				banderaNegativo = 1;
			}
			
		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivos = contadorPositivos + 1;

				if(numeroIngresado > maximoPositivo || contadorPositivos == 1)  //utilizamos a los contadores como banderas,
				{
					
					maximoPositivo = numeroIngresado;

				}

				//if(numeroIngresado % 2 == 0)		el resto con "pares" /2 con negativos no es 0,	
				//{
				//	contadorPares = contadorPares + 1;
				//}
			}
			else
			{
				contadorCeros = contadorCeros + 1;
			}
		}
		
		if(numeroIngresado % 2 == 0)
		{
			contadorPares = contadorPares + 1;
		}
		
		respuesta = prompt("¿Desea ingresar un nuevo numero: si o no?").toLowerCase();
	
	}
	
	

	diferencia = contadorPositivos - contadorNegativos;

	if(contadorPositivos > 0)
	{
		promedioPositivos = sumaPositivos / contadorPositivos;
		mensajePositivos = "El promedio de numeros positivos es de: " + promedioPositivos;
	}
	else
	{
		mensajePositivos = "No hay suficientes numeros positivos para promediar";

	}
	
	if(contadorNegativos > 0)
	{
		promedioNegativos = sumaNegativos / contadorNegativos;
		mensajeNegativos = "El promedio de numeros negativos es de: " + promedioNegativos;
	}
	else
	{
		mensajeNegativos = "No hay suficientes numeros negativos para promediar.";
	}

	
	document.write("La suma de numeros negativos es de: " + sumaNegativos + "<br>");
	document.write("La suma de numeros positivos es de: " + sumaPositivos + "<br>");
	
	document.write("La cantidad de numeros positivos es de: " + contadorPositivos + "<br>");
	document.write("La cantidad de numeros negativos es de: " + contadorNegativos + "<br>");
	document.write("La cantidad de ceros en total es de: " + contadorCeros + "<br>");
	document.write("la cantidad de numeros pares es de: " + contadorPares + "<br>");

	document.write(mensajePositivos + "<br>");
	document.write(mensajeNegativos + "<br>");

	document.write("La diferencia entre la cantidad de numeros negativos y positivos es de: " + diferencia + "<br>");

	document.write("El mayor numero positivo es: " + maximoPositivo + "<br>");
	document.write("El menor numero negativo es: " + minimoNegativo + "<br>");
	
}

