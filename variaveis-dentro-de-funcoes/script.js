let count = 0; //escopo global

function add() {
  let count = 0; //escopo local tem preferĂȘncia
  count++;
}

add();
add();

console.log(count);