/* Serrano Sebastian -Division Z
- TP 2


/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo()
{   
    let largo;
    let ancho;
    let perimetro;
    let alambre;
    let cantidadAlambre;
    let texto;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    perimetro = largo * 2 + ancho * 2;
    alambre = 3;
    cantidadAlambre = perimetro * alambre;
    texto = "la cantida necesaria es de " + cantidadAlambre;

    alert(texto);  

}

 function Circulo () 
 {  
     let radio;
     let perimetro;
     let alambre;
     let cantidadDeAlambre;
     let texto;
    
     radio = document.getElementById("txtIdRadio").value;
     radio = parseFloat(radio);
        
     perimetro = 2 * Math.PI * radio;               //como se utiliza correctamente? .. mayusculas
     cantidadDeAlambre = 3;
     alambre = perimetro * cantidadDeAlambre;
            
     texto = "la cantidad necesaria es de " + alambre;
        
     alert(texto);

}
// se ingresa el radio de un circulo y necesitamos el perimetro * 3
function Materiales()
{
    let largo;
    let ancho;
    let superficie;
    let bolsaCemento;
    let bolsaCal;
    let cemento;
    let cal;
    let texto;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    cemento = 2;
    cal = 3;

    superficie = largo * ancho; // base.altura
    bolsaCemento = superficie * cemento;
    bolsaCal = superficie * cal;

    texto = "se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " de cal para el contrapiso.";
        

    alert(texto);

}

/*perimetro = largo*2 + ancho*2
*/