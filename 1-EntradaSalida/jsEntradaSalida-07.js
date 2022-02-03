/* Sebastian Serrano - Division Z
Ejercicio E/S 7 
*/

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//declaro variables globales
/*
let numero1;
let numero2;
let resultado;

numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

function sumar()
{	
	resultado = numero1 + numero2;
	
	alert("la suma es"+" "+ resultado);	

}

function restar()
{ 
resultado = numero1 - numero2;
alert("la resta es"+" "+ resultado);
}

function multiplicar()
{ 
	resultado = numero1 * numero2;
	alert("la multiplicacion es "+" "+ resultado);
	
}

function dividir()
{
	resultado = numero1 / numero2;
	alert("la division es"+" "+ resultado);
}

*/
//todavia no vimos v.globales asi que locales ,

function sumar()
{ 	
	let numero1;
  	let numero2;
  	let resultado;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1); //-> "numero1"-> numero2
  
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resultado = numero1 + numero2;
	alert(resultado);

}
function restar()
{	
	let numero1;
	let numero2;
	let resultado; 

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resultado = numero1 - numero2;
	alert(resultado);
}
function multiplicar()
{ 	
	let numero1;
	let numero2;
	let resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resultado = numero1 * numero2;
	alert(resultado);
}
function dividir()
{ 	
	let numero1;
	let numero2;
	let resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	resultado = numero1 / numero2;
	alert(resultado);

	
}