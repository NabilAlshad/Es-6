//implicit binding

function printPlayerNameFunction(obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
}

var person = {
  name: "john",
  age: 30,
};
var person2 = {
  name: "doe",
  age: 40,
};

printPlayerNameFunction(person2);
printPlayerNameFunction(person);
person2.printPlayerName();
person.printPlayerName();

//explicit binding

var printName = function (a, b, c) {
  console.log(`${this.name} his father is ${a} ${b} ${c}`);
};

var person3 = {
  name: "mike",
  age: 40,
};
var manush = [10, 23, 43];
var v1 = "first";
var v2 = "second";
var v3 = "three";
// apply wil take an array
// printName.apply(person3, manush);

//call will take elements what number you want
// printName.call(person3, "twith");

//bind explicit
var hello = printName.bind(person3, v1, v2, v3);
hello();
