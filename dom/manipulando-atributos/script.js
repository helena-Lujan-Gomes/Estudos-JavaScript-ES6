function clicou() {
  const input = document.querySelector('input');
  console.log(input.getAttribute('placeholder'));

  if (input.hasAttribute('placeholder')) {
    console.log('Tem placeholder SIM');
  } else {
    console.log('Não tem placeholder...');
  }

  input.setAttribute('placeholder', 'Placeholder alterado');
}

function clicou() {
  const input = document.querySelector('input');
  const botao = document.querySelector('.botao');
  if(input.getAttribute('type') === 'text') {
    input.setAttribute('type', 'password');
    botao.innerText = 'Mostrar Senha';
  } else {
    input.setAttribute('type', 'text');
    botao.innerText = 'Ocultar Senha';
  }

}