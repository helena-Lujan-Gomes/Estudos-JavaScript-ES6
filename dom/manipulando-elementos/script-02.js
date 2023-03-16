function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  ul.children[0].append("(alterado)"); //append adiciona algo no final de um conteudo que ja existe no elemento. só funciona para texto
  ul.children[0].innerHTML += "(alterado)"; //altera a memoria 

  let newLi = document.createElement("li");
  newLi.innerText = "Item adicionado";

  ul.appendChild(newLi); //appendChild funciona tambem para elementos, não só para texto
  ul.prepend(newLi); //preprend adiciona texto no começo de um conteudo que ja existe no elemento
}