var idade = 2e-2;
//var idade = 2.5
// var idade = 2e10
// 2e2 (200), é a quantidade de 0
console.log(idade);

var testeNaN = "Isso é 100" / 2;
// console.log(testeNaN);
console.log(isNaN(testeNaN));

var soma1 = 10 + 10 + 20 + (30 * 4) / 2 + 10;
console.log(soma1);

var x = 5;
console.log(++x);
console.log(x);
console.log(--x);

var idade = "28";
// pode colocar + antes do '28' e ai transforma em numero
var somaIdade = 5;
console.log(idade + somaIdade);
console.log(+idade + somaIdade);

//EXERCICIO
// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var expressao1 = "Teste" / 2;
// var expressao2 = 'Teste' + 2;
var expressao2 = "Teste" - 2;
console.log(expressao1, expressao2);

// Somar a string '200' com o número 50 e retornar 250
var soma = +"200" + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x);
//var x = 5
// ++x
// console.log(x)

//var x = 5
//console.log(x++) --> ainda retorna 5

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
console.log(peso);
