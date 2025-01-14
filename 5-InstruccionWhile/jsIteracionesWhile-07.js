/*Serrano Sebastian
Division Z
simulacro parcial;


/*While simulacro v2…

Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de estudiantes de la UTN hasta que el usuario quiera,
	//ingreso y valido datos

	// acumulo, promedio e informo
	1ERA PARTE
	informar :
	a)Cuántas mujeres hay .
	b)Cuántos con fiebre y cuantos sin fiebre.
	c)el promedio de edad por sexo.
	
	//maximos, minimos , banderas, informo;
	2da PARTE
	informar :
	d)el primer alumno aprobado
	e)el nombre y edad la máxima temperatura 
	f)la altura y nota  del no binario mas joven 

	//maximos , banderas , porcentajes e informo
	3ra PARTE
	informar :
	g)el nombre de la mujer más alta de las que aprobó
	h)el porcentaje de  personas que desaprobaron sobre el total
	i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado. */


function mostrar()
{

	let respuesta;
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let alturaIngresada;
	let temperaturaIngresada;
	let notaIngresada;

	let contadorFiebre;
	let contadorSinFiebre;
	
	let contadorMujeres;
	let contadorHombres;
	let contadorNoBinarios;
	let edadesMujeres;
	let edadesHombres;
	let edadesNoBinarios;
	let promedioEdadMujeres;
	let promedioEdadHombres;
	let promedioEdadNoBinarios;

	let banderaPrimerAprobado;
	let primerAlumnoAprobado;
	
	let maximaTemperatura;
	let banderaMaximaTemperatura;
	let alumnoMayorTemperatura;

	let menorEdadNoBinario;
	let banderaMenorEdadNoBinario;
	let noBinarioMasJoven;

	let mujerMasAltaYAprobada;
	let mayorAlturaMujeres;
	
	let contadorAlumnos;
	let contadorAlumnosDesaprobados;
	let porcentajeAlumnosDesaprobados;
	let contadorMujeresAprobadas;
	let contadorAlumnosBajos;

	let primerHombreBajoYDesaprobado;
	let banderaHombreDesaprobado;

	
	contadorFiebre = 0;
	contadorSinFiebre = 0;

	contadorMujeres = 0;
	contadorHombres = 0;
	contadorNoBinarios = 0;
	edadesMujeres = 0;
	edadesHombres = 0;
	edadesNoBinarios = 0;

	banderaPrimerAprobado = 0;
	
	banderaMaximaTemperatura = 0;
	//maximaTemperatura = 0; ** no se inicializan maximos
	
	//menorEdadNoBinario = 0; ** no se inicializan minimos
	banderaMenorEdadNoBinario = 0;

	mayorAlturaMujeres = 0;

	contadorAlumnos = 0;
	contadorAlumnosDesaprobados = 0;
	// es para luego preguntar e informar si algun alumno aprobo o no
	contadorAlumnosAprobados = 0;
	// pregunto para luego informar si hay mujeres aprobadas o no
	contadorMujeresAprobadas = 0;
	// pregunto para luego informar si se ingreso un alumno <160
	contadorAlumnosBajos = 0;

	banderaHombreDesaprobado = 0;

	
	
	respuesta = true;
	while(respuesta)
	{	
		// pido y valido datos
		nombreIngresado = prompt("Ingrese el nombre del alumno: ");
		edadIngresada = prompt("Ingrese la edad del alumno: ");
		edadIngresada = parseInt(edadIngresada);
		while(edadIngresada < 17 || edadIngresada > 150)
		{
			edadIngresada = prompt("Error, ingrese otra edad(> 17)");
			edadIngresada = parseInt(edadIngresada);
		}
		sexoIngresado = prompt("Ingrese el sexo del alumno: ").toLowerCase();
		while(sexoIngresado != "m" && sexoIngresado != "f" && sexoIngresado != "nb")
		{
			sexoIngresado = prompt("Error, ingrese otro sexo(nb, m o f)").toLowerCase();
		}
		alturaIngresada = prompt("Ingrese la altura en cm del alumno: ");
		alturaIngresada = parseFloat(alturaIngresada);
		while(alturaIngresada < 1 || alturaIngresada > 250)
		{
			alturaIngresada = prompt("Error, ingrese otra altura( > 1 && < 250)");
			alturaIngresada = parseFloat(alturaIngresada);
		}
		temperaturaIngresada = prompt("Ingrese la temperatura corporal del alumno: ");
		temperaturaIngresada = parseFloat(temperaturaIngresada);
		while(temperaturaIngresada < 25 || temperaturaIngresada > 45)
		{
			temperaturaIngresada = prompt("Error, ingrese otra temperatura( > 25 && < 45)");
			temperaturaIngresada = parseFloat(temperaturaIngresada);
		}
		notaIngresada = prompt("Ingrese la nota del alumno: ");
		notaIngresada = parseInt(notaIngresada);
		while(notaIngresada < 0 || notaIngresada > 10)
		{
			notaIngresada = prompt("Error, ingrese otra nota(> 0 && < 10)");
			notaIngresada = parseInt(notaIngresada);
		}
		
		//cuento personas con y sin fiebre;
		if(temperaturaIngresada > 37)
		{
			contadorFiebre = contadorFiebre + 1;
		}
		else
		{	
			contadorSinFiebre = contadorSinFiebre + 1;
		}
		
		//cuento generos y acumulo edades para promediar;
		switch(sexoIngresado)
		{
			case "f":
				contadorMujeres = contadorMujeres + 1;
				edadesMujeres = edadesMujeres + edadIngresada;
			break;
			case "m":
				contadorHombres = contadorHombres + 1;
				edadesHombres = edadesHombres + edadIngresada;
			break;
			case "nb":
				contadorNoBinarios = contadorNoBinarios + 1;
				edadesNoBinarios = edadesNoBinarios + edadIngresada;
			break;
		}
		
		//primerAlumno aprobado;
		if(notaIngresada > 5 && banderaPrimerAprobado == 0)
		{
			primerAlumnoAprobado = nombreIngresado;
			
			banderaPrimerAprobado = 1;
		}
		//nombreYedad maxima temperatura
		if(temperaturaIngresada > maximaTemperatura || banderaMaximaTemperatura == 0)
		{
			maximaTemperatura = temperaturaIngresada;
			alumnoMayorTemperatura = "nombre " + nombreIngresado + " y edad " + edadIngresada;
			
			banderaMaximaTemperatura = 1;
		}
		//altura y nota del no binario mas joven
		if(sexoIngresado == "nb")
		{
			if(edadIngresada < menorEdadNoBinario || banderaMenorEdadNoBinario == 0)
			{
				menorEdadNoBinario = edadIngresada;
				noBinarioMasJoven = "nota " + notaIngresada + " y altura " + alturaIngresada + "cm";
					
				banderaMenorEdadNoBinario = 1;
			}
		}

		//el nombre de la mujer mas alta de las que aprobo
		if(sexoIngresado == "f" && notaIngresada > 5)
		{
			if(alturaIngresada > mayorAlturaMujeres )
			{
				mujerMasAltaYAprobada = nombreIngresado;
			}
			//cuento mujeres aprobadas para luego preguntar si hay
			contadorMujeresAprobadas = contadorMujeresAprobadas + 1;
		}
		//contadorAlumnosDesaprobados
		if(notaIngresada < 6)
		{
			contadorAlumnosDesaprobados = contadorAlumnosDesaprobados + 1;
		}
		//contador de alumnos ingresados
		contadorAlumnos = contadorAlumnos + 1;
		
		// es para luego preguntar e informar si algun alumno aprobo o no
		if(notaIngresada > 5)
		{
			contadorAlumnosAprobados = contadorAlumnosAprobados + 1;
		}
		// nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado
		if(sexoIngresado = "m" && notaIngresada < 6 && alturaIngresada < 160 && banderaHombreDesaprobado == 0)
		{
			primerHombreBajoYDesaprobado = nombreIngresado;
			banderaHombreDesaprobado = 1;
			//es para preguntar si se ingreso un alumno mas bajo que 160cm;
			contadorAlumnosBajos = contadorAlumnosBajos + 1;
		}


		//continuo o rompo el ciclo while
		respuesta = confirm("¿Desea ingresar otro estudiante de UTN?");
	}

	// promedio de edades por genero
	promedioEdadMujeres = edadesMujeres / contadorMujeres;
	promedioEdadHombres = edadesHombres / contadorHombres;
	promedioEdadNoBinarios = edadesNoBinarios / contadorNoBinarios;
	//porcentaje de alumnos desaprobados
	porcentajeAlumnosDesaprobados = (contadorAlumnosDesaprobados * 100) / contadorAlumnos;
	

	//A)
	//informo cantidad de mujeres
	document.write("La cantidad de mujeres es: " + contadorMujeres + "<br>");
	//informo gente con y sin fiebre
	document.write("la cantidad de personas con fiebre es: " + contadorFiebre + " y la cantidad sin fiebre es: " + contadorSinFiebre + "<br>");
	
	//informo promedio de edades para cada genero;   
	// ** necesito un if que pregunte si al menos se ingreso un sexo para promediar , sino 0/0 es undefined
	if(contadorMujeres > 0)
	{
		document.write("El promedio de edad en mujeres es: " + promedioEdadMujeres + "<br>");
	}
	else
	{
		document.write("No se ingresaron alumnas.");
	}
	if(contadorHombres > 0)
	{
		document.write("El promedio de edad en hombres es: " + promedioEdadHombres + "<br>");
	}
	else
	{
		document.write("No se ingresaron alumnos hombres.");
	}
	if(contadorNoBinarios > 0)
	{
		document.write("El promedio de edad en no binarios es: " + promedioEdadNoBinarios + "<br>");
	}
	else
	{
		document.write("No se ingresaron alumnxs no binario.");
	}
	

	//B)
	//Informo primer alumno aprobado
	//Pregunto si algun alumno aprobo
	if(contadorAlumnosAprobados > 0)
	{
		document.write("El primer alumno aprobado es: " + primerAlumnoAprobado + "<br>");
	}
	else
	{
		document.write("No se ingreso ningun alumno aprobado." + "<br>");
	}
	//Informo nombre y edad de alumno con mayor temperatura
	document.write("El nombre y edad de la persona con mayor temperatura es: " + alumnoMayorTemperatura + "<br>");
	//Informo la nota y altura en cm de el alumno no binario mas joven
	//pregunto si se ingreso un no binario
	if(contadorNoBinarios > 0)
	{
		document.write("La nota y altura del alumno no binario mas joven es: " + noBinarioMasJoven + "<br>");
	}
	else
	{
		document.write("No se ingresaron alumnxs no binarios.");
	}
	
	//C)
	//Informo el nombre de la mujer mas alta aprobada
	//Pregunto si se ingreso alguna mujer y esta aprobo
	if(contadorMujeres > 0 && contadorMujeresAprobadas > 0)
	{
		document.write("El nombre de la mujer mas alta y aprobada es: " + mujerMasAltaYAprobada + "<br>");
	}
	else
	{
		document.write("No se ingreso ninguna alumna aprobada." + "<br>");
	}
	
	//Informo el porcentaje de alumnos desaprobados
	//Pregunto si algun alumno desaprobo;
	if(contadorAlumnosDesaprobados > 0)
	{
		document.write("El porcentaje de alumnos desaprobados es de: " + porcentajeAlumnosDesaprobados + "%" + "<br>");
	}
	else
	{
		document.write("No se ingresaron alumnos desaprobados, el porcentaje es 0%" + "<br>");
	}
	//Informo primer alumno menor a 160cm
	//pregunto si hay algun alumno menor a 160cm
	if(contadorAlumnosBajos > 0)
	{
		document.write("El nombre del primer hombre desaprobado y mas bajo que 160cm es: " 
		+ primerHombreBajoYDesaprobado + "<br>");
	}
	else
	{
		document.write("No se ingresaron alumnos mas bajos que 160cm" + "<br>");
	}
}


