const mySet = new Set();
const newSet = mySet.add(5).add(6).add(7);
console.log(mySet);

// set from array
const arr = [1, 2, 3];
const set = new Set(arr);
console.log(Array.from(set));

//delete method
const ASet = new Set();
const mSet = ASet.add(1).add(2).add(3).delete(3);
console.log(mSet);
