// Day 6: ARRAY

//*** Activity 1: Array Creation and Access ***/

// . Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr1 = [1,2,3,4,5]
console.log(arr1);

// . Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr1[0]);
console.log(arr1[4]);

//*** Activity 2: Array Methods (Basic) ***/

// . Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr1.push(6);
console.log(arr1);

// . Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr1.pop();
console.log(arr1);

// . Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr1.shift();
console.log(arr1);

// . Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr1.unshift(1);
console.log(arr1);

//*** Activity 3: Array Methods (Intermediate) ***/

// . Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr2 = arr1.map(function(element){
    return element*2;
});
console.log(arr2);

// . Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let arr3 = arr1.filter(element => element%2==0);
console.log(arr3);

// . Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sumation = arr1.reduce(function(sum,element){
    return sum += element
},0);
console.log(sumation);

//*** Activity 4: Array Iteration ***/

// . Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0;i<arr1.length;i++){
    // console.log(arr1[i]);
}
// . Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr1.forEach(element => {
    // console.log(element);
});

//*** Activity 5: Multi-dimensional Arrays ***/

// . Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix);

// . Task 13: Access and log a specific element from the two-dimensional array.
let specific_ele=matrix[1][1];
console.log(specific_ele); 
// matrix.forEach(element => {
//     element.forEach(num => console.log(num))
// })