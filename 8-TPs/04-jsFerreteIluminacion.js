/* Sebastian Serrano -Division Z
T.P 4 */


/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y 
si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120 
 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadDeLamparas;
    let marca;
    let precioInicial;
    let precioFinal;
    let descuento;
    let operacionDescuento;
    let impuesto;
    let operacionImpuesto;

    marca = document.getElementById("Marca").value;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    
    precioInicial = 35 * cantidadDeLamparas;
   
    if(cantidadDeLamparas > 5)
    {   
        descuento = 0.5;
    }
    else
    {   if(cantidadDeLamparas == 5 && marca == "ArgentinaLuz")
        {
             descuento = 0.4;
        }
        else
        {   if(cantidadDeLamparas == 5 && marca != "ArgentinaLuz")
            {
                descuento = 0.3;
            }
            else
            {   if(cantidadDeLamparas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = 0.25;    
                }
                else
                {   if(cantidadDeLamparas == 4 && marca != "ArgentinaLuz"  && marca != "FelipeLamparas")
                    {
                        descuento = 0.2;
                    }
                    else
                    {   if(cantidadDeLamparas == 3 && marca == "ArgentinaLuz")
                        {
                            descuento = 0.15;
                        }
                        else
                        {   if(cantidadDeLamparas == 3 && marca == "FelipeLamparas")
                            {
                                descuento = 0.1;
                            }
                            else
                            {   if(cantidadDeLamparas == 3 && marca != "ArgentinaLuz" && marca != "FelipeLamparas")
                                {
                                  descuento = 0.05;  
                                }
                            }    
                        }
                    }
                }
            }
        }
    }
    operacionDescuento = precioInicial * descuento;
    precioFinal = precioInicial - operacionDescuento;

    impuesto = 0.10;

    if(precioFinal >= 120)
    {
        operacionImpuesto = precioFinal * impuesto;
        precioFinal = precioFinal + operacionImpuesto;
        alert("Usted pago " + operacionImpuesto + "$ de IIBB");
    }
    
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

}

/* la forma correcta de hacer una logica , un if/else/switch
es hacerlos todos en un mismo hilo , para que cuando de true , no pregunte por los demas
y no hagamos un uso ineficiente de los recursos, exigiendo al procesador ya que ejecutaria
un  if todas las veces 
hay que ser optimos con el uso del if , no preguntar innecesariamente, procesos innecesarios o que puedne obviarse
- para ciertos casos se anida asi , que es lo que estamos haciendo en este ejercicio , pero en general no se hace
asi sino que se utiliza el switch , esto es muuuuy rebuscado */

//Depurador f11 consola SUPERUTIL Debuggear , depurar
//Rehacer buscando velocidad