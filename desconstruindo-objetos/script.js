let pessoa = {
  nome: "Helena",
  idade: 26,
  social: {
    facebook: 'gomes',
    instagram: {
      url: '@helenag',
      seguidores: 1000
    }
  },
  nomeCompleto: function() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

let { nome:pessoaNome, sobrenome, idade = 27 } = pessoa; //desconstruiu o objeto
//let idade = pessoa.idade;
//let nome = pessoa.nome;
//let sobrenome = pessoa.sobrenome;

console.log(pessoa.social.facebook);
console.log(pessoa.nomeCompleto());
console.log(pessoaNome, sobrenome, idade);


//let { facebook, instagram } = pessoa.social;
//let { nome, idade, social:{ instagram }} = pessoa;
//let { nome, idade, social:{instagram:{url:instagram, seguidores}} } = pessoa;
//let { nome, idade, social:{instagram}} = pessoa;

console.log(nome, idade, instagram, seguidores);
console.log(nome, idade, instagram);

function pegarNomeCompleto(obj) {
 let nome = obj.nome;
 let sobrenome = obj.sobrenome;

 return `${nome} ${sobrenome}`;
}

console.log(pegarNomeCompleto(pessoa));

function pegarNomeCompleto({nome, sobrenome = 'Silva', social:{instagram:{url:instagram}}}) {
  return `${nome} ${sobrenome} (Siga em ${instagram})`;
}