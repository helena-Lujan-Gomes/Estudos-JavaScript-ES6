let pessoa = {
  nome: 'Helena',
  sobrenome: 'Gomes',
  idade: 26,
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  }
}

console.log(pessoa.nomeCompleto());