//let cores = ['preto', 'branco', 'azul', 'vermelho'];

//cores.push('verde');

/*
for(let n = 0; n < cores.length; n++) {
  console.log(cores[n].nome);
}
*/

/*
for (let i in cores) {
  console.log(cores[i]);
}
*/

for (let cor of cores) {
  console.log(cor);
}

let cores = [
  {nome: 'preto', qt: 10},
  {nome: 'azul', qt: 5},
  {nome: 'vermelho', qt: 15}
];

/*for (let cor of cores) {
  console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}
*/

for (let i in cores) {
  console.log(cores[i].nome);
}

for (let i in cores) {
  cores[i].nome = cores[i].nome.toUpperCase();
}