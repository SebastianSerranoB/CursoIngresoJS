
/*
	Serrano Sebastian -Division Z
	Clase de repaso 12/02

 .Ejercicio 07 BIS V3(Realizar en los archivos  del ejercicio 07 del IF)
además de los datos ya ingresados , solicitar el nombre .
si es menor de 13 , , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolexcente”)
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número''
si la edad es par , además mostrar , “sos par!!”.
si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de 	QUEEN’.
Si no es menor de 13 y está casado , además mostrar el mensaje ‘casada quiere casa’.
Si sos soltero y mayor de edad y no tienes edad para jubilarse , sumar el mensaje ‘a salir ‘
Si sos divorciado y sos adolescente, además mostrar ‘toda una vida por delante’
	
ATENCIÓN
El anterior ejercicio debe tener un solo alert escrito en el código
SI SI , uno solo.
la palabra alert escrita una sola vez.
si si nuevamente , una sola vez en todo su código.

*/

function mostrar()
{
	let edad;
	let nombre;
	let estadoCivil;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	nombre = prompt(" Ingrese su nombre:");

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 13)
	{
		mensaje = "feliz día ";

		if(nombre == "Ricardo")
		{
			mensaje = mensaje + "muy chiquito para ese nombre ";
		}
	}
	else
	{
		if(edad < 18)
		{
			mensaje = "usted es adolexcente ";

			if(edad == 17)
			{
				mensaje = mensaje + "último año!!! ";
			}
			if(nombre == "Violeta")
			{
				mensaje = mensaje + "como un color!! ";
			}
			if(estadoCivil == "Divorciado")
			{
				mensaje = mensaje + "toda una vida por delante ";
			}
			else
			{
				if(estadoCivil == "Casado")
				{
					mensaje = mensaje + "casada quiere casa ";
				}
			}
		}
		else
		{
			if(edad > 17)
			{
				mensaje = "tienes edad de laburar ";

				if(edad == 33)
				{
					mensaje = mensaje + "como cristo";	
				}
				if(edad == 60)
				{
					mensaje = mensaje + "a jubilarse ";
					
					if(nombre == "Alfredo")
					{
						mensaje = mensaje + "como el de QUEEN ";
					}
				}
				if(edad == 88)
				{
					mensaje = mensaje + "lindo número ";
				}
				if(estadoCivil == "Casado")
				{
					mensaje = mensaje + " casada quiere casa ";
				}
				else
				{
					if(estadoCivil == "Soltero" && edad < 60)
					
					mensaje = mensaje + " a salir ";
				}	
			}	
		}
	}
	
	if(edad % 2 == 0)
	{
		mensaje = mensaje + "sos par!!";
	}
	
	alert(mensaje);

}
