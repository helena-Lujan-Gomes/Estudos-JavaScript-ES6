//Classes: Factory
//Factory: função que cria uma instância ou cria um objeto daquilo que você quer criar.   Criar funções que irão retornar o objeto já pronto

class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }
}

function createPerson(name, age) {
  let p = new Person(name);
  p.age = age;
  return p;
}

let p1 = createPerson("Helena", 30); //função vai auxiliar no processo de instanciar uma classe

console.log(`${p1.name} tem ${p1.age} anos.`);