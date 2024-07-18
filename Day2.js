// OPERATORS

// DAY 2

//  *** Activity 1 : Arithmetics Operations  ***

//Task 1:
let a1=10;
let b1=20;
console.log(a1 + b1 );   //OUTPUT : 30

//Task 2:
let a2=30;
let b2=15;
console.log(a2 - b2 );   //OUTPUT : 15

//Task 3:
let a3=3;
let b3=4;
console.log(a3 * b3 );    //OUTPUT : 12

//Task 4:
let a4=30;
let b4=10;
console.log(a4 / b4 );     //OUTPUT : 3

//Task 5:
let a5=30;
let b5=12;
console.log(a5 % b5 );     //OUTPUT : 6

//  *** Activity 2 : Assignment Operators  ***

//Task 6:
let num1 = 50;
let num2=  10;
console.log(num1 += num2);    //OUTPUT :60
//OR   num1+=num2;
//     console.log(num1);

//Task 7:
let num3 = 50;
let num4=  10;
console.log(num3 -= num4);    //OUTPUT :40
//OR   num3-=num4;
//     console.log(num3);


//   ***  Activity 3 : Comparison Operators  ***

//Task 8:
console.log(10 < 20);    //OUTPUT : true
console.log(40 > 20);    //OUTPUT : true

//Task 9:
console.log( 20 >= 20 );   //OUTPUT : true
console.log( 40 <= 10 );   //OUTPUT : false

//Task 10:
let digit_1 = 10;
let digit_2 = "10";
console.log(digit_1 == digit_2);  //OUTPUT : true

console.log(digit_1 === digit_2); //OUTPUT : false
//Remember => the "==" operator compares values after performing type conversion, while the "===" operator compares values without type conversion.


//  ***  Activity 4 : Logical Operators  ***
//Task 11 :

console.log(10 > 20 && 15 < 20);   //OUTPUT : false

//Task 12 :

console.log(10 > 20 || 15 < 20);   //OUTPUT : true

//Task 13 :

let bool=true;
console.log(!bool);                //OUTPUT : false


//  ****  Activity 5 : Ternary Operator  ****

//Task 14: 

//condition ? exprIfTrue : exprIfFalse
let number= 20;
const ans= number  >=0 ? "Positive" : "Negative";
console.log(ans);               //OUTPUT:Positive