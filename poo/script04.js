//Classes: Herança

class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`${this.name} diz OI`);
  }
}

class Student extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }

  //sayHi() { //sobrescreve o primeiro sayHi. O que você cria é prioridade ao que é estendido
    //console.log(`${this.name} é um estudante e diz OI`);
  //}

  sayHello() {
    super.sayHi();
  }
}

let p1 = new Student("Helena", 3);
p1.age = 20;

p1.sayHi();
p1.sayHello();

console.log(`${p1.name} tem ${p1.age} anos e matricula #${p1.id}`);