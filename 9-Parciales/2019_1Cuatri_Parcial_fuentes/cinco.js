/*Enunciado:
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier
otro medio 5%
cualquier otro continente tiene un recargo del 20% */


function mostrar()
{
    let continenteIngresado;
    let cantidadDeDias;
    let precioPorDia;
    let descuento;
    let recargo;
    let medioDePago;
    let precioBruto;
    let precioFinalDescontado;
    let precioFinalRecargo;

    precioPorDia = 100;

    continenteIngresado = Marca.value;
    
    cantidadDeDias = prompt("Ingrese la cantidad de dias: ");
    cantidadDeDias = parseInt(cantidadDeDias);

    medioDePago = prompt("Ingrese el medio de pago(efectivo, debito o mercadoPago");


    switch(continenteIngresado)
    {
        case "America":
            if(medioDePago == "debito")
            {
                descuento = 60;
            }
            else
            {
                descuento = 50;
            }
        break;
        case "Africa":
            if(medioDePago == "efectivo" || medioDePago == "mercadoPago")
            {
                descuento = 75;
            }
            else
            {
                descuento = 60;
            }
        break;
        case "Europa":
            if(medioDePago == "debito")
            {
                descuento = 35;
            }
            else
            {
                if(medioDePago == "mercadoPago")
                {
                    descuento = 30;
                }
                else
                {
                    descuento = 25;
                }    
            }
        break;

        default:
            recargo = 20;
        break;
    }

    precioBruto = cantidadDeDias * precioPorDia;
    precioFinalDescontado = precioBruto -(precioBruto * descuento / 100);
    precioFinalRecargo = precioBruto + (precioBruto * recargo / 100);

    document.write()



}
