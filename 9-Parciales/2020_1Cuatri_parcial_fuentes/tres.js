/*Sebastian Serrano Division Z parcial 2020 punto 3


/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */



function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaIngresada;
	
	let respuesta;
	
	let mayorTemperatura;
	let banderaTemperatura;
	let nombreMayorTemperatura;
	let viudoMayorDeEdad;
	let hombresSolterosOViudos;
	let ancianosConFiebre;
	let cantidadHombresSolteros;
	let edadTotalHombresSolteros;

	banderaTemperatura = 0;
	mayorTemperatura = 0;
	viudoMayorDeEdad = 0;    
	hombresSolterosOViudos = 0;
	ancianosConFiebre = 0;
	cantidadHombresSolteros = 0;
	edadTotalHombresSolteros = 0;
	promedioEdadHombresSolteros = 0;



	respuesta = true;

	while(respuesta)
	{
		nombreIngresado = prompt("Ingrese el nombre: ");
		edadIngresada = prompt("Ingrese la edad: ");
		edadIngresada = parseInt(edadIngresada);
		while(edadIngresada < 1 || edadIngresada > 151)
		{
			edadIngresada = prompt("Error, ingrese otra edad: (< 151)");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Ingrese el sexo: f o m").toLowerCase();
		while(sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Invalido :( , ingrese otro sexo(f o m)").toLowerCase();
		}

		estadoCivilIngresado = prompt("Ingrese el estado civil: ").toLowerCase();
		while(estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt("Error, ingrese otro estado civil(soltero, casado o viudo)").toLowerCase();
		}

		temperaturaIngresada = prompt("Ingrese la temperatura corporal: ");
		temperaturaIngresada = parseFloat(temperaturaIngresada);
		while(temperaturaIngresada < 25 || temperaturaIngresada > 45)
		{
			temperaturaIngresada = prompt("Error, ingrese otra temperatura(ºfarenheit)");
			temperaturaIngresada = parseFloat(temperaturaIngresada);
		}


		if(temperaturaIngresada > mayorTemperatura || banderaTemperatura == 0)
		{
			mayorTemperatura = temperaturaIngresada;
			nombreMayorTemperatura = nombreIngresado;
			banderaTemperatura = 1;
		}
		if(edadIngresada > 17 && estadoCivilIngresado == "viudo")
		{
			viudoMayorDeEdad = viudoMayorDeEdad + 1;
		}
		if(sexoIngresado == "m" && estadoCivilIngresado == "viudo" || estadoCivilIngresado == "soltero")
		{
			hombresSolterosOViudos = hombresSolterosOViudos + 1;
		}
		if(edadIngresada > 60 && temperaturaIngresada > 38)
		{
			ancianosConFiebre = ancianosConFiebre + 1;
		}
		if(sexoIngresado == "m" && estadoCivilIngresado == "soltero")
		{
			cantidadHombresSolteros = cantidadHombresSolteros + 1;
			edadTotalHombresSolteros = edadTotalHombresSolteros + edadIngresada;
		}


		respuesta = confirm("¿Ingresara otra persona?");   //confirm() nos da una ventana que solo permite aceptar o cancelar, true o false,boolean
	}

	promedioEdadHombresSolteros = edadTotalHombresSolteros / cantidadHombresSolteros;

	document.write("El nombre de la persona con mayor temperatura es: " + nombreMayorTemperatura + "<br>");
	document.write("La cantidad de mayores de edad que enviudaron es de: " + viudoMayorDeEdad + "<br>");
	document.write("La cantidad de hombres solteros o viudos es de: " + hombresSolterosOViudos + "<br>");
	document.write("la cantidad de personas de la tercera edad con fiebre es de: " + ancianosConFiebre + "<br>");
	document.write("La edad promedio de hombres solteros es de: " + promedioEdadHombresSolteros + "<br>");

}
