let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.map(function(item) {
  return item * 2;

});

//for(let i in lista) {
  //lista2.push(lista[i] * 2);
//}

let res = lista2;

console.log(res);

lista2 = lista.filter(function(item) {
  if(item < 20) {
    return true;
  } else {
    return false;
  }
});

lista2 = lista.every(function(item) {
  if(item > 20) {
    return true
  } else {
    return false;
  }

  return (item > 3) ? true : false;
})