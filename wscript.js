
let palabraObjetivo;
let intento=0;
async function traerPalabra() {
    const res = await fetch('https://random-word-api.herokuapp.com/word?length=5')
    const data = await res.json()
    palabraObjetivo = await data[0].toUpperCase()
}


traerPalabra()

console.log(palabraObjetivo)

const FILAS=document.querySelectorAll('.filas')
console.log(FILAS);

let boton=document.getElementById("guess-button");
    boton.addEventListener("click",checkPalabra);

function checkPalabra(){
    if(intento<FILAS.length){ 
        let INPUT= document.getElementById("guess-input");
        let palabraJugada=INPUT.value.toUpperCase();
        for(let i in palabraJugada){
            console.log(palabraJugada[i]);
            FILAS[intento].children[i].innerText=palabraJugada[i]; 
            if(palabraJugada[i]===palabraObjetivo[i]){
                FILAS[intento].children[i].classList.add('Correcto');
            }else if(palabraObjetivo.includes(palabraJugada[i])){ 
                FILAS[intento].children[i].classList.add('Pertenece');
            }else{
                FILAS[intento].children[i].classList.add('Error');    
            }
        } 
        if (palabraJugada === palabraObjetivo ) {
            console.log("GANASTE!");
            let Ganador=document.querySelector('h2');
            Ganador.innerHTML='GANASTE';
            return
        }
    }else if (intento<=FILAS.length){
            console.log("PERDISTE!");
            boton.style.display="none";
            let perdedor=document.querySelector('h3');
            perdedor.innerHTML="--GAME OVER--";
            return
    }

    intento++;    
}
let Informacion=document.getElementById('informacion');
Informacion.addEventListener("click",mensaje);
function mensaje(){
    
}
const Infor= document.getElementById('informacion');
const mensajeEmergente = document.getElementById('mensajeEmergente');

function mostrarMensaje() {
    mensajeEmergente.style.display = 'block';
}

function ocultarMensaje() {
    mensajeEmergente.style.display = 'none';
}
    Infor.addEventListener('mouseover', mostrarMensaje);
    Infor.addEventListener('mouseout', ocultarMensaje);

document.getElementById('recarga').addEventListener('click', function(event) {
    event.preventDefault();
    location.reload();
    });
    