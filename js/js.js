document.getElementById("calculer").onclick = calculImc;        
        
    function calculImc () {
        
    poids = document.getElementById("poids").value;
    taille = document.getElementById("taille").value;    
    
    imc = Math.round(poids*100 / (taille*taille)) / 100;
    
    console.log(imc);    
    maigre = "Vous êtes donc maigre";    
    normal = "Vous êtes donc dans la moyenne";
    surpoids = "Vous êtes donc en surpoids";    

    imca = "Votre IMC est de "+imc;

    if (imc < 18) {
        document.getElementById("imc1").innerHTML = imca;
        document.getElementById("sortie").innerHTML = maigre;
    } 
        
    else if (imc >= 18 && imc <= 24) {
        document.getElementById("imc1").innerHTML = imca;
        document.getElementById("sortie").innerHTML = normal;            
    } 
        
    else if (imc >= 25) {
        document.getElementById("imc1").innerHTML = imca;
        document.getElementById("sortie").innerHTML = surpoids;            
    }
}
