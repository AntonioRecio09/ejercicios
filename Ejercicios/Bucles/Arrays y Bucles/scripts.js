function ej1() {
    let n1 = document.getElementById("number1").value;
    let res = " ";
    for (let i = 0; i < n1; i++) {
        let alea = Math.ceil(Math.random("")*20);
        res += alea + " ";
    }
    document.getElementById("resp1").innerHTML = res;
}

function ej2() {
    let n2 = document.getElementById("number2").value;
    const sin = [];
    let i = 0;
    while (i<n2) {
        
        let alea = Math.ceil(Math.random()*20);

        if (sin.includes(alea)){
            continue;
        } else {
            sin[i] = alea;
            i++;
        }
    }
    document.getElementById("resp2").innerHTML = sin.toString();
}

