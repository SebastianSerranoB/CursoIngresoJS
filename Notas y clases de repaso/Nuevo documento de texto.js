/* Sebastian Serrano -Division Z
Ejercicio 1
*/
/*Se piden tres nombre de producto, y los precios de cada producto ingresado,
 sacar el precio bruto(la suma de los tres sin impuestos), el promedio de los precios y el precio final total más iva(21%),
  pedir un porcentaje de descuento y aplicarlo al precio final , 
  mostrar todos los datos calculados e ingresados ​​por alerta. (solo una alerta en el código).
   Los datos se piden por prompt.

 */

   function mostrar()
   { 
       let productoUno;
       let productoDos;
       let productoTres;
       let bruto;
       let iva;
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
  