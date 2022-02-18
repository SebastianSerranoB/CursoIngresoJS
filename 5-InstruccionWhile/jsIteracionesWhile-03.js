/* Sebastian Serrano
   Division Z
   while ej 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let claveValida;

	claveValida = "utn750";
	
	claveIngresada = prompt(" Ingrese la clave: ");

	while(claveIngresada != claveValida)
	{
		
		 claveIngresada = prompt("Clave incorrecta, intente nuevamente: ");

	}
	
}
