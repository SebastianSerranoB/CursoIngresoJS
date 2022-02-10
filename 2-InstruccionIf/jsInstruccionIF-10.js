/* Serrano Sebastian -Division Z
IF/ELSE EJ 10
*/
/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
Curso de ingreso UTN FRA*/

function mostrar()
{
	let numero;
	
	numero = Math.floor(Math.random() * 11);   

	if(numero > 8)
	{
		alert("EXCELENTE"); 
	}
	else
	{
		if(numero > 3 && numero < 9)
		{	
			alert("APRÓBO");
		}
	
		else
		{
			alert("Vamos, la proxima se puede");

		}			
	}	
}


/*
function mostrar()
{

let nota;
let mensaje;

mensaje = "Vamos, la proxima se puede";

nota = Math.floor(Math.random() + 11);

if(nota > 8)
{
	mensaje = "EXCELENTE";
	alert(mensaje);
}
else
{
	if(nota > 3 && nota < 9)
	mensaje = "APROBÓ";
	alert(mensaje);
}

alert(mensaje);
*/