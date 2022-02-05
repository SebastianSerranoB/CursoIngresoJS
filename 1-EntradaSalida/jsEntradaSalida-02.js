/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
/*function Mostrar()
{

	
	let nombre;         //declaramos un espacio en la memoria del computadorn, la variable nombre
					   // le asignamos , la inicializamos con el string "cadena alfanumerica"
						//alert(nombre);      // a la funcion predefinida por el lenguaje le enviamos la variable nombre

						// idealmente let nombre = "messi"; separarlo en dos lineas o escribirlo en una 
						// depende
						// dos barras  son comentario , el programa no las ejecuta , podemos dejar
						// en suspenso una linea de codigo para probar otra sin tener que eliminarla,
	nombre = prompt("ingrese su nombre") ;
	

alert(nombre); // quilombo con las barras aca

} 



  

		//prompt es tambien una funcion nativa de js , nos da una ventana emergente pero nos permite escribir un
				// dato en esa ventana y me permite darle ok o cancelar luego nos devuelve el dat}


/* Serrano Sebastian -Division Z
-Ejercicio E/S 02

/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

/*function mostrar()
{	
	let nombre;
	nombre = prompt("ingrese su nombre");

	alert(nombre);
}
*/
function Precios()
{ 
				let productoUno;
				let productoDos;
				let productoTres;
				let bruto;
				let iva
				let precioIva;
				let promedio;
				let cantPromediantes;
				let descuento;
				let porcentajeDescontado;
				let descontado;
				let precioFinal;
				let texto;
		  
				productoUno = prompt("ingrese el precio del primer producto");
				productoUno = parseFloat(productoUno);
				productoDos = prompt("ingrese el precio del segundo producto");
				productoDos = parseFloat(productoDos);
				productoTres = prompt("ingrese el precio del tercer producto");
				productoTres = parseFloat(productoTres);
			  
				porcentajeDescontado = prompt("ingrese un porcentaje a descontar");
				porcentajeDescontado = parseFloat(porcentajeDescontado);
		  
				bruto = productoUno + productoDos + productoTres;
		  
				cantPromediantes = 3;
				promedio = (productoUno + productoDos + productoTres)/cantPromediantes;
		  
				iva = 21;
				precioIva = bruto * iva /100;
				precioFinal = bruto + precioIva;
			  
				
				descuento = precioFinal * porcentajeDescontado /100;
				descontado = precioFinal - descuento;
		  
				texto = "El precio en bruto es de " + bruto + ", el promedio del bruto es " + promedio + ", el monto total con iva es " + precioFinal + " y el precio final descontado es " + descontado);
				
				alert(texto);
		  
			} 