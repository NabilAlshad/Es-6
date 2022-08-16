//copyWithIn(target,start,end);

let a = [1, 2, 3, 5, 6, 90, 34];
// a.copyWithin(4, 1, 2);
// console.log(a);
//copyWithIn() doesn't change the length of array;
a.copyWithin(3, 2); //expected output should be [1,2,3,3,5,6,90]
console.log(a);
// //negative sign
// a.copyWithin(-2, -1, -3);
// //it doesn't work at all
// console.log(a);//expected output should be the array

// //so start element should bigger than end if do this

// a.copyWithin(-2, -3, -2);
// console.log(a);//expected output should be the [1,2,3,5, 6, 6,34]
