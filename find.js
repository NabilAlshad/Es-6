//array.find() method
//it returns a single element of an array
// array.find(currentvalue,currentindex,array) it takes three parameter which is current value,one is current index and the third one is the array
const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const result = numbers.find((e) => e > 10);
//result finds the element from the numbers array which value is greater than 10 the expected value will be 11

// console.log(result);
//result is 11
