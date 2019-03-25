
var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const maxComunDivisor = {
    descripcion: "Calcula el Maximo Comun Divisor de dos numeros",
    calcular: function(){
        
        var a = parseInt(document.getElementById("valorA").value);
        var b = parseInt(document.getElementById("valorB").value);
        var i = 1;
        var r = b;
        
        while (r != 0) {
            b = a % r;
            i++;
            a = r;
            r = b;
        }
        
        resultado.value = a;
    }
}


boton.addEventListener("click",maxComunDivisor.calcular);