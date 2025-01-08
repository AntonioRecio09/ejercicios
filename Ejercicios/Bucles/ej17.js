function ejercicio1() {
    let cuenta = 10;
    while(cuenta<=20){
        document.getElementById("resp1").innerHTML += cuenta + "<br>";
        cuenta++;
    }
}


function ejercicio2() {
    let pares = 2;
    while(pares<=20){
        if(pares % 2 == 0) {
        document.getElementById("resp2").innerHTML += pares + " Es par " + "<br>";
        }
        pares++;
    }
}


function ejercicio3() {
    let num = document.getElementById("number3").value;
    let num1 = 0;
    while(num1<=10){
        document.getElementById("resp3").innerHTML += (num * num1) + "<br>";
        num1++;
    }
}


function ejercicio4() {
    let tabla = document.getElementById("tablaMultiplicar");
    let n = document.getElementById("number4").value;
    let i = 1;

    while (i <= 10) {

        let fila = tabla.insertRow(i-1);
        let col0 = fila.insertCell(0);
        let col1 = fila.insertCell(0);
        let col2 = fila.insertCell(0);
        let col3 = fila.insertCell(0);
        let col4 = fila.insertCell(0);
        
        
    }
}