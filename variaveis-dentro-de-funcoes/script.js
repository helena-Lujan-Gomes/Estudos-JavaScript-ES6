let count = 0; //escopo global

function add() {
  let count = 0; //escopo local tem preferência
  count++;
}

add();
add();

console.log(count);