// Day 11: Promises and Async/Await

// Activity 1: Understanding Promises

// . Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise = new Promise((resolve,reject) => {
    setTimeout( () =>{
        resolve('Promise resolved after 2 seconds');    
    })
})
promise.then((message) => {
    console.log(message);
})

// . Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch() .
const promise2 = new Promise((resolve,reject) => {
    setTimeout( () =>{
        reject('Promise rejected after 2 seconds');    
    })
})
promise2.catch((message) => {
    console.log(message); 
})

// Activity 2: Chaining Promises

// . Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise resolved after 2 seconds');
    }, 2000);
});

promise3
    .then((result) => {
        console.log(result); // Logs the result of the first promise
        return new Promise((resolve, reject) => { // Return a new promise
            setTimeout(() => {
                resolve('Second promise resolved after 1 second');
            }, 1000);
        });
    })
    .then((result) => {
        console.log(result); // Logs the result of the second promise
        return new Promise((resolve, reject) => { // Return another new promise
            setTimeout(() => {
                resolve('Third promise resolved after 3 seconds');
            }, 3000);
        });
    })
    .then((result) => {
        console.log(result); // Logs the result of the third promise
    });

// Activity 3: Using Async/Await

// . Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

async function logResolvedValue() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved value');
        }, 2000); // Simulates a task that takes 2 seconds
    });

    const resolvedValue = await promise; // Wait for the promise to resolve
    console.log(resolvedValue); // Log the resolved value
}

logResolvedValue(); // Call the async function

// . Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function handleRejectedPromise() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Promise was rejected'));
        }, 2000); // Simulates a task that fails after 2 seconds
    });

    try {
        await promise; // Attempt to wait for the promise to resolve
    } catch (error) {
        console.error(error.message); // Log the error message if the promise is rejected
    }
}

handleRejectedPromise(); // Call the async function

// Activity 4: Fetching Data from an API

// . Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const url = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok '+response.statusText);
        }

        return response.json();
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error =>{
        console.error("There was a problem with the fetch",error);
    })

// . Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchData() {
    const apiurl = 'https://jsonplaceholder.typicode.com/posts/2';

    try{
        const response = await fetch(apiurl);
        if(!response.ok){
            throw new Error('error occoured',response.statusText);
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

fetchData();

// Activity 5: Concurrent Promises

// . Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promisea = new Promise((resolve, reject) => resolve('promise1 success'));
const promiseb = new Promise((resolve, reject) => resolve('promise2 success'));
const promisec = new Promise((resolve, reject) => resolve('promise3 success'));

Promise.all([promisea,promiseb,promisec])
    .then((result) =>{
        console.log('resolved',result);
    })
    .catch((error)=>{
        console.log('rejected',error);
    })

// . Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promised = new Promise((resolve, reject) => resolve('promise1 success'));
const promisee = new Promise((resolve, reject) => resolve('promise2 success'));
const promisef = new Promise((resolve, reject) => resolve('promise3 success'));

Promise.race([promised, promisee, promisef])
  .then((result) => {
    console.log('resolved', result); // resolved promise1 success
  })
  .catch((error) => {
    console.log('rejected', error);
  });