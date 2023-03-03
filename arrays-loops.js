var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

//var ultimoItem = videoGames.pop(); *puxa último item e depois exclui da lista
//videoGames.push('3DS');

for (var numero = 0; numero < 4; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
}

for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4') {
    break;
  }
}

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva'];
frutas.forEach(function(fruta, index, array) {
  console.log(fruta, index, array)
})

//prof não aconselha fazer da forma abaixo
var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}

//EXERCÍCIO
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i< brasilCampeao.length; i++) {
  console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];

