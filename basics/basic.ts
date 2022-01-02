let age : number;
age = 12

let userName : string;
userName ="Max"

let isInstructor :  boolean;
isInstructor = false

// More Complex types
let hobbies: string[];
hobbies = ["development" ,"cricket" ,"hockey"] 


let person :{
    name : string,
    age: number
}

person = {
    name :'Amrendra',
    age: 36,
    
}

let peoples :{
    name : string,
    age: number
}[]

peoples = [{name:"amrendra" , age: 36},{name:"amrendra" , age: 36}]


//functions types

function add(a: number, b: number) :number | string{
    return a + b
}

function print(value:any){
    return value
}

 // Generic

 function insertAtBegening<T>(array: T[], value: T){
     const newArray = [value,...array];
     return newArray;
 }

const demoArray=[1,2,3]
 const updatedArray =insertAtBegening(demoArray,0)
console.log(updatedArray);


function insertstringAtBegening<T>(array: T[], value: T){
    const newArray = [value,...array];
    return newArray;
}

const demoStrArray=['1','2','3']
const updatedStrArray =insertAtBegening(demoStrArray,'0')
console.log(updatedStrArray);