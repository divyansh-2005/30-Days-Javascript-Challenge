// LOOPS

//DAY 4

//*** ACTIVITY 1: For Loop ***/

//TASK 1:
const arr = [];
for (let i = 0; i < 11; i++) {
    arr.push(i);
}
console.log(arr);

//Task 2:
const num1 = 5;
for(let i=1;i<=10;i++){
    console.log(num1,"*",i," = ",num1*i);
}

//*** ACTIVITY 2: While Loop ***/

//Task 3:
let sum=0,num2=1;
while (num2<=10) {
    sum += num2;
    num2++;
}
console.log("sum = ",sum);

//Task 4:
let num3=10;
const arr2 = [];
while (num3>0) {
    arr2.push(num3);
    num3--;
}
console.log(arr2);

//*** ACTIVITY 3: ***/

//Task 5:
let num4=1;
do {
    console.log(num4);
    num4++;
} while (num4<=5);

//Task 6:
const num5 = 3;
let temp = num5
let fact = 1;
do {
    temp = temp*fact;
    fact++;
} while (fact<num5);
console.log("factorial:",temp);

//*** ACTIVITY 4: Nested Loops ***/

//TASK 7:
let n = 5;
for(let i=0;i<n;i++){
    let asterick="";
    for(let j=0;j<i;j++){
        asterick += "* ";
    }
    console.log(asterick);
}

//*** ACTIVITY 5: Loop Control Statements */

//Task 8:
let printing = ""
for(let i=1;i<=10;i++){
    if(i==5) continue;
    printing += i+" "; 
}
console.log(printing);

//Task 9:
let printing1 = ""
for(let i=1;i<=10;i++){
    if(i==7) break;
    printing1 += i+" "; 
}
console.log(printing1);