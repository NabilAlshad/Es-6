// const person = {
//   name: "john",
//   age: 12,
// };
// const a = Object.create(person);
// console.log(a.name);

function Person(name, age) {
  //   const person = Object.create(Person.prototype);
  this.name = name;
  this.age = age;
  //   return person;
}
Person.prototype = {
  eat() {
    console.log("this person is eating");
  },
};
const john = new Person("JOhn", 23);
john.eat();
