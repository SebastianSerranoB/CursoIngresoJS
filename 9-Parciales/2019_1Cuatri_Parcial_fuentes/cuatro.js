/*Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/
function mostrar()
{
    let numeroUno;
    let numeroDos;
    let numerosConcatenados;
    let resta;
    let mensaje;


    numeroUno = prompt("Ingrese un numero: ");
    numeroUno = parseFloat(numeroUno);
    numeroDos = prompt("Ingrese otro numero: ");
    numeroDos = parseFloat(numeroDos);

    if(numeroUno == numeroDos)
    {
        alert(numeroUno + " y " + numeroDos);
    }
    else
    {
        if(numeroUno > numeroDos)
        {
            resta = numeroUno - numeroDos;
            if(resta > 10)
            {
                mensaje = "la resta es: " + resta + " y supero al numero 10";
            }
            else
            {
                mensaje = resta;
            }

            alert(mensaje);
            
        }
        else
        {
            suma = numeroUno + numeroDos;
            alert(suma);
        }
    }
    
}
