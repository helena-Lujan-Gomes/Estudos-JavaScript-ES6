let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];
fruits.sort(); //ordem alfabética
fruits.reverse(); //inverte a ordem

let cars = [
  { brand: 'Fiat', year: 2022},
  { brand: 'Bmw', year: 2018},
  { brand: 'Ferrari', year: 2020}
]

cars.sort((a, b) => {
  if(a.year > b.year) {
    return 1;
  } else if (a.year < b.year) {
    return -1;
  } else {
    return 0;
  }
});

cars.sort((a, b) => {
  return a.year - b.year;
});

cars.sort((a, b) => a.year - b.year); // cars.sort((a, b) => b.year - a.year);