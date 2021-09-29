// var person = {
//   age: 34,
//   name: "john",
//   intro: function () {
//     console.log(`  my name is ${this.name} age is ${this.age}`);
//   },
// };
// var person2 = {
//   name: "chika vai",
//   age: 23,
//   intro: function () {
//     console.log(`  my name is ${this.name} age is ${this.age}`);
//   },
// };
// function intro(a, b) {
//   console.log(`${a}  my name is ${this.name} age is ${this.age}`);
// }
// // console.log();
// // person.intro();
// // intro.call(person, "hello");
// // intro.apply(person2, ["hello", "hii"]);
// var calll = intro.bind(person, "hello");
// calll();
// // person2.intro();

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // function (name, age) {
  //     var this = Object.create(Student.prototype)
  //     this.name = name;
  //     this.age = age ;
  //     return this
  // }
  intro() {
    console.log(`hello my name is ${this.name}`);
  }
}

var niks = new Student("niks", 12);
niks.intro();

// var person = {
//   name: "nishat",
//   age: 12,
//   intro: () => {
//     console.log(`my name is ${this.name}`);
//   },
//   myAge: function () {
//     console.log(`my age is ${this.age}`);
//   },
//   intro2: function () {
//     var myfunc = () => {
//       console.log(`my func is ${this.name}`);
//     };
//     return myfunc;
//   },
//   intro3: function () {
//     var myfunc = function () {
//       //   this.name = "rabbi";

//       console.log(`my func is ${this.name}`);
//     };
//     return myfunc;
//   },
// };
// person.intro();
// person.myAge();
// person.intro2()();
// person.intro3()();
