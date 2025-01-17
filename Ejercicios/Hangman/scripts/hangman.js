let word; // variable para la palabra secreta
let secret; // variable para la mostrar guiones y letras para el juego
let words; // array con todas las palabras del fichero
let tries = 0; // variable para guardar el número de intentos del juego
const letters = []; //array para guardar las letras que elige el jugador

// va la página de fin indicando que el jugador ha perdido y la palabra secreta
function lose() {
    window.location.href = "win.html?win=0&word=" + word; 
}

// va la página de fin indicando que el jugador ha ganado y la palabra secreta
function win() {
    window.location.href = "win.html?win=1&word=" + word; 
}

// función que se ejecuta al cargar la página
window.onload = function () {
    // leer el fichero con todas las palabras y hacer split en un array
    words = document.getElementById("allWords").contentWindow.document.body.childNodes[0].innerHTML.split(" ");
    
    // TODO: iniciar juego
    tries = 0;
    letters.length = 0;
    pickWord();
    getSecret();
    document.getElementById("secret").innerText = secret;
    createButtons();
}

// fuerza la recarga de la página en la navegación 
window.onbeforeunload = function() {
    window.location.reload(true);
}

// función para crear un botón para cada letra del abecedario inglés
// cada botón pasará su letra a la función guessLetter(this) en el evento onclick
function createButtons() {

    document.getElementById("letters").innerHTML = "";

    for (let index = 10; index < 36; index++) {
        let btn = document.createElement("button");
        let letter = index.toString(36);
        btn.innerText = letter;
        btn.setAttribute("onclick", "guessLetter(this)");
        document.getElementById("letters").appendChild(btn);
    }

}

// TODO: función que sume un intento, valide si se superan los 8 intentos
// Si se superan pierde la partida
// si no, cambia la imagen del juego para que vaya apareciendo la silueta del ahorcado

function fail() {
    tries++;
    if (tries >= 8) {
        lose();
    } else {
        document.getElementById("playImage").src = "images/" + tries + ".jpg";
    } 
   }

// TODO: función para elegir al azar una de las palabras del array words que tenga al menos 4 letras
function pickWord() {
    do {
        let i = Math.floor(Math.random()*words.length);
        word = words[i];
        
    } while (word.length<4);
    
}

// TODO: función para obtener la palabra oculta para mostrar en el juego (secret)
// cada letra la palabra secreta (word) se reemplazará por un guión 
// las letras (letters) que elija el jugador en el juego aparecerán en su posición
function getSecret() {
    secret = "";
    for (let i = 0; i < word.length; i++) {
        if(letters.includes(word[i])){
            secret += word[i];
        } else {
            secret += "- ";
        }
    }
}

// TODO: función para comprobar si la letra seleccionada por el jugador está o no en la palabra
// recibe como parámetro el botón pulsado por el jugador (cada botón es una letra)
// se toma la letra del botón
// se añade la letra al array con las letras seleccionadas por el jugador
// Si está se sustituirá el guión (o guiones) correpondiente por la letra. 
//      Si la palabra se ha descubierto por completo el jugador gana
//      Si no el jugador sigue jugando
// Si no se aumenta el número de intentos fallidos (tries), se actualiza la imagen del juego y si se superan los 8 intentos el jugador pierde
// El botón quedará deshabilitado
function guessLetter(btn) {
    let l = btn.innerText;
    letters.push(l);
    if (word.includes(l)) {
        getSecret();
        document.getElementById("secret").innerText = secret;
        if (secret==word) {
            win();
        }
    } else {
        fail();
    }
    btn.disabled=true;
}
