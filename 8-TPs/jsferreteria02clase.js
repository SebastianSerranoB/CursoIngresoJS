

/* Serrano Sebastian -Division Z
- TP 2

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   
    let largo,
    let ancho,
    let perimetro,
    let alambre,

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    perimetro = ancho + largo;
    alambre = perimetro * 3;

    alert("La cantidad necesaria es de: " + alambre);

} // no sucede nada , me falta el dato del radio... pero necesito el radio para esto?
function Circulo () 
{  
    let radio;
    let perimetro;
    let alambre;
    let cantidadDeAlambre;
    let texto;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    perimetro = 2 * math.pi * radio; //como se utiliza correctamente?
    cantidadDeAlambre = 3;
    alambre = perimetro * cantidadDeAlambre;
    
    texto = "la cantidad necesaria es de " + alambre;

    alert(texto);
     
    // como calculamos el perimetro del circulo en este caso ?
    // ademas me estan quedando afuera largo y ancho , intuyo hay que usarlos
}
function Materiales () 
{   
    let largo;
    let ancho;
    let superficie;
    let cemento;
    let cal;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    superficie = largo * ancho; // base.altura
    cemento = superficie * 2;
    cal = superficie * 3;

    alert("se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal");
	
}
// 2 cem y 3 cal . 1m^2