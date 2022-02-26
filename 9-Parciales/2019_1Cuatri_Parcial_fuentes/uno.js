/*Enunciado:
Bienvenidos.
Realizar 
el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.*/
function mostrar()
{
    let lado;
    let perimetro;
    
    lado = prompt("Ingrese la medida en centimetros de un lado del triangulo");
    lado = parseFloat(lado);

    perimetro = lado * 3;

    alert("El perimetro del triangulo equilatero es de: " + perimetro + " centimetros");
}
