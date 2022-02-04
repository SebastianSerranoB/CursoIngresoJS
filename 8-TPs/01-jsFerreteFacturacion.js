/* Serrano Sebastian -Division Z
- TP 1


/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
    let precioUno;
    let precioDos;
    let precioTres;
    let total;

    precioUno = document.getElementById("txtIdPrecioUno").valor;
    precioUno = parseFloat(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").valor;
    precioDos = parseFloat(precioDos); 

    precioTres = document.getElementById("txtIdPrecioTres").valor;
    precioTres = parseFloat(precioTres);

    total = precioUno + precioDos + precioTres;

    alert("el total es: " + total); 
	
}

function Promedio () 
{  
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = document.getElementById("txtIdPrecioUno").valor;
    precioUno = parseFloat(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").valor;
    precioDos = parseFloat(precioDos); 

    precioTres = document.getElementById("txtIdPrecioTres").valor;
    precioTres = parseFloat(precioTres);

    promedio = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio es: " + promedio);
	
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let iva;
    let bruto;
    let precioFinal;

    precioUno = document.getElementById("txtIdPrecioUno").valor;
    precioUno = parseFloat(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").valor;
    precioDos = parseFloat(precioDos); 

    precioTres = document.getElementById("txtIdPrecioTres").valor;
    precioTres = parseFloat(precioTres);

    bruto = precioUno + precioDos + precioTres;  
    iva = bruto * 21 / 100 ;
    precioFinal = bruto + iva;

    alert("El precio final es de: " + precioFinal);
	
}

// me tira el NaN en los 3 casos , creo que la logica del codigo es correcta.