/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
/*function mostrar()
{
	let numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive: ");
	numeroIngresado = parseInt(numeroIngresado);

	//while(numeroIngresado <10 && numero ingresado >= 0)      //loop infinito
	{
		txtIdNumero.value = numeroIngresado;
	}

	//while( numeroIngresado !(x> -1 &&  x<10))


}

	while(numero <0 || numero >9) // numero <0 && numero >9 es imposible , que numero cumple esta condicion?
	{
		alert("Numero incorrecto , ingrese nuevamente: ");
	}
*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado <0 || numeroIngresado >9)
	{
		numeroIngresado = prompt("numero incorrecto, ingrese nuevamente: ");
		numeroIngresado = parseInt(numeroIngresado);
	}

	txtIdNumero.value = numeroIngresado;

}