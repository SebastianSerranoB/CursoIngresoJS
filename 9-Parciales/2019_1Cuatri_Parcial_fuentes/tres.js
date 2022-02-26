/* Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id. */
function mostrar()
{
    let precioIngresado;
    let descuento;
    let precioFinal;

    precioIngresado = prompt("Ingrese el precio: ");
    precioIngresado = parseInt(precioIngresado);

    descuento = prompt("Ingrese el porcentaje de descuento: ");
    descuento = parseFloat(descuento);

    precioFinal = precioIngresado -(precioIngresado * descuento / 100);

    elPrecioFinal.value = "El precio final con un descuento de: " + descuento + "% es: $" + precioFinal + ".";
}
