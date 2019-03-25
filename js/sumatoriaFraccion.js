
var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const sumFraccion = {
    descripcion: "Sumatoria de la serie 1/n",
    calcular: function(){
        
        var n = parseInt(document.getElementById("valorN").value);
        
        var sum = 0;
        
        for (i = 1; i <= n; i++) {
            sum = sum + 1/i;
        }
        
        resultado.value = "El resultado de la serie es " + sum;
        
        
    }
}


boton.addEventListener("click",sumFraccion.calcular);