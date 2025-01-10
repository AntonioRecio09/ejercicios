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
    let res = "con for <br>";
    for (let index = -10; index <= 10; index++){

        res = res + index + " ";
    }
    document.getElementById("resp1").innerHTML = res; 
}

function ejercicio2do() {
    let res="con do while <br>";
    let i = 10;
    do {
        res = res + i + " ";
        i--;
    } while (i<=0);
    document.getElementById("resp2").innerHTML = res;
}

function ejercicio2for() {
    let res = "";
    for (let index = 0; index <= 10; index++) {
        res = index + " " + res;
    }
    res = "con for <br>" + res;
    document.getElementById("resp2").innerHTML = res; 
}

function ejercicio3() {condition
    let res = "";
    let sum = 0;
    for (let i = 3; i < 20; i += 3) {
        res += i + " ";
        sum = sum + i;
    }
    res = res + "<br>Suma: " + sum;
    
    document.getElementById("resp3").innerHTML = res; 
}

function ejercicio4() {
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    let sum = 0;

    for (let i = 0; index < n2; i++) {
        sum = sum + n1;
        
    }
    
    document.getElementById("resp4").innerHTML = sum; 
}

function ejercicio5() {
    let sum = 0;
    let max = 0;
    let min = 0;
    let res = "Números: ";
    for (let i = 0; i < 5; i++) {
        let n = Math.floor(Math.random()*100);
        res += n + " ";
        sum += n;

        if (n>max) {
            max
        } 

        if (n<min) {
            min
        }
    }
    
    res += "<br>Suma: " + sum;
    document.getElementById("resp5").innerHTML = res; 
}

function ejercicio6() {
    let n = 10; 
    let res = "";
    for (let n= 10; n<0 36; n++) {
        res += n.toString(36);
        
    }
    document.getElementById("resp6").innerHTML = res; 
}

function ejercicio7() {
    for (let i = 0; i < 10; i++) {
        const element = array[index];
        let n = Math.floor(Math.random()*26) + 10;
        let l = n.toString(36).toUpperCase();
        res += l + " ";
        if(l =='A' || l =='E' || l =='I' || l =='O' || l =='U'){
            count++;
        }
    }
    res += "<br>Vocales: " + count;
    res += "<br>Consonantes: " + (total - count);
    document.getElementById("resp7").innerHTML = res; 
    
}
