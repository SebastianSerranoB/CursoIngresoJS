/*Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ". */

function mostrar()
{
  let nombreUno;
  let pesoUno;
  let nombreDos;
  let pesoDos;
  let pesoEnConjunto;
  let promedioDePeso;

  nombreUno = prompt("Ingrese su nombre: ");
  pesoUno = prompt("Ingrese su peso");
  pesoUno = parseFloat(pesoUno);

  nombreDos = prompt("Ingrese el nombre de su pareja: ");
  pesoDos = prompt("Ingrese el peso de su pareja");
  pesoDos = parseFloat(pesoDos);

  pesoEnConjunto = pesoUno + pesoDos;
  promedioDePeso = pesoEnConjunto / 2;

  alert("Ustedes se llaman : " + nombreUno + " y " + nombreDos + " y pesan: " + pesoUno + " y " + pesoDos + " kilos " +
    ", que sumados son: " + pesoEnConjunto +  " kilos " + " y el promedio de peso es: " + promedioDePeso + " kilos");

}
