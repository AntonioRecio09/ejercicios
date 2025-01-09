function ejercicio1do() {
    let res="con do while <br>";
    let i = -10;
    do {
        res = res + i + " ";
        i++;
    } while (i<=10);
    document.getElementById("resp1").innerHTML = res;
}


function ejercicio1for() {
    let res = "";
    for (let index = -10; index <= 10; index++){

        res = res + index + " ";
    }
    document.getElementById("resp1").innerHTML = res; 
}

