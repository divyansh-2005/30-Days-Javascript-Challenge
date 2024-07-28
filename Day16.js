// Day 16: Recursion

// Activity 1: Basic Recursion
// • Task 1:
// Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*factorial(n-1);
}

// Test cases
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
console.log(factorial(0)); // 1

// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test cases
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
console.log(fibonacci(0)); // 0


// Activity 2: Recursion with Arrays
// • Task 3:
// Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1))
}

// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30])); // 60
console.log(sumArray([])); // 0

// • Task 4:
// Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr){
    if(arr.length===1){
        return arr[0];
    }
    maxOfRest = maxArray(arr.splice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

// Test cases
console.log(maxArray([1, 5, 3, 9, 2])); // 9
console.log(maxArray([10, 20, 5, 30])); // 30
console.log(maxArray([7])); // 7

// Activity 3: String Manipulation with Recursion
// . Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str){
    if(str===""){
        return "";
    }
    return reverseString(str.substr(1)) + str[0]
}

// Test cases
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("")); // ""

// . Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return isPalindrome(str.slice(1, -1));
    }
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true

// Activity 4:
// Recursive Search
// • Task 7:
// Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr,target,start=0,end=arr.length-1){
    if(start > end){
        return -1;
    }
    
    let mid = Math.floor((start+end)/2);

    if(arr[mid] == target){
        return mid;
    }
    else if(arr[mid] > target){
        return binarySearch(arr,target,start,mid-1);
    }
    else{
        return binarySearch(arr,target,mid+1,end);
    }
}

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // -1
console.log(binarySearch([1, 3, 5, 7, 9], 3)); // 1

// • Task 8:
// Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr,target){
    if(arr.length===0){
        return 0;
    }
    
    if(arr[0] === target){
        return countOccurrences(arr.slice(1),target) + 1;
    }
    else{
        return countOccurrences(arr.slice(1),target);
    }
}

// Test cases
console.log(countOccurrences([1, 2, 3, 4, 3, 3, 5], 3)); // 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0
console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // 5

// Activity 5: Tree Traversal (Optional)

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// • Task 9:
// Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
function inorderTraversal(node){
    if(node === null){
        return;
    }

    inorderTraversal(node.left);
    console.log(node.value);
    inorderTraversal(node.right);
}

// Test case
let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

inorderTraversal(root); // 1 2 3 4 5 6 7


// • Task IO: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function treeDepth(node){
    if(node === null){
        return 0;
    }
    else{
        let leftDepth = treeDepth(node.left);
        let rightDepth = treeDepth(node.right);
        return Math.max(leftDepth,rightDepth) + 1;
    }
}

// Test case
console.log(treeDepth(root)); // 3 (using the same tree from Task 9)