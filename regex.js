/* Regular expressions, are patterns used to match character combinations in strings. 
They are powerful tools for searching, replacing, and extracting text based on specific patterns. 
JavaScript provides both a RegExp object and literal notation for creating regular expressions. 

1. Using the Test Method
test a regex is using the .test() method. */

let myString = "Hello World";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result)

// 2. Ignore Case While Matching

let mytring = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let rsult = fccRegex.test(myString);

/* 3. Extract Matches
extract the actual matches you found with the .match() method.

Note that the .match() syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string'); */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let esult = extractStr.match("coding"); // Change this line


// 4. Find More Than the First Match. search or extract a pattern more than once, you can use the global search flag: g.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let reult = twinkleStar.match(starRegex); // Change this line


/* 5. Match Anything with Wildcard Period
The wildcard character. will match any one character. The wildcard is also called dot and period. 
You can use the wildcard character just like any other character in the regex. 
For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words. */ 

// 6. Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let sult = quoteSample.match(vowelRegex); // Change this line


//  7. Match Letters of the Alphabet

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);


// 8. Match Numbers and Letters of the Alphabet

let uoteSample = "Blueberry 3.141592653s are delicious.";
let mRegex = /[h-s2-6]/gi; // Change this line
let ult = uoteSample.match(mRegex); // Change this line

console.log(ult)


// 9. Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let yRegex = /<.*?>/; // Change this line
let reslt = text.match(myRegex);


// 10. Find One or More Criminals in a Hunt
// The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"


// 11. Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let relt = calRegex.test(rickyAndCal);


// 12. Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let resut = lastRegex.test(caboose);


/* 13. Match All Letters and Numbers
\w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. 
Note, this character class also includes the underscore character (_) */

let oteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let lt = quoteSample.match(alphabetRegexV2).length;


/* 14. Match Everything But Letters and Numbers
"\W" Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_] */

let quoteSampl = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let resul = quoteSample.match(nonAlphabetRegex).length;

/* 15. Match All Numbers. "\d", with a lowercase d. This is equal to the character class [0-9], 
which looks for a single character of any number between zero and nine */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let rasult = movieName.match(numRegex).length;

/* 16. Restrict Possible Usernames 
You need to check all the usernames in a database.
Here are some simple rules that users have to follow when creating their username.
Usernames can only use alphanumeric characters.
The only numbers in the username have to be at the end.
There can be zero or more of them at the end.
Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters. 

^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input */

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let rest = userCheck.test(username);


// Match WhiteSpace. You can search for whitespace using \s
let countWhiteSpace = /\s/g;

// Search for non-whitespace using \S 







