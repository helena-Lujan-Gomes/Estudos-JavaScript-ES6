function acao() {
  document.write('Executando...<br>')
}
setInterval(acao, 1000);

//var timer = setInterval(() => {
 //document.write("Executando!!! <br/>");
//}, 1000)

setTimeout(acao, 3000);

setTimeout(() => {
  console.log("Executou nosso timeout")
}, 3000);