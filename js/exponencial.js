
var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const exponencial = {
    descripcion: "Sumatoria tomando los valores de 1 a 100 para un valor de x dado",
    exponente: function(){
        var x = parseInt(document.getElementById("valorX").value);
        var n = 100;
        var sum = 1;
        
        for (k = 1; k <= n; k++) {
            sum = sum + Math.pow(x,k)/k;
        }
        resultado.value = sum;
    }
}


boton.addEventListener("click",exponencial.exponente);