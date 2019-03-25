function calcular() {

    var s=0; 
    var valor = parseInt(document.getElementById("salarioActual").value); 
    var resultado = document.getElementById("salario");

    if (valor >= 0 && valor <= 9000) {
        s = valor + (valor * 0.20);
    } 
    else if (valor >= 9001 && valor <= 15000){
        s = valor + (valor * 0.10);
    }
    else if (valor >= 15001 && valor <= 20000){
        s = valor + (valor * 0.05);
    }
    else if (valor >= 20000){
        s = valor;
    }
              
    resultado.value = "El nuevo salario es " + s;
    

}