//https://jsonplaceholder.typicode.com/posts
//Promise

function clicou() {
  //GET, POST, PUT, DELETE
  fetch("https://jsonplaceholder.typicode.com/posts")

   .then((response) => {
    console.log(`Status: ${response.status}`);
      return response.json();
    })
    .then((json) => {
      alert(`Titulo do primeiro post: ${json[0].title}`);
    })

    .catch((error) => {
      alert("Deu problema na requisição");
    })
    .finally(() => {
      alert("Opa, acabou tudo")
    })
}

function inserir() {
  fetch("https://jsonplaceholder.typicode.com/posts",
  {
    method: 'POST',
    headers: {
      'Content-Tupe': 'application/json'
    },
    body: JSON.stringify({
      title: 'Titulo de teste',
      body: 'Corpo de teste',
      userId: 2
    })
  })
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
}

document.querySelector("#botao").addEventListener("click", clicou);
document.querySelector("#inserir").addEventListener("click", clicou);
