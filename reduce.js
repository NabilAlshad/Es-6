var numbers = [1, 3, 4, 5, 6, 7, 83, 3];
const sum = numbers.reduce((prevValue, currentValue, currentIndex, array) => {
  return prevValue + currentValue;
}, 0);
console.log(sum);
var str = 'heloo this is  "nabil" hello';
console.log(str);
