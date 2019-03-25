
var boton = document.getElementById("boton");

const sumFraccion2 = {
    descripcion: "Sumatoria de la serie n/2^n",
    calcular: function(){
        
        var n = parseInt(document.getElementById("valorN").value);
        var r = " ";
        var t = "<tr></tr>";
        var sum = 0;
        
        for (i = 1; i <= n; i++) {
            r = r + "*";
            t = t + "<tr><td>" + r + "</td></tr>";
            
        }
        
    
        document.getElementById("tabla").innerHTML = t;
    }
}


boton.addEventListener("click",sumFraccion2.calcular);