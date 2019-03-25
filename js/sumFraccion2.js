
var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const sumFraccion2 = {
    descripcion: "Sumatoria de la serie n/2^n",
    calcular: function(){
        
        var n = parseInt(document.getElementById("valorN").value);
        var e;
        var sum = 0;
        
        for (i = 1; i <= n; i++) {
            e=Math.pow(2,i);
            sum = sum + i/e;
        }
        
        resultado.value = "El resultado de la serie es " + sum;
        
        
    }
}


boton.addEventListener("click",sumFraccion2.calcular);