// 1. Modify Array Data With Indexes

const ourArray = [46, 93, 4];
ourArray[2] = 24;
console.log(ourArray);

// 2. Access Multi-Dimensional Arrays With Indexes

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [2, 5, 6],
  [[1, 2, 3], 46, 93]
];

const subArray = array[2];
const nestedArray = array[3];
const element = array[3][1];

console.log(element); // 46

// 3. Manipulate Arrays With 'push()' Method => "push() is used to push a value into the end of an array"

const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// console.log(arr1);
console.log(arr2);


// 4. Manipulate Arrays With 'pop()' Method => "pop() is used to pop a value off of the end of an array"

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// 5. Manipulate Arrays With shift Method => "shift() removes the first element instead of the last"

const ourAray = ["Simpson", "Meli", ["Samuel"]];
const removedArray = ourAray.shift();
console.log(removedArray); // 

/* The Opposites
Last      First (Adds the element to the array)
.push() - .unshift()

(Removes the element from the Array)
.pop()  - .shift(); */

// 6. Manipulate Arrays With unshift Method = > "unshift() is used to push a value to the beginning of an array"

const myArray = [["John", 23], ["Dog", 46]];
myArray.shift();
myArray.unshift(["Paul", 93]);
console.log(myArray);



//                                     Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. 
// New items can be added at the back of the queue and old items are taken off from the front of the queue.

/* Q. Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed. */

function nextInLine(arr, item) {
  arr.push(item);
  arr.shift();
};

let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + (testArr));
nextInLine(testArr, 5); // This becomes a 'method()'
console.log("After: " + JSON.stringify(testArr));


// NOTE (==) and (===)
// If the values being compared are not of the same type, the Equality Operator will perform a type conversion, and then evaluate the values.
// However, the Strict Equality operator will compare both the data type and value as-is, without converting one type to the other.
// 3 == '3' returns true because JavaScript performs type conversion from string to number.
// 3 === '3' returns false because the types are different and type conversion is not performed.


/* 
=> Adding a Default Option in Switch Statements
In a switch statement you may not be able to specify all possible values as case statements. 
Instead, you can add the default statement which will be executed if no matching case statements are found. 
Think of it like the final else statement in an if/else chain.
*/

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    case "d":
      answer = "stuff";
      break;
    default:
    case 4:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

console.log(switchOfStuff("e"));

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));


// Counting Cards
// Practice this well!! and Understand!!
let count = 0;

function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/; // This is a Regular Expression (RE)
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || regex.test(card)) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";
  
  return "Change Me";
  // Only change code above this line
}

console.log(cc("J"));
cc(3); cc(7); cc('K'); cc('A');


// Objects

// A. Accessing Object Properties with Dot Notation
const obj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

// B. Accessing Object Properties with Bracket Notation
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
console.log(myObj["Space Name"]);

// C. Accessing Object Properties with Variables
// Objects With Methods
const dogs = {                                  // let car = {
  Fido: "Mutt",                                 //   make: "Toyota",
  Hunter: "Doberman",                           //   model: "Corolla",
  Snoopie: "Beagle"                             //   year: 2020,
};                                              //   start: function() {
//     console.log("Car started");
const myDog = "Hunter";                         // },
const myBreed = dogs[myDog];                    //   stop: function() {
console.log(myBreed);                           //     console.log("Car stopped");
//   }
// };

// car.start(); Car started
// car.stop();  Car stopped


// Updating Object Properties
const mDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

mDog.name = "Happy Coder"; // Updating Object Properties
mDog.bark = "woof";        // Add New Properties to a JavaScript Object

console.log(mDog);


// Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("alpha"));


// Testing Objects for Properties

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// Manipulating Complex Objects

// Sometimes you may want to store data in a flexible Data Structure. 
// A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of 
// strings, numbers, booleans, arrays, functions, and objects.
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Samuel",
    "title": "The World Cup",
    "release_year": 2002,
    "formats": [
      "son",
      "bisthi",
      "nigga"
    ]
  }
];


// Accesssing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];


/* Record Collection (Important)
You are creating a function that aids in the maintenance of a musical album collection. 
The collection is organized as an object that contains multiple albums which are also objects.
Each album is represented in the collection with a unique id as the property name. 
Within each album object, there are various properties describing information about the album. 
Not all albums have complete information.

The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object. */


// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  const album = records[id];
  // Update the album
  if (value === "") {
    delete album[prop];
  } else if (prop !== "tracks") {
    album[prop] = value;
  } else {
    album["tracks"] = album["tracks"] || [];
    album["tracks"].push(value);
  }
  // Return the full collection
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


// Nesting For Loops
const arr = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


// Iterate with Do...While Loops

// Setup
const mArray = [];
let i = 10;

// Only change code below this line

do {
  mArray.push(i);
  i++;
} while (i <= 20)


console.log(mArray)

// The main difference between a do...while loop and a while loop is that 
// a do...while loop guarantees that the code inside the loop will be executed at least once, even if the condition is false initially.




var rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var op = rand(1, 10);
console.log(op);




