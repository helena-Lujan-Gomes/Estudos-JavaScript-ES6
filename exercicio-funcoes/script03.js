/*
Crie uma função que valide usuário e senha.
Usuário correto: helena
Senha correta: 123
*/
//Uso da função:

function validar(usuario, senha) {
  if(usuario === 'helena' && senha === '123') {
    return true;
  } else {
    return false;
  }
}

let usuario = 'helena';
let senha = '123';
let validacao = validar(usuario, senha);
if(validacao) {
  console.log('Acesso concedido');
} else {
  console.log('Acesso negado!');
}