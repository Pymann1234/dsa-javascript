// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return s;
  // Only change code above this line
}
console.log(editInPlace());

// Prevent Object Mutation
// JavaScript provides a function Object.freeze to prevent data mutation.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // This wont alter the value 
obj.newProp = "Test"; // This wont alter the value 
console.log(obj); 


// Set Default Parameters for Your Functions
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John.
console.log(greeting()); // Hello Anonymous.

// Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i]; // The property of "i" i.e "i++" is applied to args
  }
  return total;
}

console.log(sum(2, 5, 6, 4));

/* When you call sum(2, 5, 6, 4), args becomes [2, 5, 6, 4].

First Iteration (i = 0):
args[0] is 2.
total += args[0] adds 2 to total.

Second Iteration (i = 1):
args[1] is 5.
total += args[1] adds 5 to total.

Third Iteration (i = 2):
args[2] is 6.
total += args[2] adds 6 to total.

Fourth Iteration (i = 3):
args[3] is 4.
total += args[3] adds 4 to total. */


// Destructuring assignment :- Is a syntax feature in JavaScript that allows you to unpack values 
// from arrays or properties from objects into distinct variables. 
// It provides a more concise and readable way to extract data, making it easier to work with complex structures.

// Use Destructuring Assignment to Assign Variables from Nested Objects
const user = {
  johnDoe: { 
    age: 34,
    email: 'samhonk@freeCodeCamp.com'
  }
};

const { 
  johnDoe: { 
    age, 
    email 
  }
} = user;

const { 
  johnDoe: { 
    age: userAge, 
    email: userEmail 
  }
} = user;

console.log(user);

// Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a]; // Array Deconstructor

console.log(a)

// Destructuring via rest elements
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

// Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {

  // Only change code below this line
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

// Use class Syntax to Define a Constructor Function

// Only change code below this line
class Vegetable{
  constructor(name){
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name);


// Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  
  set temperature(celsius) {
    return this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature;
// console.log(temp)


// Class Constructor
// A class constructor in JavaScript is a special method within a class that is automatically called
// when a new instance of the class is created. The constructor is used to initialize the object’s properties and 
// perform any setup or initialization required for that object.

class Person{
  constructor(name, age, father){
    this.name = name;
    this.age = age;
    this.father = father;
  }

  introduce(){
    console.log(`His name is ${this.name} and he is ${this.age} years old, son of Mr.${this.father}`)
  }
}

const person = new Person("Sourav", 22, "Sam Ebenezer"); // "new" keyword is used to invoke the constructor method
person.introduce()


/* Promise:
A Promise in JavaScript is an object that represents the eventual completion 
(or failure) of an asynchronous operation and its resulting value.
Promises provide a more powerful and flexible way to handle asynchronous operations compared to traditional callback functions.

Syntax : const myPromise = new Promise((resolve, reject) => { });
*/

/* Complete a Promise with resolve and reject:
A promise has three states: pending, fulfilled, and rejected.
The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. 
The resolve and reject parameters given to the promise argument are used to do this. 
resolve is used when you want your promise to succeed, and reject is used when you want it to fail. 
These are methods that take an argument, as seen below. */

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});


/* Handle a Fulfilled Promise with .then:
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), 
often a server request. When you make a server request it takes some amount of time, 
and after it completes you usually want to do something with the response from the server. 
This can be achieved by using the then method. 
Syntax:

myPromise.then(result => {
  
})

*/

const makeRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// If Successfull
makeRequest.then(result =>{
  console.log(result)
});

// If Failed
makeRequest.catch(error => {
  console.log(error)
});



/* Handle a Rejected Promise with catch:
catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called.
Syntax: 

myPromise.catch(error => {
  console.log(error)
}); 

*/

