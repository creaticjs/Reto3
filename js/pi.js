function calcular() {

    var s=0; 
    var num = parseInt(document.getElementById("numero").value); 
    var resultado = document.getElementById("numPI");

    for (n = 0; n <= num; n++) {
        s = s + Math.pow(-1,n)/(2*n + 1);
    }
       
    s = s*4;
              
    resultado.value = "Numero PI = " + s;
    

}