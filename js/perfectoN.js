var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const numerosPerfecto = {
    descripcion: "Encuentra los tres primeros numeros perfectos",
    perfectos: function(){

        var N = parseInt(document.getElementById("numero").value);
        var i=0;
        var j;
        var num=1;
        var divisores = [];
        var numPerfecto = [];
        var sum;
        var m = 0;
        var c;
        var div;
        var i=0;
        var p = " ";
        
        while (m<=N) {
            sum = 0;
            c = 0;
            for (k = 1; k < num; k++) {
                div = num % k;
                if (div == 0) {
                    divisores[c]=k;
                    c++;
                }  
            }
            
            j = 0;
            if (c>0) {
                for (l of divisores) {
                    sum = sum + divisores[j];
                    j++;
                }
                console.log("suma del numero",num);
                console.log(divisores);
                console.log(sum);
            }

            j = 0;
            if (c>0) {
                for (l of divisores) {
                    divisores[j] = 0;
                    j++;
                }
                
            }
                  
            if (sum == num) {
                numPerfecto[i] = num;
                i++;
            }

            
            m++;
            num++;
        }

        j = 0;
        for (l of numPerfecto) {
            p = p + numPerfecto[j] + ", ";
            j++;
        }

        resultado.value = p;
    }

    

    
}


boton.addEventListener("click",numerosPerfecto.perfectos);