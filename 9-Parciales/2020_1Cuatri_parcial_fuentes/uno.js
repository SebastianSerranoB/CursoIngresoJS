/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos: // todavia no sabemos crear 5 objetos con atributos**
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

//ingresar datos 5 veces, atenerse  a validar y los incisos , no tenemos que crear 5 productos a pesar de que indique eso
//enunciado, todavia no sabemos hacerlo;





function mostrar()
{
	let productoIngresado;
	let precioIngresado;
	let cantidadDeUnidades;
	let marcaIngresada;
	let fabricanteIngresado;

	let contadorProducto;

	let precioMinimoAlcohol;
	let banderaAlcohol;
	let fabricanteAlcohol;
	let cantidadUnidadesAlcoholBarato;

	let contadorAlcohol;
	let acumuladorAlcohol;
	let contadorBarbijo;
	let acumuladorBarbijo;
	let contadorJabon;
	let acumuladorJabon;
	let tipoMayorCantidad;
	let tipoMayorContador;
	let promedio;

	
	precioMinimoAlcohol = 0;
	banderaAlcohol = 0;
	cantidadUnidadesAlcoholBarato = 0;
	
	contadorAlcohol = 0;
	acumuladorAlcohol = 0;
	contadorBarbijo = 0;
	acumuladorBarbijo = 0;
	contadorJabon = 0;
 	acumuladorJabon = 0;
	tipoMayorCantidad = 0;
	tipoMayorContador = 0;
	



	contadorProducto = 0;
	while(contadorProducto < 5)
	{
		productoIngresado = prompt("Ingrese un producto: ").toLowerCase();
		while(productoIngresado != "jabon" && productoIngresado != "alcohol" && productoIngresado != "barbijo")
		{
			productoIngresado = prompt("Error, ingrese otro producto(jabon, barbijo o alcohol)").toLowerCase();
		}
		precioIngresado = prompt("Ingrese el precio del producto: ");
		precioIngresado = parseFloat(precioIngresado);
		while(precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Ingrese otro precio(>100 && <300)");
			precioIngresado = parseFloat(precioIngresado);
		}
		cantidadDeUnidades = prompt("Ingrese la cantidad de unidades por producto: ");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		while(cantidadDeUnidades < 1 || cantidadDeUnidades > 1000)
		{
			cantidadDeUnidades = prompt("Error, ingrese otra cantidad(> 1 && < 1000)");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}
		marcaIngresada = prompt("Ingrese la marca comercial: ");
		fabricanteIngresado = prompt("Ingrese el fabricante: ");
		
		if(productoIngresado == "alcohol")
		{
			if(precioIngresado < precioMinimoAlcohol || banderaAlcohol == 0)
			{	
				precioMinimoAlcohol = precioIngresado;
				fabricanteAlcohol = fabricanteIngresado;
				cantidadUnidadesAlcoholBarato = cantidadUnidadesAlcoholBarato + cantidadDeUnidades;
				banderaAlcohol = 1;
			}
		}
		
		if(productoIngresado == "jabon")
		{
			contadorJabon = contadorJabon + 1;
			acumuladorJabon = acumuladorJabon + cantidadDeUnidades;
		}
		else
		{
			if(productoIngresado == "barbijo")
			{
				contadorBarbijo = contadorBarbijo + 1;
				acumuladorBarbijo = acumuladorBarbijo + cantidadDeUnidades;
			}
			else
			{
				contadorAlcohol = contadorAlcohol + 1;
				acumuladorAlcohol = acumuladorAlcohol + cantidadDeUnidades;	
			}
		}
		

		contadorProducto = contadorProducto + 1;
	}

	
	if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
	 {
		tipoMayorCantidad = acumuladorBarbijo;
		tipoMayorContador = contadorBarbijo;
	 }
	 else
	 {
		if(acumuladorAlcohol > acumuladorJabon)
		{
			tipoMayorCantidad = acumuladorAlcohol;
			tipoMayorContador = contadorAlcohol;
		}
		else
		{
			tipoMayorCantidad = acumuladorJabon;
			tipoMayorContador = contadorJabon;
 
		}
	 }
	 promedio = tipoMayorCantidad *	tipoMayorContador;
	
	
	 if(precioMinimoAlcohol > 0)
	{	document.write("Del alcohol mas barato, la cantidad de unidades es de: " + cantidadUnidadesAlcoholBarato + 
		" y el fabricante es: " + fabricanteAlcohol + "<br>");
	}
	else
	{	
		document.write("No ingreso productos de tipo alcohol." + "<br>");
	}
	document.write("El promedio de cantidades ingresadads del tipo de producto mas pedido es: " + promedio + "<br>");
	if(acumuladorJabon > 0)
	{
		document.write("La cantidad de unidades pedidas del tipo jabon es: " + acumuladorJabon + "<br>");
	}
	else
	{
		document.write("No se pidieron unidades de jabon" + "<br>");
	}

}