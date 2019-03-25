
var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const serieFibonacci = {
    descripcion: "Algoritmo de Fibonacci",
    sumFibonacci: function(){
        
        const numAureo1 = (1 + Math.sqrt(5))/2;
        const numAureo2 = (1 - Math.sqrt(5))/2;
        var n = 100;
        var sum = 1;
        
        for (k = 1; k <= n; k++) {
            sum = Math.ceil((Math.pow(numAureo1,12) - Math.pow(numAureo2,12))/Math.sqrt(5));
        }
        resultado.value = sum;
    }
}


boton.addEventListener("click",serieFibonacci.sumFibonacci);