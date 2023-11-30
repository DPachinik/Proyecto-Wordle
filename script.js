let intentos = 6;
let palabra = "APPLE";
const Button = document.getElementById("guess-button");
Button.addEventListener("click", intentar);
console.log(palabra);



function intentar(){
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        console.log("GANASTE!");
        terminar("<h1>GANASTE!</h1>");
        return
    }
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "green";
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {
            console.log(INTENTO[i], "GRIS");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN);
     }
     GRID.appendChild(ROW);
	 intentos= intentos-1;
    if (intentos==0){
        console.log("PERDISTE!");
        Button.style.display="none";
        terminar("<h1>PERDISTE!</h1>");
    }
}
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
function terminar(mensaje){
    const INPUT= document.getElementById("guess-input");
    INPUT.disabled= true;
    Button.disabled= true;
    let contenedor= document.getElementById("guesses");
    contenedor.innerHTML= mensaje;
}