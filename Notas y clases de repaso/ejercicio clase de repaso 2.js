/* Serrano Sebastian -Division Z

Clase de Repaso

Enunciado:
ATENCIÓN
El siguiente ejercicio debe tener un solo alert escrito en el codigo
SI SI , uno solo.
la palabra alert escrita una sola vez.
si si nuevamente , una sola vez en todo su código
Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”)
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número''
si la edad es par , además mostrar , “sos par!!”.
*/
/*
function mostrar()
{
	let edad;
	let mensaje;
	
	edad = document.getElementById("txtIdEdad").value; 
	edad = parseInt(edad);

	if(edad < 14)
	{
		mensaje = "Feliz dia ";
	}
	else
	{
		if(edad < 17)            
		{
			mensaje = "Usted es adolescente ";
		}
		else
		{
			if(edad == 17)
			{
				mensaje = "Usted es adolescente , ultimo año!!! ";
			}
			else
			{
				if(edad == 33)    
				{
					mensaje = "Tienes edad de laburar, 33 como cristo! ";
				}
				else
				{
					if(edad == 60)
					{
						mensaje = "Tienes edad de laburar; a jubilarse ";
					}
					else
					{
						if(edad == 88)
						{
							mensaje = "Tienes edad de laburar, lindo numero ";
						}
						else
						{
							mensaje = "Tienes edad de laburar ";						
						}	
					}
				}
			}
		}
	}

	if(edad % 2 == 0)                 
	{
		mensaje = mensaje + " sos par!!";		
	}	
		
	alert(mensaje);	
		
}
*/
/* Serrano Sebastian -Division Z

Clase de Repaso

ATENCIÓN
El siguiente ejercicio debe tener un solo alert escrito en el codigo
SI SI , uno solo.
la palabra alert escrita una sola vez.
si si nuevamente , una sola vez en todo su código

Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”)
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número''
si la edad es par , además mostrar , “sos par!!”.

.Ejercicio 07 BIS V1(Realizar en los archivos  del ejercicio 07 del IF)
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
si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de 	QUEEN’ 
*/
/*
function mostrar()
{
	let edad;
	let mensaje;
	let nombre;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	nombre = prompt("ingrese su nombre");

	if(edad < 13)
	{
		mensaje = "Feliz dia ";
		
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
				mensaje = mensaje + " como un color!!";
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
				
			}
		}
	}

	if(edad % 2 == 0)
	{
		mensaje = mensaje + "sos par";
	}
	
	alert(mensaje);
		
}
*/