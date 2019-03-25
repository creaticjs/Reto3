
var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const numPrimo = {
    descripcion: "Determina si un numero es primo",
    calcular: function(){
        
        var num = parseInt(document.getElementById("numero").value);
        var divisor = 1;
        var c = 0;
        var modulo;
        
        for (i = 0; i < num; i++) {
            modulo = num % divisor;
            if (modulo == 0) {
                c++
            }  
            divisor++;
        }
        
        if (c == 2) {
            resultado.value = "El numero " + num + " es primo";
        } else {
            resultado.value = "El numero " + num + " no es primo";
        }
        
    }
}


boton.addEventListener("click",numPrimo.calcular);