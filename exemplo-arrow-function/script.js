/*function somar(x, y) {
  return x + y;
} */

const somar = (x, y) => x + y;

console.log(somar(10, 5));

/* function sobrenome(sob) {
  return 'Bonieky ' + sob;
} */

//const sobrenome = (sob) => {
  //return 'Gomes ' + sob;
//}

//const sobrenome = (sob) => {
  //let nomeCompleto = 'Gomes ' + sob;
  //return nomeCompleto;
//}

//const sobrenome = (sob) => 'Gomes ' + sob;
const sobrenome = sob => 'Gomes ' + sob;
console.log(sobrenome('Gomes'));