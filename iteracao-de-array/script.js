let fruits = ['Banana', 'Laranja', 'Maça', 'Pera'];
let bigfruits = fruits.filter((item) => {
  return item.length > 4;
});

//let bigfruits = fruits.filter((item) => item.length > 4)};
//filter (value, index, array)

let ok = fruits.every((value) => {
  if(value.length > 3) {
    return true;
  } else {
    return false;
  }
});

//simplificado 
/* fruits.every((value) => {
  return value.length > 3;
}); */

if (ok) {
  console.log('Todos são maior que 3');
} else {
  console.log('Não são todos maiores do que 3');
}

let eMaior = fruits.some((value) => {
  return value.length > 3;
});

if(eMaior) {
  console.log('Algum item é maior do que 3')
} else {
  console.log('Nenhum item é maior do que 3');
}

if (fruits.includes('Uva')) {
  console.log('Tem uva sim!')
} else {
  console.log('Não tem uva...');
}