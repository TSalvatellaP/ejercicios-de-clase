/*Piedra papel, tijera
1. Crear html y css> select, boton, resultado y titles
2. Al arrancar la pagina> vamos a jugar
3. Crear numero aleatorio  de 1 y 9
    = o < 3 --->piedra
    = > 7 ----> papel
    si no ---. tijera
4. Comparar movimientos de la jugadora y el ordenador.
5. Traer las class al js
*/

const select = document.querySelector('.js-selector');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-start');
const h4_gamer = document.querySelector('.js-gamer1');
const h4_computer = document.querySelector('.js-computer');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    
    }

    //Resultado segun numero random generado max numero 10
function moveAleatory () {
    const numRandom = getRandomNumber(10);
   //console.log(numRandom);
    if (numRandom <= 3) {
       return "Piedra";
    }
    else if (numRandom >= 7) {
       return "Papel";
    } else {
        return "Tijera";
    }

}

//Generar una funcion que compare los resultados de gamer y computer

function compareResult(gamer, computer){
  console.log (gamer,computer);
    if (gamer === computer) {
        result.innerHTML = 'Empate';
    }
    else if ((gamer === "Piedra") && (computer === "Tijera") ||
        (gamer === "Papel") && computer === "Piedra" ||
        (gamer === "Tijera") &&computer === "Papel") {
            result.innerHTML = 'Ganaste';
    } 
    else{
    result.innerHTML = 'Perdiste';
    }
   
}


//Las funciones a las que llamo cuando doy click
function handleClick(event) {
    event.preventDefault();
    const valueSelect = select.value;
    const returnMoveAleatory = moveAleatory ();
    compareResult(valueSelect, returnMoveAleatory);
        //console.log(returnMoveAleatory);
    
    
}

btn.addEventListener('click', handleClick);

