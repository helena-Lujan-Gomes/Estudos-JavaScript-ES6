//https://jsonplaceholder.typicode.com/posts
//Promise

//let clicou = async () => {}
async function clicou() {
  //GET, POST, PUT, DELETE
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let json = await response.json();
  alert(`Titulo do primeiro post: ${json[0].title}`);

  alert("Clicou");
}

async function inserir() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts",
   {
    method: "POST",
    headers: {
      "Content-Tupe": "application/json",
    },
    body: JSON.stringify({
      title: "Titulo de teste",
      body: "Corpo de teste",
      userId: 2,
    })
  });
    let json = await response.json();
    console.log(json);


//document.querySelector("#botao").addEventListener("click", clicou);
//document.querySelector("#inserir").addEventListener("click", clicou);
