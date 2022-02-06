//rompecocos

function mostrar()

{   let diametroMayor;
    let diametroMenor;

    let catetoCorto;
    let catetoLargo;
    
    let hipotenusaCortaAlCuadrado;
    let hipotenusaCorta;
    let hipotenusaLargaAlCuadrado;
    let hipotenusaLarga;
    
    let perimetro;
    let areaTotal;
    let porcentajeArea;

    let varillaPlastico;
    let papel;

    let varillaMetros;
    let papelMetros;

    let resultadoPapel;
    let resultadoVarilla;
    
    let texto;

    diametroMayor = prompt("ingrese medida del diametro mayor");
    diametroMayor = parseFloat(diametroMayor);
    
    diametroMenor = prompt("ingrese medida del diametro menor");
    diametroMenor = parseFloat(diametroMenor);

    catetoCorto = diametroMenor / 2;
    hipotenusaCortaAlCuadrado = (catetoCorto)**2 + (catetoCorto)**2;
    hipotenusaCorta = Math.sqrt(hipotenusaCortaAlCuadrado);

    catetoLargo = diametroMayor - catetoCorto;
    hipotenusaLargaAlCuadrado = (catetoLargo)**2 + (catetoLargo)**2;
    hipotenusaLarga = Math.sqrt(hipotenusaLargaAlCuadrado);

    perimetro = (hipotenusaCorta * 2) + (hipotenusaLarga*2);
   
    varillaPlastico = perimetro + diametroMayor + diametroMenor;
    varillaMetros = varillaPlastico / 100;

    areaTotal = (diametroMayor * diametroMenor) /2;
    porcentajeArea = areaTotal * 10 /100;
    
    papel = areaTotal + porcentajeArea;
    papelMetros = papel / 100;

    resultadoPapel = papelMetros * 10;
    resultadoVarilla = varillaMetros * 10;

    texto = "Para la construccion en masa de 10 cometas se necesitan " + resultadoVarilla + " metros de varillas " +
    "y " + resultadoPapel + " metros de papel";
     
    alert(texto);
    
}