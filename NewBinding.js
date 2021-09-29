function person(name, age) {
  // let this=Object.create(null)
  this.name = name;
  this.age = age;
  console.log(`${this.name} and ${this.age}`);
  //   return this
}
var person1 = new person("karim", 56);
// person1();
console.log(person1);
