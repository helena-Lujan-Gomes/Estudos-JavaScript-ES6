var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("É verdadeiro");
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada");
}

var nome = "";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

var valor = "10kg" / 10;

if (valor) {
  console.log(valor);
} else {
  console.log(valor);
}

if (!possuiGraduacao) {
  console.log("Não possui graduação");
}

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

var corFavorita = "Vermelho";

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
    case 'Amarelo':
      console.log('Olhe para o sol')
      break;
      case 'Verde':
        console.log('Olhe para a floresta')
        break;
    default:
      console.log('Feche os olhos')

}


// EXERCICIO
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 26;
var idadePrima = 32;

if (minhaIdade > idadePrima) {
  console.log('É maior');
} else if (minhaIdade === idadePrima) {
  console.log('É igual');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('Brasil tem mais habitantes')
} else {
  console.log('Brasil tem menos habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}