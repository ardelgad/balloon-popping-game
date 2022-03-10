// tu código aquí

// tengo que crear una variable que guarde el numero de globos petados
//tengo que hacer que si paso el mouse por encima los globos cambien el color del globo, que salga pop, que augmente la variable anterior y comprobar si estan todos petados

let pop = 0;

//Para saber cuantos globos hay selecciono el contenedor de los globos y veo su length
let balloons = document.querySelectorAll('div.balloon')
let totalBALLOONS = balloons.length

//Para cada globo
balloons.forEach( (balloon) => {
    //cuando pase el mouse por encima va a hacer la funcion popBallon que esta mas abajo
    balloon.addEventListener('mouseover', popBalloon)
})

function popBalloon(e) {
    //cambio el color del fondo
    e.target.style.backgroundColor = "#ededed";
    //le agrego un mensaje
    e.target.textContent = "POP!";
    //añado 1 al contador de globos
    pop++;
    console.log(pop);
   //Necesito quitar el evento una vez haya pasado por encima de un globo poque si sumara en el contador de pops si paso el mouse por el de nuevo
    e.target.removeEventListener('mouseover', popBalloon)

    //miro si he petado todos los globos
    checkPops()
}




//Cuando llegue al numero maximo de globos que salga un mensaje felicitandote

function checkPops(){
    //Si he petado todos los globos entro aqui
    if(pop == totalBALLOONS) {

        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
        console.log("Has explotado todos los globos");
    }
}