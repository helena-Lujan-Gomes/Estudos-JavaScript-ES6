let personagem = {
  nome: 'Helena',
  idade: 26,
  pais: 'Brasil',
  olhos: ['preto', 'azul'],
  caracteristicas: {
    forca: 20,
    magia: 5,
    stamina: 15
  }
}

personagem.nome = 'Marcela';
personagem.caracteristicas.forca += 5;
personagem.olhos.push('verde');

//array com 2 itens e dentro de cada item tem 2 propriedades
let personagem = {
  nome: 'Helena',
  idade: 26,
  carros: [
    {modelo: 'Fiat', cor: 'preto'},
    {modelo: 'Ferrari', cor: 'vermelho'}
  ]
}

console.log(personagem.carros[1].modelo);