/* Sebastian Serrano - division Z
- Tp  3

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let centigrados;
    let texto;

    fahrenheit = document.getElementById("txtIdTemperatura").value;
    fahrenheit = parseFloat(fahrenheit);

    centigrados = (fahrenheit - 32) * 5/9 ;

    texto = fahrenheit + " grados fahrenheit son " + centigrados + " centigrados";

    alert(texto);

}

function CentigradosFahrenheit () 
{ 
    let centigrados;
    let fahrenheit;
    let texto;

    centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseFloat(centigrados);

    fahrenheit = (centigrados * 9/5) + 32;

    texto = centigrados + " grados centigrados son " + fahrenheit + " fahrenheit";

    alert(texto);
	
}
