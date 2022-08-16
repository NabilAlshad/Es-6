// const person = {
//   name: "john",
//   age: 12,
// };
// const a = Object.create(person);
// console.log(a.name);

function Person(name, age) {
  //   const this = Object.create(Person.prototype);
  this.name = name;
  this.age = age;
  //   return this;
}
Person.prototype = {
  eat() {
    console.log("this person is eating");
  },
};
const john = new Person("JOhn", 23);
john.eat();
