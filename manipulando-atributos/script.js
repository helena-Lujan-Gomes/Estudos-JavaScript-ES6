function trocarImagem(filename, animalName) {
  document.querySelector('.imagem').setAttribute('src', 'img/'+filename);
  document.querySelector('.imagem').setAttribute('data-animal', animalName);
}

function pegarAnimal() {
  let animal = document.querySelector('.imagem').getAttribute('data-animal');
  alert("O animal é: "+animal);
}