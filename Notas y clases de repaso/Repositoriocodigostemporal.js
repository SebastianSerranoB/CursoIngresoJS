
/* Serrano Sebastian -Division Z
IF/ELSE EJ 7
*/
/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */


/*
 function mostrar()
 {
     let edad;
     let estadoCivil;
     
     edad = document.getElementById("txtIdEdad").value;
     edad = parseInt(edad);
 
     estadoCivil = document.getElementById("estadoCivil").value;
             //el tema es pedir este dato correctamente
     
     
     if(edad < 18 && estadoCivil!= "Soltero")
     {
         alert("Es muy pequeñ@ para no ser solter@");
     }
     
 
 
 }
 */
/*/*Clase 3 sabados
Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de 5 estudiantes de la UTN, 


1ERA PARTE
	informar :
	a)El promedio de las alturas totales.
	b)Cantidad de personas de cada sexo.
	b)Cantidad de aprobados(más de 6)
	c)La cantidad de mujeres que su altura supere
	 los 190 centímetros.

2da PARTE
	informar :
	d)Que sexo tiene mas alumnos
	e)el nombre de la persona más alta 
	f)la edad de la primera persona con fiebre (mas de 37)

3ra PARTE
	informar :
	g)
	h) 
	i)
	*/
/*
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
    */