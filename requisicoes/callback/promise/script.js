//https://jsonplaceholder.typicode.com/posts
//Promise

function clicou() {
  fetch("https://jsonplaceholder.typicode.com/posts")

   .then((response) => {
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
document.querySelector("#botao").addEventListener("click", clicou);
