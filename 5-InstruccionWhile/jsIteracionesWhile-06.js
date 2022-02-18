/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

function mostrar()
{
	let numeroIngresado;
	let contador;
	let suma;
	let promedio;

	contador = 0;

	suma = 0;

	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese un total de 5 numeros: ");
		numeroIngresado = parseInt(numeroIngresado);

		suma = suma + numeroIngresado;

		contador = contador + 1;
		
	}

	promedio = suma / contador;

	txtIdSuma.value = suma;

	txtIdPromedio.value = promedio;

}