/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */




function mostrar()
{
  let productoIngresado;
  let cantidadDeBolsas;
  let precioPorBolsa;
  
  let respuesta;

  let acumuladorBolsasGenerico;
  let acumuladorPrecioGenerico;
  let acumuladorBolsasCal;
  let acumuladorBolsasCemento;
  let acumuladorBolsasArena;
  let tipoConMasBolsas;

  let acumuladorPrecioArena;
  let acumuladorPrecioCemento;
  let acumuladorPrecioCal;
  let tipoConMayorPrecio;
  
  let totalBruto;
  let totalDescontado;
  let descuentoBolsas;

  acumuladorBolsasGenerico = 0;
  acumuladorPrecioGenerico = 0;
  acumuladorBolsasArena = 0;
  acumuladorBolsasCal = 0;
  acumuladorBolsasCemento = 0;
  tipoConMasBolsas = 0;

  tipoConMayorPrecio = 0;
  acumuladorPrecioArena = 0;
  acumuladorPrecioCemento = 0;
  acumuladorPrecioCal = 0;
  

  
  respuesta = true;
  while(respuesta)
  {
    productoIngresado = prompt("Ingrese un producto: ").toLowerCase();
    while(productoIngresado != "arena" && productoIngresado != "cal" && productoIngresado != "cemento")
    {
      productoIngresado = prompt("Invalido , ingrese otro producto(cal, arena o cemento)").toLowerCase();
    }
    cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas requeridas: ");
    cantidadDeBolsas = parseInt(cantidadDeBolsas);
    while(cantidadDeBolsas < 1)
    {
      cantidadDeBolsas = prompt("Error, ingrese cantidad de bolsas(> 0 )");
      cantidadDeBolsas = parseInt(cantidadDeBolsas);
    }
    precioPorBolsa = prompt("Ingrese el precio por bolsa: "),
    precioPorBolsa = parseFloat(precioPorBolsa);
    while(precioPorBolsa < 1)
    {
      precioPorBolsa = prompt("Error, reingrese el precio(> 0)");
      precioPorBolsa = parseFloat(precioPorBolsa);
    }
   
    acumuladorBolsasGenerico = acumuladorBolsasGenerico + cantidadDeBolsas;
    acumuladorPrecioGenerico = acumuladorPrecioGenerico + precioPorBolsa;
    switch(productoIngresado)
    {
        case "arena":
          acumuladorBolsasArena = acumuladorBolsasArena + cantidadDeBolsas;
          acumuladorPrecioArena = acumuladorPrecioArena + precioPorBolsa;  
        break;
        case "cal":
          acumuladorBolsasCal = acumuladorBolsasCal + cantidadDeBolsas;
          acumuladorPrecioCal = acumuladorPrecioCal + precioPorBolsa;
        break;
        case "cemento":
          acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadDeBolsas;
          acumuladorPrecioCemento = acumuladorPrecioCemento + precioPorBolsa;
        break;
    }


    respuesta = confirm("¿Desea ingresar otro producto?");
   }

  totalBruto = acumuladorBolsasGenerico * precioPorBolsa;

  if(acumuladorBolsasGenerico > 30)
  {
    descuentoBolsas = 0.25;
  }
  else
  {
    if(acumuladorBolsasGenerico > 10)
    {
      descuentoBolsas = 0.15;
    }
  }
  totalDescontado = totalBruto - (totalBruto * descuentoBolsas);

  if(acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento)
  {
    tipoConMasBolsas = "arena";
  }
  else
  {
    if(acumuladorBolsasCal > acumuladorBolsasCemento)
    {
      tipoConMasBolsas = "cal";
    }
    else
    {
      tipoConMasBolsas = "cemento";
    }
  }
  if(acumuladorPrecioArena > acumuladorPrecioCemento && acumuladorPrecioArena > acumuladorPrecioCal)
  {
    tipoConMayorPrecio = "arena";
  }
  else
  {
    if(acumuladorPrecioCal > acumuladorPrecioCemento)
    {
      tipoConMayorPrecio = "cal";
    }
    else
    {
      tipoConMayorPrecio = "cemento";
    }
  }

  document.write("El precio total bruto sin descuento es de: " + totalBruto + "<br>");
  if(acumuladorBolsasGenerico > 10)
  {
    document.write("El precio total con descuento es de: " + totalDescontado + "<br>");
  }
  else
  {
    document.write("No se realizo ningun descuento.");
  }
  document.write("El tipo de bolsa mas pedido es: " + tipoConMasBolsas + "<br>");
  document.write("El tipo de bolsa mas caro es: " + tipoConMayorPrecio + "<br>");

}


