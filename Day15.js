// Day 15: CLOSURES

/*
 Closures: "When you have a function defined inside of another funtion
 that inner function has access to the variables and scope of outer funtion 
 even if the outer funtion finishes excuting and those variables no longer 
 accessable outside that function"
*/

// Activity 1: Understanding Closures
// • Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner
// function and log the result.
function outer(){
    let outerVar = 'I am from outer function';
    console.log("outer function called");
    function inner(){
        console.log("inner function called");
        console.log(outerVar);
        console.log("inner function exited");
    }
    console.log("outer function exited");
    return inner;
}
let innerFn = outer();
innerFn();

// • Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter(){
    let count = 0;
    function increment(){
        count++;
    }
    function getCount(){
        return count;
    }
    return { increment, getCount };
}
let myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());

// Activity 2: Practical Closures
// • Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function idGenerator(){
    let id = 0;
    function generateID(){
        return ++id;
    }
    return generateID;
}
let uniqueID = idGenerator();
console.log(uniqueID());
console.log(uniqueID());
console.log(uniqueID());

// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greetUser(name){
    function greet(){
        console.log(`Hello ${name}`);
    }
    return greet;
}
let greet = greetUser("Divya");
greet();

// Activity 3: Closures in Loops
// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
let functions = [];
for(let i=0;i<5;i++){
    functions[i] = function(){
        console.log(i);
    }
}
functions[0]();
functions[1]();
functions[2]();
functions[3]();
functions[4]();

// Activity 4: Module Pattern
// • Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function collections(){
    let items = [];
    function add(item){
        items.push(item);
    }
    function remove(item){
        items = items.filter(i => i!== item);
    }
    function list(){
        return items;
    }
    return {add, remove, list};
}
let collection = collections();
collection.add("pizza");
collection.remove("pizza");
collection.add("pihu")
console.log(collection.list());

// Activity 5: Memoization
// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn){
    let cache = {};
    return function(...args){
        let key = JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }
        else{
            let result = fn(...args);
            cache[key] = result;
            return result;
        }
    }
}

function slowFunction(num){
    // Simulate a slow computation
    for (let i = 0; i < 1e6; i++) {}
    return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Computed and cached
console.log(memoizedSlowFunction(5)); // Retrieved from cache
console.log(memoizedSlowFunction(10)); // Computed and cached
console.log(memoizedSlowFunction(10)); // Retrieved from cache

// • Task 8.
// • Create a memoized version of a function that calculates the factorial of a number.
// Factorial function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Test the memoized factorial function
console.log(memoizedFactorial(5)); // Computed and cached
console.log(memoizedFactorial(5)); // Retrieved from cache
console.log(memoizedFactorial(6)); // Computed and cached
console.log(memoizedFactorial(6)); // Retrieved from cache