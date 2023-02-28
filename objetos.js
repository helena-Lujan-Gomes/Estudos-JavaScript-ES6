var pessoa = {
  nome: 'Helena',
  idade: 26,
}
console.log(pessoa.idade);

var quadrado = {
  lados:4,
  area: function(lado) { //pode ou não ter 'function' area:(lado){}
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(6));

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}
menu.backgroundColor = '#000';
menu.color = 'blue';
menu.esconder = function(){
  console.log('Escondi')
}
var bg = menu.backgroundColor;

// EXERCÍCIO
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'Helena',
  sobrenome: 'Gomes',
  idade: '26',
  cidade: 'São Paulo',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'preto',
  idade: '10',
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}





