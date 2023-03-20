//Classes: action

class Person {
  age = 0;
  steps = 0;

  constructor(name) {
    this.name = name;
  }

  takeAStep() {
    this.steps++;
  }

  setAge(newAge) {
    if(typeof newAge == 'number') {
      this.age = newAge;
    } else {
      console.log('Idade não aceita. (Só números)');
    }
  }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.takeAStep();
console.log(`Passos de ${p1.name}: ${p1.steps}`);

p1.setAge(10);
console.log(`${p1.name} tem ${p1.age} anos`);