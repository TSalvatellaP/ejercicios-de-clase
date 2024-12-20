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
const start = document.querySelector('.js-start');
const gamer = document.querySelector('.js-gamer1');
const computer = document.querySelector('.js-computer');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function moveAleatory () {
    const numRandom = getRandomNumber();
    console.log(numRandom);
    if (numRandom <= 3) {
        moveAleatory = stone;
    }
    if (numRandom => 7) {
        moveAleatory = paper;
    } else {
        moveAleatory = scissor;
    }

}



function handleClick(event) {
    event.preventDefault();
    const valueSelect = select.value;
    //console.log(valueSelect);
    //optionGame(valueSelect);
    //resultGame();
    
}

btn.addEventListener('click', handleClick);

