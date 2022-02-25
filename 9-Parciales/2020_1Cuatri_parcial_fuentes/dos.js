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
    let precioPorBolsa;
    let cantidadDeBolsas;
    let respuesta;
    let descuento;
    let precioBruto;
    let totalBruto;
    let totalDescontado;
    let precioCal;
    let precioArena;
    let precioCemento;

    let acumuladorDeBolsas;
    let tipoMayorCantidadBolsas;
    let tipoMayorPrecio;
    
    let bolsasDeCal;
    let bolsasDeArena;
    let bolsasDeCemento;


    acumuladorDeBolsas = 0;
    bolsasDeCal = 0;
    bolsasDeArena = 0;
    bolsasDeCemento = 0;


    descuento = 1;
    totalBruto = 0;
  

    respuesta = true;

    while(respuesta == true)    // == true no es necesario,
    {
        productoIngresado = prompt("Ingrese un producto(cal, arena o cemento").toLowerCase();  //.toLowerCase() no es necesario ,
        while(productoIngresado != "cal" && productoIngresado != "arena" && productoIngresado != "cemento")
        {
            productoIngresado = prompt("Producto no valido: ingrese otro producto: ").toLowerCase();
        }

        precioPorBolsa = prompt("Ingrese el precio por bolsa: ");
        precioPorBolsa = parseFloat(precioPorBolsa);
        while(precioPorBolsa < 1)
        {
          precioPorBolsa = prompt("Precio no valido:ingrese otro: ");
          precioPorBolsa = parseFloat(precioPorBolsa);
        }

        cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas necesaria");
        cantidadDeBolsas = parseInt(cantidadDeBolsas);

        precioBruto = ( precioPorBolsa * cantidadDeBolsas);
        totalBruto = totalBruto + precioBruto;

        switch(productoIngresado)
          {
              case "cal":
                bolsasDeCal = bolsasDeCal + cantidadDeBolsas;
                precioCal = precioPorBolsa * bolsasDeCal;
              break;
              case "cemento":
                bolsasDeCemento = bolsasDeCemento + cantidadDeBolsas;
                precioCemento = precioPorBolsa * bolsasDeCemento;
              break; 
              case "arena":
                bolsasDeArena = bolsasDeArena + cantidadDeBolsas;
                precioArena = precioPorBolsa * bolsasDeArena;
              break;
          }
        
         
        acumuladorDeBolsas = acumuladorDeBolsas + cantidadDeBolsas;
        
        respuesta = confirm("¿Desea Ingresar otro producto?" );

    }

    if(acumuladorDeBolsas > 30)
    {
        descuento = 0.75;
 
    }
    else
    {
      if(cantidadDeBolsas > 10)
      {
        descuento = 0.85;
      }
    }
    
    if(bolsasDeArena > bolsasDeCal && bolsasDeArena > bolsasDeCemento)
    {
      tipoMayorCantidadBolsas = "Arena";     
    }
    else
    {
        if(bolsasDeCal > bolsasDeCemento)
        {
          tipoMayorCantidadBolsas = "Cal";
        }
        else
        {
          tipoMayorCantidadBolsas = "cemento";
        }
    }

    if(precioArena > precioCal && precioArena > precioCemento)
    {
      tipoMayorPrecio = "Arena";
    }
    else
    {
      if(precioCal > precioCemento)
      {
      tipoMayorPrecio = "Cal";
      }
      else
      {
        tipoMayorPrecio = "Cemento";
      }
    }
    

    totalDescontado = totalBruto * descuento;

    document.write("Importe bruto total: " + totalBruto + "$" + "<br>");
    if(descuento != 1)
    {
      document.write("El total con descuento es de: " + totalDescontado + "$" + "<br>");
    }
    document.write("El tipo con mayor cantidad de bolsas es: " + tipoMayorCantidadBolsas + "<br>");
    document.write("El tipo de bolsa mas caro es: " + tipoMayorPrecio + "$" + "<br>");
        

}
