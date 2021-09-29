//copyWithIn(target,start,end);

let a = [1, 2, 3, 5, 6, 90, 34];
a.copyWithin(4, 1, 2);
console.log(a);
//copyWithIn() doesn't change the length of array;
a.copyWithin(3, 2);
console.log(a);
