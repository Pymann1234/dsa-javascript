/* You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because 
it runs while a specified condition is true and stops once that condition is no longer true. */

const array = [];

// Initialization
let i = 10;

// Finalization
while(i >= 0){
    array.push(i);
    i++;
}

console.log(array);

// for loop
const arr = [];
for (i = 1; i < 5; i++) {
    arr.push(i);
}

// Count Backwards With a For Loop
const arra = [];
for (i = 9; i > 0; i -= 2) {
    arra.push(i);
}
console.log(arra);

// Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];

let total = 0;

for(let i = 0; i < myArr.length; i++){
  total += myArr[i];
}

/* Explanation
Iteration 1 (i = 0): total = 0 + myArr[0] → total = 0 + 2 → total = 2
Iteration 2 (i = 1): total = 2 + myArr[1] → total = 2 + 3 → total = 5
Iteration 3 (i = 2): total = 5 + myArr[2] → total = 5 + 4 → total = 9
Iteration 4 (i = 3): total = 9 + myArr[3] → total = 9 + 5 → total = 14
Iteration 5 (i = 4): total = 14 + myArr[4] → total = 14 + 6 → total = 20 */

// Profile Lookup

// Setup (Important!!)
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock Holmes",
      lastName: "Holmes My Son",
      number: "0487345643",
      likes: ["Intriguing Cases", "Bad Boys For Life", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
    // Only change code above this line
  }
  
 console.log(lookUpProfile("Akira", "likes"));
