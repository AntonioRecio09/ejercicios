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
    
    let tablero = document.getElementById("tablero");
    crearTablero(tablero);
    
    
    let n2 = document.getElementById("number2").value;
    const sin = [];
    let i = 0;
    while (i<n2) {
        
        let alea = Math.ceil(Math.random()*20);
        
        if (sin.includes(alea)){
            continue;
        } else {
            sin[i] = alea;
            tablero.childNodes[alea-1].style.backgroundColor = "skyblue";
            i++;
        }
    }
    document.getElementById("resp2").innerHTML = sin.toString();
}

function crearTablero(tablero) {
    
    tablero.innerHTML = "";
    for (let i = 0; i < 20; i++){
        let numero = document.createElement("div");
        numero.style.float = "left";
        numero.style.border = "3px solid darkblue";
        numero.style.padding = "5px 15px";
        numero.style.margin = "3px";
        let p = document.getElementById("p");
        p.innerText = i+1;
        p.style.fontSize = "large";
        p.style.fontWeight = "bolder";
        p.style.color = "darkblue";
        numero.appendChild(p);
        
        tablero.appendChild(numero);
    }
    
}

function ej3() {
    let n3 = document.getElementById("number3").value;
    const sin = [];
    const repes = [];
    for (let i = 0; i < n3; i++) {
        
        let alea = Math.ceil(Math.random()*20);
        
        if (sin.includes(alea) && !repes.includes(alea)) {
                
            repes.push(alea);            
        }
        sin[i] = alea;
    }
        
    document.getElementById("resp3").innerHTML = sin.toString() + ">>>" + repes.toString();

}
