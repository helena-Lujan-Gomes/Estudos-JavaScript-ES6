function clicou() {
  const button = document.querySelector('button');
  console.log(button.classList);
  button.classList.add('verde');
  button.classList.remove('azul');

  if(button.classList.contains('azul')) {
    button.classList.remove('azul');
    button.classList.add('verde');
  } else {
    button.classList.add('azul');
    button.classList.remove('verde');
  }

  button.classList.toggle('azul');
  button.classList.replace('azul', 'verde');

  if(button.classList.contains('azul')) {
    button.classList.replace('azul', 'verde');
  } else {
    button.classList.replace('verde', 'azul');
  }
}