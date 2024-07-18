// CONTROL STRUCTURES

//DAY 3

//*** ACTIVITY 1: if-else statement ***

//Task 1:
let num = -5;
if(num==0){
    console.log("Number is zero");
}
else if(num>0){
    console.log("Number is positive");
}
else{
    console.log("Number is negative");
}

//Task 2:
const age = 19;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

//*** ACTIVITY 2: Nested if-else statement ***

//Task 3:
const a=4,b=7,c=5;
if(a>b){
    if(a>c){
        console.log("a is largest",a);
    }
    else{
        console.log("c is largest",c);
    }
}
else{
    //a<b
    if(b>c){
        console.log("b is largest",b);
    }
    else{
        console.log("c is largest",c);
    }
}

//*** ACTIVITY3: Switch Case ***/

//Task 4:
const day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//Task 5:
const score = 85;
let grade;
switch (true) {
    case (score >= 80 && score <= 100):
        grade = "A";
        break;
    case (score >= 80 && score < 90):
        grade = "B";
        break;
    case (score >= 70 && score < 80):
        grade = "C";
        break;
    case (score >= 60 && score < 70):
        grade = "D";
        break;
    case (score >= 0 && score < 60):
        grade = "F";
        break;
    default:
        console.log("Invalid score");
        break;
}
console.log("Grade: ",grade);

//*** ACTIVITY 4: Conditional (Ternary) Operator ***/

//Task 6:
const number = 11;
const ans = (number%2==0) ? "Even" : "Odd";
console.log(ans);

//*** ACTIVITY 5: Combining Conditions ***/

//Task 7:
const year = 2024;
if((year%4==0 && year%100!=0) || year%400==0){
    console.log("Leap year");
}
else{
    console.log("Not a leap year");
}