// Random Numbers 
var random = Math.random() * 100;
var floor = Math.floor(random);
console.log(floor);

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(5, 10));


// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
};

console.log(convertToInteger("56"));

// The parseInt() function parses a string and returns an integer. 
// It takes a second argument for the radix, which specifies the base of the number in the string. 
// The radix can be an integer between 2 and 36.
function convertToInteger(str) {
  return parseInt(str, 2);
};

console.log(convertToInteger("10110"));

// Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
};

checkEqual(1, 2);

// Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
  return (num == 0) ? "zero" : (num > 0) ? "positive" : "negative";
};

console.log(checkSign(1));

// Use Recursion to Create a Countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1); //adding n to the beginning of the array at each step: (Recursive - descending order)
    arr.unshift(n);
    return arr;
  }
};

console.log(countdown(20));

// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum){
  return [];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
};





