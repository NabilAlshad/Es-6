const arr = [2, 5, 67, 34];


const max = Math.max(...arr);
console.log(max)

//spread operator takes a number of numeric arguments not an single array; so if we want to pass a single array we can use spread operator;


//merging
const arr2 = [56, 56, 7, 6777];
const newArr = [...arr, ...arr2];

console.log(newArr);

