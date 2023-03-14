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

console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(personagem.caracteristicas.magia);
console.log(personagem.olhos[1]);