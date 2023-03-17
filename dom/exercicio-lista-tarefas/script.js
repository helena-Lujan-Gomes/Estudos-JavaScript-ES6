//Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');

//Funções
function handleKeyUp(event) {
  if (event.key === 'Enter') {
    //Adicionar elemento LI na lista
    const newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    lista.appendChild(newLi);

    //Limpar o campo de texto
    input.value = '';
  }
}

//Eventos
input.addEventListener('keyup', handleKeyUp);