function myfunc(a, ...params) {
    console.log(a);
  console.log(params);
}
myfunc(4, 5, 6, 7, 8, 9, 10, 11, 125, 6);
//a will get first element
//this results return and array;

//if we take the params in first parameter this will take all the value of parameters in
function myfunc2(...params,a) 
//a wll not work here 
{
console.log(a);
console.log(params);
}
myfunc2();
