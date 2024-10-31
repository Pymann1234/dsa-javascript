/* Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects
Differences between arrays and objects, and which to use in different situations. 
Learning how to use helpful JS methods like splice() and Object.keys() to access and manipulate data */

/* 1. Use an array to store a collection of data.
one-dimensional array, meaning it does not have any other arrays nested within it */

let ourArray = ["Samuel", 46, true, "My son", "BWM"];


// 2. Access an Array's Contents Using Bracket Notation
ourArray[1] = "not b anymore";


// 3. Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));


// 4. Remove Items from an Array with pop() and shift()

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));


/* 5. Remove Items Using splice()
used to remove an element from somewhere in the middle Or remove more than one element.
splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. 
The first two parameters of splice() are integers which represent indexes, or positions, 
of items in the array that splice() is being called upon. */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);


// 6. Add Items Using splice()
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

var op = htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']);
console.log(op);


// 7. Copy Array Items Using slice()
function forecast(arr) {
  // Only change code below this line
  var newArr = arr.slice(2, 4)
  return newArr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// 8. Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));


// 9. Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());


/* 10. Check For The Presence of an Element With indexOf() 
That allows us to quickly and easily check for the presence of an element on an array.
indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element,
or -1 if the element does not exist on the array. */
function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// 11. Iterate Through All an Array's Items Using For Loops
// Example usage :-
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

// Problem :-
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


// 12. Create complex multi-dimensional arrays

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper1']
  ],
  [
    [
      ['deepest'], ['deepest1']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];

console.log(nestedArray[2][1][0][0][0]);


// 13. Add Key-Value Pairs to JavaScript Objects

const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods["grapes"] = 35;
const berry = "strawberries";
foods[berry] = 27;
// Only change code above this line

console.log(foods);


// 14. Modify an Object Nested Within an Object

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);


// 16. Access Property Names with Bracket Notation

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
 return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));


// 17. Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);


// 18. Check if an Object has a Property

users.hasOwnProperty('Alan'); // Returns true or false
'Alan' in users;

// hasOwnProperty() method and 'in' keyword

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};


function isEveryoneHere(userObj) {
  // Only change code below this line
  return userObj.hasOwnProperty('Alan') &&
  userObj.hasOwnProperty('Jeff') &&
  userObj.hasOwnProperty('Sarah') &&
  userObj.hasOwnProperty('Ryan')
  // Only change code above this line
}

console.log(isEveryoneHere(users));


// 18. Iterate Through the Keys of an Object with a for...in Statement

const user = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: true
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let result = 0;
  for(let user in  allUsers){
    if(allUsers[user].online == true){
      result ++
    }
  }
    return result;
  // Only change code above this line
}

console.log(countOnline(user));


/* 19. Generate an Array of All Object Keys with Object.keys()
We can also generate an array which contains all the keys stored in an object with the Object.keys() method. */

let sers = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
   var op = Object.keys(obj);
   return op;
  // Only change code above this line
}

console.log(getArrayOfUsers(sers));


// 20. Modify an Array Stored in an Object

let uer = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  var op = userObj.data.friends;
  op.push(friend);
  return op;
  // Only change code above this line
}

console.log(addFriend(uer, 'Pete'));









