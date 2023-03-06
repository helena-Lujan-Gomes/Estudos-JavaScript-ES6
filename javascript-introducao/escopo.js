'use strict' //impede que certos erros aconteçam
var carro = 'Fusca';

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined


if(true) {
  let mes = 'Dezembro'
  console.log(mes);
}

{
  var carro2 = 'Fusca 2';
  const ano = 2018;
}
//console.log(carro2);
//console.log(ano);

var i = 50;

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i * 10)

const semana = 'Sexta'
// semana = 'Quinta'

console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro',
}

data.ano = 2019;
data.dia = 25;


//EXERCÍCIO
// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);
//Var não é uma variável, ela é uma palavra chave para criar variável. Além disso, foi criado um escopo de bloco {}, então const e let não vaza, por isso não consegue acessar eles do lado de fora. Deveria colocar o console.log dentro do escopo de bloco

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  //const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

/*const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total); */
