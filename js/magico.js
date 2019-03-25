var resultado = document.getElementById("resultado");
var boton = document.getElementById("boton");

const domingoPascua = {
    mes: " Marzo",
    dia: 31,
    pascua: function(){

        var a;
        var b;
        var c;
        var d;
        var e;
        var j=0;
        var result = " ";
        var n = [];
        var anio=1990;
        var diaAbril;

        for (var i = 0; i < 11; i++) {

            a = anio % 19;
            b = anio % 4;
            c = anio % 7;
            d = (19 * a + 24) % 30;
            e = (2 * b + 4 * c + 6 * d + 5) % 7;
            n.push(22 + d + e);
            anio++;
        }
        
        anio = 1990;
        for (k of n) {
            if (n[j]<=31) {
                result= result + "Dia "+ n[j] + domingoPascua.mes + " de " + anio + " ";
            }
            else if (n[j]>31) {
                diaAbril = n[j] - 31;
                result= result + "Dia "+ diaAbril + " Abril de " + anio + " ";
            }
            anio++;
            j++;
        }
        resultado.value = result;
    }

    
}


boton.addEventListener("click",domingoPascua.pascua);