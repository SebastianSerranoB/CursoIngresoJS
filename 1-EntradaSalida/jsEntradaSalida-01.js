function mostrar()

{   let diametroMayor;
    let diametroMenor;
    
    let ladoMayor;
    let ladoMenor;

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

    ladoMayor = prompt("ingrese medida del lado mayor");
    ladoMayor = parseFloat(ladoMayor)
    
    ladoMenor = prompt("ingrese medida del lado menor");
    ladoMenor = parseFloat(ladoMenor);

    diametroMayor = prompt("ingrese medida del diametro mayor");
    diametroMayor = parseFloat(diametroMayor);
    
    diametroMenor = prompt("ingrese medida del diametro menor");
    diametroMenor = parseFloat(diametroMenor);

    perimetro = (ladoMayor + ladoMenor) * 2 ;
   
    varillaPlastico = perimetro + diametroMayor + diametroMenor;
    varillaMetros = varillaPlastico * 100;

    areaTotal = (diametroMayor * diametroMenor) /2;
    porcentajeArea = areaTotal * 10 /100;
    
    papel = areaTotal + porcentajeArea;
    papelMetros = papel * 100;

    resultadoPapel = papelMetros * 10;
    resultadoVarilla = varillaMetros * 10;

    texto = "Para la construccion en masa de 10 cometas se necesitan " + resultadoVarilla + " metros de varillas " +
    "y " + resultadoPapel + " metros de papel";
     
    alert(texto);
    
}