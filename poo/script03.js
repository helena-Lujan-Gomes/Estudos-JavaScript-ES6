//Classes: Getter e Setter

class Person {
  _age = 10;
  steps = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  takeAStep() {
    this.steps++;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get age() {
    return this._age;
  }

  set age(x) {
    if (typeof x == 'number') {
      this._age = x;
  }
    }

}

let p1 = new Person("João", "Silva");
let p2 = new Person("Maria", "Leite");
let p3 = new Person("Pedro", "Duarte");

p1.age = 20;
console.log(`${p1.fullName} tem ${p1.age} anos`);
