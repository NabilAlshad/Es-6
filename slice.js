// the first value will slice from right side of this array and the second value of slice will be count from the left side ...expected value will be [4]
const arr = [1, 2, 3, 4];
const result = arr.slice(-1, 4);
console.log("result1", result);

//if value is not assign in slice it will return the array ..expected value will be the whole array ...

const result2 = arr.slice();
console.log("result2", result2);

//note ::if one value will be given to the slice the slice the result will be count from the right side and if two value is given to the slice method the result will be count the middle elements of the two values ..the expected result will be[2,3]
const result3 = arr.slice(1, 3);
console.log("result3", result2);
