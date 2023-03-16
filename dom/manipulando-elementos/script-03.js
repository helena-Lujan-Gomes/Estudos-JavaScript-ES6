function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  const newButton = document.createElement('button');
  newButton.innerHTML = "Botão";

  ul.before(newButton);
  //ul.after(newButton)

  let newUl = document.createElement('ul');

  for (let i = 0; i < 5; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = "Item add " + (i + 1);
    newUl.append(newLi);
  }
  ul.after(newUl)
}