// Day 21: LeetCode Easy
// Tasks/Activities:
// Activity 1: Two Sum

// . Task 1: Solve the "Two Sum" problem on LeetCode.
// o Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// o Log the indices for a few test cases.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                return [i,j];
            }
        }
    }
    return [];
};

// Activity 2: Reverse Integer
// . Task 2: Solve the "Reverse Integer" problem on LeetCode.
// . Write a function that takes an integer and returns it with its digits reversed.
// . Handle edge cases like negative numbers and numbers ending in zero.
// . Log the reversed integers for a few test cases.
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let y = 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    while (x !== 0) {
        let digit = x % 10;
        if (y > INT_MAX / 10 || y < INT_MIN / 10) {
            return 0;
        }
        y = y * 10 + digit;
        x = Math.trunc(x / 10);
    }

    return y;
};


// Activity 3: Palindrome Number

// . Task 3: Solve the "Palindrome Number" problem on LeetCode.
// o Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// . Log the result for a few test cases, including edge cases like negative numbers.

// Activity 4: Merge Two Sorted Lists
// . Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// . Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// . Create a few test cases with linked lists and log the merged list.

// Activity 5: Valid Parentheses

// . Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// o Write a function that takes a string containing just the characters '(, ")', {, }, T and ']', and determines if the input string is valid.
// . A string is valid if open brackets are closed in the correct order.
// o Log the result for a few test cases.