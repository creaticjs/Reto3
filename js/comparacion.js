function calcular() {

    var media=0;
    var sumatoria = 0;
    var menor;
    var mayor = 0; 
    var num = 0;
    var n1 = [];
    var j=0;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var resultado = document.getElementById("resultado");

    for (n = 1; n <= cantidad; n++) {

        num = parseInt(prompt("Ingrese el numero "+ n));
        sumatoria = sumatoria + num;
        if (num >= mayor) {
            mayor = num;
        }
        
        n1.push(num);

    }
    
    menor = n1[0];
    for (var i of n1) {
        if (i[j]<=menor) {
            menor = i[j];
        }
        j++;
    }
    
    media = sumatoria / cantidad;
              
    resultado.value = "Media = " + media + ", Menor = " + menor + ", Mayor = " + mayor;
    

}