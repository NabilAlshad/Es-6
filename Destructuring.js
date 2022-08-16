const user = {
  name: "john",
  age: 34,
  education: {
    degree: "masters",
  },
};

const { name: title } = user;
console.log(title);

const {
  education: { degree: x }, //we use alias
} = user;
console.log(x);


//array destructuring

const arr = [1, 2, 4, 6, 7];
const [, a, , , b] = arr;
console.log(a, b);
//expected outpur should be 2,7
