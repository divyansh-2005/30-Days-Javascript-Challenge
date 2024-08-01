// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:

// Activity 1: Understanding LocalStorage

// . Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

localStorage.setItem('myString','Hello World!');
let retrievedString = localStorage.getItem('myString');4
console.log(retrievedString);

// . Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let myObject = {name:"dev",age:30};
localStorage.setItem('myObject', JSON.stringify(myObject));

let retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject);

// Activity 2: Using LocalStorage

// . Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
localStorage.html

// . Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
console.log(localStorage);

localStorage.removeItem('name');

console.log(localStorage);


// Activity 3: Understanding SessionStorage

// . Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem('myString', 'Hello, Session!');

let retrievedStrings = sessionStorage.getItem('myString');
console.log(retrievedStrings);

// . Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let myObject1 = {'name':"DEVs","age":19};
sessionStorage.setItem('myObject', JSON.stringify(myObject));

let retrievedObjects = JSON.parse(sessionStorage.getItem('myObject'))

console.log(retrievedObjects);

// Activity 4: Using SessionStorage
// . Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
sessionStorage.html

// . Task 8: Write a script to remove an item from sessionStorage . Log the sessionStorage content before and after removal.
// Log sessionStorage content before removal
console.log(sessionStorage);

// Remove an item from sessionStorage
sessionStorage.removeItem('name');

// Log sessionStorage content after removal
console.log(sessionStorage);


// Activity 5: Comparing LocalStorage and SessionStorage

// . Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage . Retrieve and log the values from both storage mechanisms.
function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  }
  
  function logFromBothStorages(key) {
    console.log('localStorage:', localStorage.getItem(key));
    console.log('sessionStorage:', sessionStorage.getItem(key));
  }
  
  // Example usage
  saveToBothStorages('sharedKey', 'Shared Value');
  logFromBothStorages('sharedKey');


// . Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearAllStorages() {
    localStorage.clear();
    sessionStorage.clear();
  }
  
  function verifyStoragesAreEmpty() {
    console.log('localStorage:', localStorage.length === 0 ? 'Empty' : localStorage);
    console.log('sessionStorage:', sessionStorage.length === 0 ? 'Empty' : sessionStorage);
  }
  
  // Example usage
  clearAllStorages();
  verifyStoragesAreEmpty();
  