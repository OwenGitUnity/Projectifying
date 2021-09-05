// let greet: Function;
type OBJContent = {name: string, age:number}

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says '${greeting}'`);
    
}

let calc : (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add'){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// example 3
let logDetails: (obj: OBJContent) => void;

logDetails = (ninja: OBJContent) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}
logDetails({name: 'ninja', age:999999999999})

