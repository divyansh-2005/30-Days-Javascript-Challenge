// Day 17: Data Structures

// Activity 1: Linked List
// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next .
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (!this.head) {
            return null;
        } else if (!this.head.next) {
            const value = this.head.value;
            this.head = null;
            return value;
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            const value = current.next.value;
            current.next = null;
            return value;
        }
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

function testLinkedList() {
    const list = new LinkedList();

    console.log("Test 1: Display empty list");
    list.display();  // Should print nothing

    console.log("Test 2: Add elements to the list");
    list.add(1);
    list.add(2);
    list.add(3);
    list.display();  // Should print 1 2 3

    console.log("Test 3: Remove element from the end");
    console.log(list.remove());  // Should print 3
    list.display();  // Should print 1 2

    console.log("Test 4: Remove all elements");
    console.log(list.remove());  // Should print 2
    console.log(list.remove());  // Should print 1
    console.log(list.remove());  // Should print null (or equivalent for empty list)
    list.display();  // Should print nothing
}

// testLinkedList();


// Activity 2: Stack
// • Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }
    
    pop(){
        if(this.items.length === 0){
            return null;
        }
        return this.items.pop();
    }

    peek(){
        if(this.items.length === 0){
            return null;
        }
        return this.items[this.items.length-1];
    }
}

function testStack() {
    const stack = new Stack();

    console.log("Test 1: Push elements to the stack");
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.items);  // Should print [1, 2, 3]

    console.log("Test 2: Peek top element");
    console.log(stack.peek());  // Should print 3

    console.log("Test 3: Pop elements from the stack");
    console.log(stack.pop());  // Should print 3
    console.log(stack.pop());  // Should print 2
    console.log(stack.pop());  // Should print 1
    console.log(stack.pop());  // Should print null (or equivalent for empty stack)
}

// testStack();

// • Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str){
    const stack = new Stack();
    for(let char of str){
        stack.push(char);
    }
    let reverseStr = "";
    while(stack.peek() !== null){
        reverseStr += stack.pop();
    }
    return reverseStr;
}

function testReverseString() {
    console.log("Test 1: Reverse 'hello'");
    console.log(reverseString('hello'));  // Should print 'olleh'

    console.log("Test 2: Reverse 'JavaScript'");
    console.log(reverseString('JavaScript'));  // Should print 'tpircSavaJ'
}

// testReverseString();

// Activity 3: Queue
// • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.items.length === 0){
            return null;
        }
        return this.items.shift();
    }

    front(){
        if(this.items.length === 0){
            return null;
        }
        return this.items[0];
    }
}

function testQueue() {
    const queue = new Queue();

    console.log("Test 1: Enqueue elements to the queue");
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(queue.items);  // Should print [1, 2, 3]

    console.log("Test 2: View front element");
    console.log(queue.front());  // Should print 1

    console.log("Test 3: Dequeue elements from the queue");
    console.log(queue.dequeue());  // Should print 1
    console.log(queue.dequeue());  // Should print 2
    console.log(queue.dequeue());  // Should print 3
    console.log(queue.dequeue());  // Should print null (or equivalent for empty queue)
}

// testQueue();

// • Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class PrinterQueue {
    constructor(){
        this.queue = new Queue();
    }

    addJob(job){
        this.queue.enqueue(job);
    }

    processJob(){
        const job = this.queue.dequeue();
        if(job){
            console.log(`Processing job: ${job}`);
        }
        else{
            console.log(`No jobs in the queue`);
        }
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addJob('Print document 1');
printerQueue.addJob('Print document 2');
printerQueue.processJob();  // Output: Processing job: Print document 1
printerQueue.processJob();  // Output: Processing job: Print document 2
printerQueue.processJob();  // Output: No jobs in the queue

// Activity 4: Binary Tree
// • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value , left , and right.
class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// • Task 8: Implement a Binary Tree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    display() {
        this.inOrderTraversal(this.root);
    }
}

function testBinaryTree() {
    const tree = new BinaryTree();

    console.log("Test 1: Insert elements into the tree");
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(1);
    tree.insert(4);
    tree.insert(6);
    tree.insert(8);
    tree.display();  // Should print 1 3 4 5 6 7 8 in in-order traversal
}

// testBinaryTree();

// Activity 5: Graph (Optional)
// • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    bfs(start) {
        const visited = new Set();
        const queue = [start];

        while (queue.length) {
            const vertex = queue.shift();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                console.log(vertex);
                const neighbors = this.adjacencyList.get(vertex);
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
    }
}

// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
function testGraph() {
    const graph = new Graph();

    console.log("Test 1: Add vertices");
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    console.log(graph.adjacencyList);  // Should print Map { 'A' => [], 'B' => [], 'C' => [], 'D' => [] }

    console.log("Test 2: Add edges");
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');
    console.log(graph.adjacencyList);  // Should show the connections

    console.log("Test 3: Perform BFS starting from 'A'");
    graph.bfs('A');  // Should print A B C D in some order depending on the implementation
}

// testGraph();
