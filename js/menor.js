var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const sumMenor = {
    descripcion: "Sumatoria de la serie n/2^n",
    calcular: function(){
        
        var num = parseInt(document.getElementById("numero").value);
        var N = 1;
        var r = 0;
        
        while (r < num) {
            r = r + N;
            N++;
        }
        
        resultado.value = N;
    }
}


boton.addEventListener("click",sumMenor.calcular);