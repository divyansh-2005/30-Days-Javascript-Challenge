// DAY 14: CLASSES

// Activity 1: Class Definition
// • Task 1: Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the
// greeting message.
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        return `Hello ${this.name}`;
    }

    // Task 5: Add a static method to return a generic greeting message
    static genericGreeting(){
        return `Hello you are in Person class`
    }
}

const p1 = new Person();
p1.name = "Divyansh",
p1.age = "19"
console.log(p1.greeting());

// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
function updateAge(newAge){
    this.age = newAge;
    console.log(`updated age: ${this.age} `);
}
// Add the method to the class prototype
Person.prototype.updateAge = updateAge;

const p2 = new Person();
p2.name = "Divyansh";
p2.age = 19;
console.log(p2.greeting());

// Use the new method to update the age and log the result
p2.updateAge(20);

// Activity 2: Class Inheritance
// • Task 3: Define a class Student that extends the Person class. Add a property studentld and a method to return the student ID. Create an instance of
// the Student class and log the student ID.
class Student extends Person{
    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId

        Student.studentCount++;
    }
    
    getStudentId(){
        return this.studentId;
    }

    // Task 4: Override the greeting method to include the student ID
    greeting(){
        return `Hello ${this.name}, your student ID is ${this.studentId}`;
    }

    // Task 6: Add a static property studentCount
    static studentCount = 0;
}
const s1 = new Student("Dev",19,101);

console.log(s1.getStudentId());

// • Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
console.log(s1.greeting());
console.log(p1.greeting());

// Activity 3: Static Methods and Properties
// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the
// class and log the message.
console.log(Person.genericGreeting());

// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log
// the total number of students.
const s2 = new Student("Ayush",20,102);
console.log(`Total number of students: ${Student.studentCount}`);

// Activity 4: Getters and Setters
// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the
// full name using the getter.
class Person_new{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name){
        const[firstName,lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const p3 = new Person_new("Namrata","Diware");
console.log(p3.fullName);

// • Task 8: Add a setter method to the Person class to update the name properties ( firstName and lastName ). Update the name using the setter and log
// the updated full name.
p3.fullName = "Divyansh Kumbhat";
console.log(p3.fullName);

// Activity 5: Private Fields (Optional)
// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be
// updated through these methods.
class Account{
    #balance;
    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposit(amount){
        if (amount > 0) {
            this.#balance += amount;
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount){
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Invalid withdraw amount.");
        }
    }

    get balance(){
        return this.#balance;
    }
}

// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const a1 = new Account(1000);
console.log(a1.balance);

a1.deposit(500);
console.log(a1.balance);

a1.withdraw(200);
console.log(a1.balance);