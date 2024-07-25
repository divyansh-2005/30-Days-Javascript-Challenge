// Day 13: Modules

import product, { addtwonums, personObj, PI, subtracttwonums } from "./modules.js";


// Activity 1: Creating and Exporting Modules
// • Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
console.log(addtwonums(2,5));

// • Task 2. Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = personObj();
console.log(person)
person.greet();

// Activity 2: Named and Default Exports
// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
console.log(subtracttwonums(5,2));
console.log(PI);

// • Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
console.log(product(2,3));

// Activity 3: Importing Entire Modules
// • Task 5. Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as utils from './utils.js';
console.log(utils.PI);

// Activity 4: Using Third-Party Modules
// • Task 6: Install a third-party module (e.g., Iodash ) using npm. Import and use a function from this module in a script.
import lodash from 'lodash';

const array = [1,2,3,4,5];
const shuffledArray = lodash.shuffle(array);
console.log(shuffledArray);

// • Task 7:  Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error making the request:',error);
    })

// Activity 5: Module Bundling (Optional)
// • Task 8. Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.