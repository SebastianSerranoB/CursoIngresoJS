//en el archivo ej 7 de while

/*function mostrar()
{ /*Clase Sabado 19/02


	*Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
	*si es menor de 13 , mostrar el mensaje “feliz día”.
	*Si es adolescente el mensaje es “usted es adolescente”
	*si tiene 17 años además mostrar el mensaje “último año!!!”
	*Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
	*si tiene 33 años , además mostrar el mensaje “como cristo”
	*si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
	*si tiene 88, además mostrar el mensaje “lindo número''
	*si la edad es par , además mostrar , “sos par!!”.

	


	//Declarar variables

	var edad;
	//var estado;
	var mensaje;
	var edadParseado;


	edad = document.getElementById("txtIdEdad").value;
	edadParseado = parseInt(edad);

	if(edadParseado <13)
	{
		mensaje = "Feliz dia";	
	}
	else
	{
		if(edadParseado < 18)
		{
			mensaje = "Usted es adolescente";

			if(edadParseado == 17)
			{
				mensaje = mensaje + " y ademas es el ultimo año";
			}
		}
		else
		{

			mensaje = " tenes edad de laburar";

			if(edadParseado == 33)
			{
				mensaje = mensaje + " como cristo";

			}
			else
			{
				if(edadParseado > 60)
				{
					mensaje = " A jubilarse";

					if(edadParseado == 88)
					{
						mensaje = mensaje + " Lindo numero";

					}
				}
			}

		}

	}
	

	if(edadParseado % 2 == 0)
	{
		mensaje = mensaje + " sos par";

	}

    alert (mensaje);
    
}

Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
C. Si es menor de 13 , mostrar el mensaje “feliz día”.
B. Si es adolescente el mensaje es “usted es adolescente”
bi. Si tiene 17 años además mostrar el mensaje “último año!!!”
C. Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
i. Si tiene 33 años , además mostrar el mensaje “como cristo”
ii. Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
iii. Si tiene 88, además mostrar el mensaje “lindo número''
D. Si la edad es par , además mostrar , “sos par!!”.

Ejercicio 07 BIS V2
E. si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
F. si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
G. si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de 	QUEEN’.

 
	var edad;
	//var estado;
	var mensaje;
	var edadParseado;
	var nombreIngresado;

	nombreIngresado=prompt("Ingrese su nombre");

	edad = document.getElementById("txtIdEdad").value;
	edadParseado = parseInt(edad);

	if(edadParseado <13)//F. si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
	{
		mensaje = "Feliz dia";	
		if(nombreIngresado=="Ricardo")
		{
			mensaje=mensaje+", Usted se llama "+nombreIngresado+" muy chiquito para ese nombre"
		}
	}
	else
	{
		if(edadParseado < 18)
		{
			mensaje = " Usted es adolescente";
			if(nombreIngresado=="Violeta")//E. si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
			{
				mensaje=mensaje+" y se llama "+nombreIngresado+" Como un color!!";
			}
			if(edadParseado == 17)
			{
				mensaje = mensaje + " y ademas es el ultimo año";
			}
		}
		else
		{
			mensaje = " tenes edad de laburar";

			if(edadParseado == 33)
			{
				mensaje = mensaje + " como cristo";

			}
			else
			{
				if(edadParseado > 60)
				{
					mensaje = " A jubilarse";
					
					if(edadParseado == 88)
					{
						mensaje = mensaje + " Lindo numero ";
						
					}
					if(nombreIngresado=="Alfredo")//G. si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de 	QUEEN’.
					{
						mensaje= mensaje+ " Usted se llama "+nombreIngresado+" como el de QUEEN";
					}
				}
			}

		}

	}

	if(edadParseado % 2 == 0)
	{
		mensaje = mensaje + " y sos par";

	}

    alert (mensaje);
    

*/
function mostrar()
	{
		let alturaIngresada;
		let pregunta;
		let acumulador;
		let contador;
		let promedioAltura;


		contador = 0;
		acumulador = 0;

		alturaIngresada = prompt("Ingrese una altura en cm: ");
		alturaIngresada = parseFloat(alturaIngresada);
		

		while(alturaIngresada < 0 || alturaIngresada > 250)
		{
			alturaIngresada = prompt("Incorrecto , reingrese la altura");
			alturaIngresada = parseFloat(alturaIngresada);
		}
		while(alturaIngresada >= 0 && alturaIngresada < 251)    
		{
			acumulador = acumulador + alturaIngresada;
			contador = contador + 1;
			
			pregunta = prompt("¿Desea ingresar otra altura? s ó n");
			pregunta = pregunta.toLowerCase(pregunta);
			while(pregunta == "s")                    // lo habia echo con if , con while funca tmbn
			{
				alturaIngresada = prompt("Ingrese una nueva altura: ");
				alturaIngresada = parseFloat(alturaIngresada);
				
				pregunta = prompt("¿Desea ingresar otra altura? s ó n");
				pregunta = pregunta.toLowerCase(pregunta);
			}
			/*if(pregunta == "s")         //asi me funciona , pero como puedo hacerlo con while?
			{
				alturaIngresada = prompt("Ingrese una nueva altura: ");
				alturaIngresada = parseFloat(alturaIngresada);
				
			}
			else
			{
				break;
			}
			*/	
		}

		promedioAltura = acumulador / contador;
		alert("el promedio de alturas es: " + promedioAltura + "cm.");

		
		
	}
/*
     
    E:
    P:
    S:

    iterar 5 veces

        pido altura
        valido altura  (0-251)
        pido edad
        valido edad   (0 -100)
        pido temperatura
        valido temperatura (30 -45)
        pido genero
        valido genero ( m- f - nb)
        pido nota
        valido nota (1-10)
        pido nombre

        termino de iterar

        muestro promedio de alturas
        muestro contadores de sexo
        muestro cantidad de aprobados
        mostrar cantidad de mujeres de mas de 190cm
        
        mostrar sexo con mas alumnos
        mostrar edad de primer persona con fiebre
        
        mostrar nombre de primer mujer aprobada
calculo promedio de las alturas de los aprobados y muestro ( hay que verificar si hay aprobados)

        primera parte
    a_
        sumo alturas punto a
        
        calculo el promedio de alturas (suma de alturas / cantidad de alturas sumadas)
    b_
        calculo cantidad de personas de x sexo
        necesito 3 contadores uno por cada sexo (puedo usar un if/else o un switch)
        mostrar contadores de cada sexo
        D_ pregunto si es mujer y tiene mas de 190cm cuento
        B_ bandera para primer mujer aprobada , pregunto si es mujer y aprobada
    c_
        pregunto si la nota es mayor que 6 y cuento cuantos hay (contador)
        h_ tambien puedo preguntar si es mujer,
        i_acumular la altura de los aprobados y contarlos

        segunda parte

        comparar la cantidad de personas de x sexo , el mayor
    f_busco la maxima altura y me guardo el nombre
    
    g_ para saber quien es la primer persona con fiebre , levanto una bandera y guardo su edad
    h_ primer mujer aprobada , hago otra bandera dentro del punto b

    https://en.wikipedia.org/wiki/Nassi%E2%80%93Shneiderman_diagram


    1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre

1ERA PARTE
	informar :
	a)El promedio de las alturas totales.X
	b)Cantidad de personas de cada sexo.X
	c)Cantidad de aprobados(más de 6)
	d)La cantidad de mujeres que su altura supere
	 los 190 centímetros.

2da PARTE
	informar :
	e)Que sexo tiene mas alumnos X
	f)el nombre de la persona más alta X
	g)la edad de la primera persona con fiebre (más de 37)X

3ra PARTE
	informar :
	h)el nombre de la primer mujer aprobada X
	i) la altura promedio de los aprobados
	j)el nombre del primer hombre, que mide menos de 160 cm y  esta  desaprobado



function mostrar()
{
	

	iterar 5 veces
		//Entrada de datos y validaciones
		pido altura 
		valido altura (0-250)
		pido edad
		valido edad (mayor 17)
		pido temperatura
		valido temperatura (35-42)
		pido genero
		valido genero (f o m o nb)
		pido nota 
		valido nota (1-10)
		pido nombre

		Primara PARTE
		a) sumar las alturas 

		b) contar cuantas personas de cada genero (puedo usar un if-else o ¡¡¡switch!!!)
			d)Pregunto si es mujer y si tiene mas de 190 cm cuento
			h)Pregunto si es mujer y si es la primera y si esta aprobada y guardo el nombre
			j)Pregunto si es hombre evaluo si es el primero que mide menos de 160 t esta desaprobado
		c) pregunto si la nota es mayor que 6 y cuento cuantos aprobados hay
			h)tambien puedo preguntar si es mujer
			i) acumular la altura de los aprobados y contarlos
		Segunda PARTE
		f) busco la maxima altura y me guardo el nombre 
		g) para saber quien es la primera persona con fiebre levanto una bandera y guardo la edad
		   (la bandera tiene que estar abajo)

	termino de iterar

	calculo el promedio de las alturas del punto a 
	mostrar contadores del punto b
	mostrar la cantidad de aprobados punto c
	mostrar la cantidad de mujeres de mas de 190 cm punto d

	para el punto e: comparar los 3 contadores de genero para obtener el maximo de los 3
		mostrar cual es el mas grande
	mostrar la persona mas alta punto f
	mostrar edad de la primera persona con fiebre punto g
	mostrar el nombre de la primer mujer aprobada punto h

	calculo el promedio de las alturas de los aprobados del punto i

	mostrar el promedio de alturas de los aprobados punto i ****OJO****

	mostrar el nombre del primer hombre, que mide menos de 160 cm y  esta  desaprobado punto j




}//FIN DE LA FUNCIÓN

