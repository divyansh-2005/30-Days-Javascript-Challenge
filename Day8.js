// Day 8: ES6+ Features

// Activity 1: Template Literals

// . Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = 'Divyansh'
let age = 19;
console.log(`My age is ${age} and my name is ${name}`);

// . Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`1. I want to master js
2. I am learning js
3. I will master js`);

// Activity 2: Destructuring

// . Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arr1 = [1, 2, 3, 4, 5];
const [first, second] = arr1;
console.log(first, second);

// . Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: 'THE BOOK',
    author:"Divyansh"
}
const {title,author} = book;
console.log(title,author);

// Activity 3: Spread and Rest Operators

// . Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to
// the console.
const arr2 = [1, 2, 3];
const newarr = [...arr2, 4, 5, 6];
console.log(newarr);

// . Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args){
    return args.reduce((sum,n) => sum+n,0);
}
console.log(sum(1,2,3,4,5));


// Activity 4: Default Parameters

// . Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of
// calling this function with and without the second parameter.
function product(a,b=1){
    return a*b;
}
console.log(product(2,3));
console.log(product(2));


// Activity 5: Enhanced Object Literals

// . Task 8: Use  literals to create an object with methods and properties, and log the object to the console.
const obj ={
    property:'value',
    method(){
        return 'method';
    }
}
console.log(obj);

// . Task 9: Create an object with computed property names based on variables and log the object to the console.
let key = 'name';
const obj1 = {
    [key]: 'Divyansh'
}
console.log(Object.keys(obj1));
console.log(obj1);