// Day 12: Error Handling

// Activity 1: Basic Error Handling with Try-Catch

// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
const add = (a,b) =>{
    const sum = Number(a+b);
    if(isNaN(sum)){
        throw new Error("sum is not a number");
    }
    else{
        console.log(sum);
    }
}
   
try {
    sum(2,'a');
} 
catch (error) {
       console.log(error.message);
}

// • Task 2:Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
const divide = (a,b) => {
    if(b==0){
        throw new Error("denominator is zero");
    } 
    console.log(a/b);
}

try{
    divide(2,0)
} catch(error){
    console.log(error.message);
}

// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function trycatchfinally(){
    try{
        divide(2,0);
        console.log("Inside Try block");
    }
    catch(error){
        console.log(error.message,",Inside Catch block");
    }
    finally{
        console.log("Inside Finally block");
    }
}
trycatchfinally();

// Activity 3: Custom Error Objects
// • Task 4 : Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-
// catch block.
class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = 'CustomError'
    }
}

function throwError(){
    throw new CustomError('This is a custom error message')
}

try{
    throwError();
}
catch(error){
    if(error instanceof CustomError){
        console.error('Caught a custom error:', error.message);
    }
    else{
        console.error('Caught an unexpected error:', error);
    }
}

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the
// custom error using a try-catch block.
class myError extends Error{
    constructor(message){
        super(message);
        this.name = 'myError'
    }
}

function checkInput(name){
    if(name.length === 0){
        throw new myError("Name is empty");
    }
}

try{
    checkInput("")
}
catch(error){
    if(error instanceof myError){
        console.log('Caught a custom error:', error.message);
    } else{
        console.error('Caught an unexpected error:', error);
    }
}

// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use . catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve,reject) => {
    const randomNumber = Math.random()
    if(randomNumber > 0.5){
        resolve("Promise resolved successfully")
    } else{
        reject("Promise rejected")
    }
})

randomPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error)=>{
        console.log('Caught an error:',error);
    })

// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function trycatch(){
    try{
        const msg = await randomPromise;
        console.log(msg);
    }
    catch(error){
        console.log('Caught an error:',error);
    }

}
trycatch();

// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using . catch() . Log an appropriate error message to the console.
fetch("hjksldjhib")
    .then(response => {
        if(!response.ok){
            throw new Error('Network response not ok')
        }
        return response.json()
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.error('Fetch error:',error.message);
    })

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
    try {
        const response = await fetch('https://invalid-url.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}

// Call the async function to demonstrate its functionality
fetchData();