/* An algorithm is a series of step-by-step instructions that describe how to do something.
To write an effective algorithm, it helps to break a problem down into smaller parts and think carefully about how to solve each part with code */


// 1. Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
console.log(convertCtoF(30));


// 2. Reverse a string

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  reverseString("hello");


// 3. Factorialize a number 

function factorialize(num) {
    let product = 1;
    for(let i = 2; i <= num; i ++){
      product *= i;
    }
    return product;
  }
  
  factorialize(5);


// 4. Find the Longest Word in a String

function findLongestWordLength(str) {
    return str.split(' ').reduce((longest, word) => Math.max(longest, word.length), 0);
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


// 5. Return Largest Numbers in Arrays

function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 5. Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "m"))


// 6. Truncate a String

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 12));













