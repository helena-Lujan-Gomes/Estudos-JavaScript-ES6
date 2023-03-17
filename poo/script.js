//-Programação Orientada a Objetos (POO - OOP)
//-Programação Procedural
//-Programação Funcional (PF - FP) (Functional Programing Paradigm)

//-CLASSES
//-FUNÇÕES/OBJETOS

//1 template //constructor e this
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//3 objetos criados com 1 template //classes: instância
let p1 = new Person("Joao", 20);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40);

console.log(p1.name);

//template
class Person {
  age = 0;

  constructor(name) {
    this.name = name; //this = p1, p2 e p3
  }
}

//let p1 = new Person("João");  //instância. p1 é um objeto
//let p2 = new Person("Maria"); //instância. p2 é um objeto
//let p3 = new Person("Pedro"); //instância. p3 é um objeto

p1.age = 20;

console.log(` P1 = ${p1.name} tem ${p1.age} anos`);
console.log(` P2 = ${p2.name} tem ${p2.age} anos`);
console.log(` P3 = ${p3.name} tem ${p3.age} anos`);