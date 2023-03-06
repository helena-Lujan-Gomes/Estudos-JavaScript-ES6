var nome = "Helena";
var idade = 26;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = "Helena";
var sobrenome = "Gomes";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = "Helena fez " + gols + " gols";
console.log(frase);

var melhor = "teste";
var frase4 = 'Esse é o "melhor" jogo';
console.log(frase4);
console.log("Isso mesmo"); //pode passar string direto

var gol = 1001;
var frase1 = "Romário fez " + gol + " gols";
var frase2 = `Romário fez ${gol * 2} gols`;
console.log(frase2); // Utilizando Template String

//EXERCICIO
// Declare uma variável contendo uma string
var genero = "feminino";
console.log(typeof nome);

// Declare uma variável contendo um número dentro de uma string
var idade = "20";
console.log(typeof idade);

// Declare uma variável com a sua idade
var minhaIdade = 26;
console.log(minhaIdade);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = "Helena";
var sobrenome = "Gomes";
var nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
/*var frase = "It's time";*/
var frase = "It's time"; //colocamos \ antes de ' para funcionar
/*var frase = `It's time`;*/ //passando ``
console.log(frase);

// Verifique o tipo da variável que contém o seu nome
var verificarTipoNome = typeof nome;
console.log(verificarTipoNome);
