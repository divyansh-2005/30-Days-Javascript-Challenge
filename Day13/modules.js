export function addtwonums(a,b){
    return a+b;
}

function personObj(){
    const person = {
        name: "Divyansh",
        age: 19,
        greet(){
            console.log("Hello",this.name);
        }
    }
    return person;
}

//named exportes
export function subtracttwonums(a, b) {
    return a - b;
  }
  
export const PI = 3.14159;

export default function product(a,b){
    return a*b;
}

export {personObj};