function apertou() {
  console.log("Apertou!");

}

function segurou() {
  console.log("Segurou!");

}

function soltou() {
  console.log("Soltou!");

}

document.addEventListener('keyup', soltou);

function soltou(event) {
  console.log(event.code); //mais específico ex: shiftleft
  console.log(event.key); //mais direto ex:shift
  console.log(event.shiftKey); //boolean
}

//funcion soltou(event) {
 // console.log('tecla apertada: ' + event.code);
 //console.log('shift? ' + event.shiftKey);
 //console.log('alt? ' + event.altKey);
 //console.log('--');

//}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);

