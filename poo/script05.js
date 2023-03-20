//Classes: Variável/Método estático

class Person {
  static hands = 2;
  age = 0;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos.`);
  }

  static sayHi() {
    console.log('Oi')
  }
}

let p1 = new Person("Helena");
p1.sayHi();
Person.sayHi();