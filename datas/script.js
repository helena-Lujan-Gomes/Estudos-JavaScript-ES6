let d = new Date();

console.log( novoValor );
console.log( d.toDateString() );
console.log( d.toUTCString() );
console.log( d.toString() );

let novoValor = d.getFullYear();
let novoValor = d.getMonth();
let novoValor = d.getDay(); //retorna o dia da semana. começa no domingo no js
let novoValor = d.getDate(); //pega o dia atual
let novoValor = d.getHours();
let novoValor = d.getMinutes();
let novoValor = d.getSeconds();
let novoValor = d.getMilliseconds();
let novoValor = d.getTime();
let novoValor = Date.now();

d.setFullYear(2023);
d.setMonth(11);
d.setDate(20); //troca o dia do mês

d.setDate( d.getDate() + 5 );
d.setHours( d.getHours() + 23);
