/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */
/*
 ingreso de 5 productos.
 validar: 5 datos
-tipo= jabon , barbijo,alcohol
-precio = >= 100 && <= 300
-cant.unidades = > 0 && <1001
-marca =
-fabricante =

Informar:(document.write,alert,)
a) Producto tipo: alcohol, la marca mas barata (minimo), cant. unidades y fabricante.
b) El promedio de unidades por compra , del tipo de producto mas pedido.
c) Cantidad de unidades de productos tipo "jabon".


*/
/*
function mostrar()      //version uno , salio mal
{
	let producto;
	let contadorProducto;
	
	let precio;
	let cantidadDeUnidades;
	let acumuladorUnidades;
	let unidadesJabon;
	let marca;
	let fabricante;
	
	let precioMinimoAlcohol;
	let banderaAlcohol;
	
	
	contadorProducto = 0;
	banderaAlcohol = 0;

	
	
	while(contadorProducto < 5)			//contamos 5 productos
	{
		producto = prompt("Ingrese 5 productos: ").toLowerCase();						
		while(producto != "barbijo" && producto != "alcohol" && producto != "jabon" )	//Validamos el tipo de producto
		{
			producto = prompt("Invalido! Ingrese otro producto: ").toLowerCase();
		
		}

		
		precio = prompt("Ingrese el precio del producto: ");
		precio = parseFloat(precio);
		while(precio < 100 || precio > 300)						//Validamos el precio del producto
		{
			precio = prompt("Invalido! Ingrese otro precio: ");
			precio = parseFloat(precio);
		}
		

		cantidadDeUnidades = prompt("Ingrese la cantidad de unidades requeridas: ");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		    
		while(cantidadDeUnidades < 1 || cantidadDeUnidades > 1000)            //Validamos cant.unidades
		{
			cantidadDeUnidades = prompt("Invalido! Ingrese otra cantidad de unidades: ");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}
		

		marca = prompt("Ingrese la marca del producto: ");        //Validamos que ingrese alguna marca, .lenght nos da la cantidad de caracteres de un string, si es == 0 implica que no escribio nada
		while(marca.length == 0)            					//.lenght nos da la cantidad de caracteres de un str , si == 0 , implica que no escribio nada
		{
			marca = prompt("Invalido! Debe ingresar una marca: ");
		}
		fabricante = prompt("Ingrese el fabricante del producto");
		while(fabricante.length == 0)								//Validamos que ingrese algun fabricante 
		{
			fabricante = prompt("Invalido! Debe ingresar un fabricante");
		}

		switch(producto)						// creo que el swich deberia engloblar los while y no al reves , 
		{
			case "barbijo":
				
			
			break;
			
			case "alcohol":
				if(precio < precioMinimoAlcohol || banderaAlcohol == 0)     // obtenemos el minimo precio
				{
					precioMinimoAlcohol = precio;
					banderaAlcohol = 1;
				}
			break;
			
			case "jabon":
				unidadesJabon = cantidadDeUnidades;
			
				break;
			
			
			default:
			break;
		}
		
		
		contadorProducto = contadorProducto + 1;		 // contador 5 productos
	
	}

}
*/
/*		if(precio < precioMinimoAlcohol || banderaAlcohol == 0)     // obtenemos el minimo precio
		{
			precioMinimoAlcohol = precio;
			banderaAlcohol = 1;
		}
*/ 
	
/*Creo que lo mejor seria pedir el producto con while y contador , validarlo y abrir un switch , con los distintos cases para 
producto , y ahi meter los while que necesite para cada uno o los que pueden ser default; no al reves; que hice 
los while y despues el switch, */

/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */
/*
 ingreso de 5 productos.
 validar: 5 datos
-tipo= jabon , barbijo,alcohol
-precio = >= 100 && <= 300
-cant.unidades = > 0 && <1001
-marca =
-fabricante =

Informar:(document.write,alert,)
a) Producto tipo: alcohol, la marca mas barata (minimo), cant. unidades y fabricante.
b) El promedio de unidades por compra , del tipo de producto mas pedido.
c) Cantidad de unidades de productos tipo "jabon". */

/*function mostrar()
{
	let producto;
	let contadorProducto;
	
	let precioIngresado;
	let precioAlcohol;
	let precioMinimoAlcohol;
	let banderaAlcohol;
	
	let cantidadDeUnidades;
	let marca;
	let fabricante;

	contadorProducto = 0;
	banderaAlcohol = 0;

	
	while(contadorProducto < 2)
	{
		producto = prompt("Ingrese hasta 5 productos: ").toLowerCase();
		while(producto != "jabon" && producto != "alcohol" && producto != "barbijo")
		{
			producto = prompt("Invalido! Ingrese otro producto : ").toLowerCase();
		}

		switch(producto)
		{
			case "alcohol":
				precioAlcohol = prompt("Ingrese el precio del alcohol");
				precioAlcohol = parseFloat(precioAlcohol);
				while(precioAlcohol < 100 || precioAlcohol > 300)
				{
					precioAlcohol = prompt("Invalido! Ingrese otro precio: ");
					precioAlcohol = parseFloat(precioAlcohol);
				}

				if(precioAlcohol < precioMinimoAlcohol || banderaAlcohol == 0)
				{
					precioMinimoAlcohol = precioAlcohol;
					banderaAlcohol = 1;
				}

				






			break;

			case "jabon":
			break;

			case "barbijo":
			break;


			default:
			break;
		}
		

		contadorProducto = contadorProducto + 1;
	}






}

/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,   
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */
/*
 ingreso de 5 productos.
 validar: 5 datos
-tipo= jabon , barbijo,alcohol
-precio = >= 100 && <= 300
-cant.unidades = > 0 && <1001
-marca =
-fabricante =

Informar:(document.write,alert,)
a) Producto tipo: alcohol, la marca mas barata (minimo), cant. unidades y fabricante.
b) El promedio de unidades por compra , del tipo de producto mas pedido.
c) Cantidad de unidades de productos tipo "jabon". */

//IMPORTANTE: SI BIEN EL ENUNCIADO NOS DICE QUE NECESITAMOS TENER LOS 5 DATOS DE CADA PRODCUTO INGRESADO,
//TODAVIA NO SABEMOS HACERLO , SOLO ATENERSE A LO QUE NOS PIDE INFORMAR.

/*function mostrar()
{
	let productoIngresado;
	let contadorProducto;
	
	let precioIngresado;
	let cantidadDeUnidades;
	let marca;
	let fabricantes;

	contadorProducto = 0;

	while(contador = 0)
	{
		productoIngresado = prompt("Ingrese hasta 5 productos: ").toLowerCase();
		while(productoIngresado != "barbijo" && productoIngresado != "jabon" && productoIngresado != "alcohol")
		{
			productoIngresado = prompt("Invalido! ingrese otro producto: ").toLowerCase();
		}
		
	
	
	
	}

}*/

/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,   
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */
/*
 ingreso de 5 productos.
 validar: 5 datos
-tipo= jabon , barbijo,alcohol
-precio = >= 100 && <= 300
-cant.unidades = > 0 && <1001
-marca =
-fabricante =

Informar:(document.write,alert,)
a) Producto tipo: alcohol, la marca mas barata (minimo), cant. unidades y fabricante.
b) El promedio de unidades por compra , del tipo de producto mas pedido.
c) Cantidad de unidades de productos tipo "jabon". */

//IMPORTANTE: SI BIEN EL ENUNCIADO NOS DICE QUE NECESITAMOS TENER LOS 5 DATOS DE CADA PRODCUTO INGRESADO,
//TODAVIA NO SABEMOS HACERLO , SOLO ATENERSE A LO QUE NOS PIDE INFORMAR.

function mostrar()      //version uno , salio mal
{
	let producto;
	let contadorProducto;
	
	let precio;
	let cantidadDeUnidades;
	let acumuladorUnidades;
	let unidadesJabon;
	let marca;
	let fabricante;
	
	let precioMinimoAlcohol;
	let banderaAlcohol;
	
	
	contadorProducto = 0;
	banderaAlcohol = 0;

	
	
	while(contadorProducto < 5)			//contamos 5 productos
	{
		producto = prompt("Ingrese 5 productos: ").toLowerCase();						
		while(producto != "barbijo" && producto != "alcohol" && producto != "jabon" )	//Validamos el tipo de producto
		{
			producto = prompt("Invalido! Ingrese otro producto: ").toLowerCase();
		
		}

		
		precio = prompt("Ingrese el precio del producto: ");
		precio = parseFloat(precio);
		while(precio < 100 || precio > 300)						//Validamos el precio del producto
		{
			precio = prompt("Invalido! Ingrese otro precio: ");
			precio = parseFloat(precio);
		}
		

		cantidadDeUnidades = prompt("Ingrese la cantidad de unidades requeridas: ");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		    
		while(cantidadDeUnidades < 1 || cantidadDeUnidades > 1000)            //Validamos cant.unidades
		{
			cantidadDeUnidades = prompt("Invalido! Ingrese otra cantidad de unidades: ");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}
		

		marca = prompt("Ingrese la marca del producto: ");        //Validamos que ingrese alguna marca, .lenght nos da la cantidad de caracteres de un string, si es == 0 implica que no escribio nada
		while(marca.length == 0)            					//.lenght nos da la cantidad de caracteres de un str , si == 0 , implica que no escribio nada
		{
			marca = prompt("Invalido! Debe ingresar una marca: ");
		}
		fabricante = prompt("Ingrese el fabricante del producto");
		while(fabricante.length == 0)								//Validamos que ingrese algun fabricante 
		{
			fabricante = prompt("Invalido! Debe ingresar un fabricante");
		}

		switch(producto)						// creo que el swich deberia engloblar los while y no al reves , 
		{
			case "barbijo":
				
			
			break;
			
			case "alcohol":
				if(precio < precioMinimoAlcohol || banderaAlcohol == 0)     // obtenemos el minimo precio
				{
					precioMinimoAlcohol = precio;
					banderaAlcohol = 1;
				}
			break;
			
			case "jabon":
				unidadesJabon = cantidadDeUnidades;
			
				break;
			
			
			default:
			break;
		}
		
		
		contadorProducto = contadorProducto + 1;		 // contador 5 productos
	
	}

}

/*		if(precio < precioMinimoAlcohol || banderaAlcohol == 0)     // obtenemos el minimo precio
		{
			precioMinimoAlcohol = precio;
			banderaAlcohol = 1;
		}
*/ 

/*/*Mostrar información
Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

function mostrar()
{
  var productoIngresado;
  var precio;
  var unidades;
  var marca;
  var fabricante;
  var contador;
  var banderaAlcoholBarato;
  var precioAlcoholBarato;
  var unidadAlcoholBarato;
  var fabricanteAlcoholBarato;
  var contadorAlcohol;
  var acumuladorAlcohol;

  banderaAlcoholBarato = 0;
  unidadAlcoholBarato = 0;
  contadorAlcohol = 0;
  acumuladorAlcohol = 0;

  contador = 0;

  while(contador < 5)
  {
  	productoIngresado = prompt("ingrese producto");

  	while(productoIngresado != "barbijo" && productoIngresado != "jabon" && productoIngresado != "alcohol")
  	{
  		productoIngresado = prompt("producto no valido");
  	}

  	precio = prompt("ingrese el valor del producto (entre 100 y 300)");
  	precio = parseInt(precio);

  	while(precio < 100 || precio > 300)
  	{
  		precio = prompt("Error, reingrese su valor");
  		precio = parseInt(precio);
  	}

  	unidades = prompt("ingrese cantidad de unidades");
  	unidades = parseInt(unidades);

  	while(unidades < 1 || unidades > 1000)
  	{
  		unidades = prompt(" error, reingrese cantidad de unidades");
  		unidades = parseInt(unidades);
  	}

  	marca = prompt("ingrese la marca del producto");
  	fabricante = prompt("ingrese el fabricante");

  	//a)

  	if(productoIngresado == "alcohol")
  	{
  		acumuladorAlcohol = acumuladorAlcohol + unidades;
  		contadorAlcohol++;

  		if(precio < precioAlcoholBarato || banderaAlcoholBarato == 0)
  		{
  			precioAlcoholBarato = precio;
  			unidadAlcoholBarato = unidades;
  			fabricanteAlcoholBarato = fabricante;
  			banderaAlcoholBarato = 1;

  		}

  	}



  	contador++;

  }

  document.write("el alcohol mas barato sale " + precioAlcoholBarato + " y compro " + unidadAlcoholBarato + " unidades y el fabricante es " + fabricanteAlcoholBarato + "<br>");

}
*/