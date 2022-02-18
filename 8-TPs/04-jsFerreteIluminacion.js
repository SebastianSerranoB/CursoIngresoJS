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
//ahora con switch


/* En un principio pense en hacer los switchs (marca) y los if cantidad de lamparas pero creo que es mejor hacer
lo al reves switch cantidad de lamparas e if marcas , 
function CalcularPrecio()
{
    let cantidadDeLamparas;
    let marca;
    let bruto;
    let impuesto;
    let operacionImpuesto;
    let descuento;
    let operacionDescuento;
    let precioFinal;
    let mensaje;

    cantidadDeLamparas = txtIdCantidad.value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    
    marca = Marca.value;

    bruto = 35 * cantidadDeLamparas;
   

    switch(marca)
    {
        case "ArgentinaLuz":
            
            if(cantidadDeLamparas > 5)
            {
                descuento = bruto * 0.5;      
            }
            if(cantidadDeLamparas == 5)
            {
                descuento = bruto * 0.4;
            }
            if(cantidadDeLamparas == 4)
            {
                descuento = bruto * 25;
            }
            if(cantidadDeLamparas == 3)
            {
                descuento = bruto * 15;
            }
            else
            {
                precioFinal = bruto;
            }
        
        break;
            

            
        case "FelipeLamparaz":
            if(cantidadDeLamparas = 5)
            {}
            if(cantidadDeLamparas = 4)
            {}
            if(cantidadDeLamparas = 3)
            {}    
        
        break;
        
        default:          
            break;
            
    }

    operacionDescuento = bruto - descuento;
    precioFinal = operacionDescuento;
    
    txtIdprecioDescuento.value = precioFinal;

}
*/
/*
function CalcularPrecio()
{
    
    let cantidadDeLamparas;
    let marca;
    let precioBruto;
    let impuesto;
    let operacionImpuesto;
    let descuento;
    let operacionDescuento;
    let precioFinal;
    let mensaje;

    cantidadDeLamparas = txtIdCantidad.value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    
    marca = Marca.value;

    precioBruto = 35 * cantidadDeLamparas;

    switch(cantidadDeLamparas)
    {
        
        case 5:
            if(marca == "ArgentinaLuz")
            {}
            if(marca == "felipeLamparaz")
            {}
            else
            {
                precioFinal = precioBruto;
            }
            
                
        break;
        case 4:
        break;
        case 3:
        break;
        case 2:
        break;
        case 1:
        break;
        case 0:
        break;
        
        default:
        break;
    }

    operacionDescuento = precioBruto - descuento;
    precioFinal = operacionDescuento;
    
    
    txtIdprecioDescuento.value = precioFinal;

} 
*/

//// solo puede haber un if , que es para cuando el precio es mayor a 120
/*
function CalcularPrecio()
{
    let cantidadDeLamparas;
    let precioLampara;
    let precioBruto;
    let marcaComercial;
    let impuesto;
    let operacionImpuesto;
    let descuento;
    let operacionDescuento;
    let precioFinal;
    let mensaje;

    cantidadDeLamparas = txtIdCantidad.value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    
    marcaComercial = Marca.value;

    precioLampara = 35;

    precioBruto = precioLampara * cantidadDeLamparas;

    switch(marcaComercial)
    {
        case "ArgentinaLuz":
            switch(cantidadDeLamparas)
            {
                case 5:
                    descuento = 0.4;
                break;
                case 4:
                    descuento = 0.25;
                break;
                case 3:
                    descuento = 0.15;
                break;
                case 2:
                case 1:
                    descuento = 0;
                    
                break;
               
                default:
                    descuento = 0.5;
                break;
            }
        break;
        
        case "FelipeLamparaz":
            switch(cantidadDeLamparas)
            {   
                case 5:
                    descuento = 0.3;
                break;
                case 4:
                    descuento = 0.25;
                break;
                case 3:
                    descuento = 0.1;
                break;
                case 2:
                case 1:  
                    descuento = 0;             
                break;

                default:
                    descuento = 0.5;
                break;

            }
        break;

        
        default:
            switch(cantidadDeLamparas)
            {
                case 1:
                case 2:
                    descuento = 0
                break;
                case 3:
                    descuento = 0.05;
                break;
                case 4:
                    descuento = 0.2;
                break;
                case 5:
                    descuento = 0.3;
                break;

                default:
                    descuento = 0.5;
                break;
            }

        break;
        
    }

    operacionDescuento = precioBruto * descuento;
    precioFinal = precioBruto - operacionDescuento;

    impuesto = 0.10;
 
     if(precioFinal >= 120)
     {
         operacionImpuesto = precioFinal * impuesto;
         precioFinal = precioFinal + operacionImpuesto;
         precioFinal = precioFinal.toFixed(2);
         alert("Usted pago " + operacionImpuesto + "$ de IIBB");
     }
    
    txtIdprecioDescuento.value = precioFinal;

} Este anda bien pero todavia puede refactorizarse mejor
*/
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
 
 REFACTORIZADO UNA VEZ MAS
*/

function CalcularPrecio()
{
    let ingresoBruto;
    let precioFinal;
    let cantidadLamparas;
    let precioLamparas;
    let marcaComercial;
    let descuento;
    let tasaImpositiva;
    let cargaImpositiva;

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marcaComercial = Marca.value;

    precioLamparas = 35;

    ingresoBruto = precioLamparas * cantidadLamparas;

    descuento = 50;      // le asignamos un precio constante de 50 , en ves de asignarlo en el default, es simplemente otra manera.
    tasaImpositiva = 10;
    
    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            descuento = 0;        
        break;
        case 3:
            switch(marcaComercial)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                case "FelipeLamparas":
                    descuento = 10;
                break;
                default:
                    descuento = 5;
                break;
            }
        break;
        case 4:
            switch(marcaComercial)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                break;
                default:
                    descuento = 20;
                break;
            }
        case 5:
            switch(marcaComercial)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                break;
                default:
                    descuento = 30;
                break;
            }
        break;

        default:
        break;
    }

    precioFinal = ingresoBruto - (ingresoBruto * descuento / 100);

    if(precioFinal > 120)
    {
        cargaImpositiva = ingresoBruto * tasaImpositiva / 100;
        precioFinal = precioFinal + cargaImpositiva;

        alert("Usted pago: $" + cargaImpositiva + " de IIBB.");

    }

    txtIdprecioDescuento.value = "$" + precioFinal ;

}

