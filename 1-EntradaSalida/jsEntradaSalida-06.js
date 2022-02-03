/* Sebastian Serrano - Division Z
Ejercicio E/S 6  
*/

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variables
	let numero1;
	let numero2;
	let resultado;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);  // parseint , de string a integer.
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);
	
	
	resultado = numero1 + numero2;
	
	
	alert(resultado);
}


/*operaciones aritmeticas :

utilizamos la funcion nativa parseint,para cambiar  un string a integer ..