// Day 5: Functions

//*** Activity 1: Function Declaration ***/

// . Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(num1) {
    if((num1^1)==(num1+1)){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
checkEvenOdd(73);

// . Task 2: Write a function to calculate the square of a number and return the result.

function square(num2){
    return num2*num2;
}
console.log(square(3));

//*** Activity 2: Function Expression ***/

// . Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const max = function (a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(max(12,23));

// . Task 4: Write a function expression to concatenate two strings and return the result.
const joinStr = function(s1,s2){
    return s1+s2;
}
console.log(joinStr("HI","Bye"));

//*** Activity 3: Arrow Functions ***/

// . Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sum = (a,b) =>{
    return a+b;
}
console.log(sum(1,2));

// . Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const myfun = (str,ch) => {
    if(str.includes(ch)) return true;
    else return false;
}
console.log(myfun("divyansh","v"));

//*** Activity 4: Function Parameters and Default Values ***/

// . Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(a,b=2){
    return a*b;
}
console.log(product(3,3));
console.log(product(3));

// . Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greeting(name,age=18){
    return "Good Morning "+name+" ,your age is "+age;
}
console.log(greeting("Divyansh"));

//*** Activity 5: Higher-Order Functions ***/

// . Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function fun1(){
    console.log("Inside fun1");
}
function higherfun(fun1,n){
    while(n--){
        fun1();
    }
}
higherfun(fun1,4);

// . Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function
// to the result.
function second(val){
    console.log("New value ",val);
}
function first(n){
    return n+1;
}
function higherorder(first,second,n){
    let value = first(n);
    second(value);
}
higherorder(first,second,1);