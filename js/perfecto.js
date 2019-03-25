var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const numeroPerfecto = {
    descripcion: "Encuentra los tres primeros numeros perfectos",
    perfectos: function(){

        var i=0;
        var j;
        var num=1;
        var divisores = [];
        var numPerfecto = [];
        var sum;
        var m = 0;
        var c;
        var div;
        
        while (m<29) {
            console.log("nmero");
            console.log(num);
            sum = 0;
            c = 0;
            for (k = 1; k < num; k++) {
                div = num % k;
                if (div == 0) {
                    divisores[k-1]=k;
                    c++;
                }  
            }
            
            j = 0;
            if (c>0) {
                for (l of divisores) {
                    sum = sum + divisores[j];
                    console.log(sum);
                    j++;
                }
            }
                  
            if (sum == num) {
                numPerfecto.push(num);
                console.log(numPerfecto[i]);
                i++;
            }
            m++;
            num++;
        }
        resultado.value = numPerfecto[0] + ", " + numPerfecto[1] + ", " + numPerfecto[2];
    }

    

    
}


boton.addEventListener("click",numeroPerfecto.perfectos);