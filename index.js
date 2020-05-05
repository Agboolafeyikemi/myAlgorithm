// PROBLEM ONE
//  Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

//SOLUTION ONE

function sumAll(arr) {
  compareFunction = (a, b) => {
    return a - b;
  };
  arr.sort(compareFunction);
  let arrayNumber = [];
  let firstEl = arr[0];
  while (firstEl < arr[arr.length - 1]) {
    arrayNumber.push(firstEl + 1);
    firstEl += 1;
  }
  return (
    arrayNumber.reduce((sum, cur) => {
      return sum + cur;
    }) + arr[0]
  );
}

sumAll([5, 10]);

//  Diff Two ArraysPassed
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const compareFunc = (a, b) => {
    return a - b;
  };
  var newArr = [];
  let mergeArr = [...arr1, ...arr2];
  const filterFunc = num => {
    let res1 = arr1.includes(num) && arr2.includes(num);
    if (!res1) {
      return num;
    }
  };
  newArr = mergeArr.filter(filterFunc);
  return newArr.sort(compareFunc);
}

diffArray([1, 2, 3, 10, 5], [1, 2, 3, 4, 5]);

//  Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.
//SOLUTION
function destroyer(...arr) {
  let restArr = Array.from(arguments).slice(1);
  let newArr = [];
  arguments[0].map(el => {
    if (!restArr.includes(el)) {
      newArr.push(el);
      return newArr;
    }
  });
  return newArr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);

//BEST SOLUTION
const destroyer = (arr, ...valsToRemove) =>
  arr.filter(elem => !valsToRemove.includes(elem));

//  Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

//SOLUTION 

function whatIsInAName(collection, source) {
  let srcArr = Object.keys(source);

 return  collection.filter(function (obj){
    for(let i = 0 ; i < srcArr.length; i++){
   if(!obj.hasOwnProperty(srcArr[i]) || obj[srcArr[i]] !== source[srcArr[i]])
      return false;
    }
    return true
  });
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });


// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//SOLUTION

function spinalCase(str) {
  let regex = /\s+|_+/g;
 str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
 
 return str.replace(regex, "-").toLowerCase()
}

spinalCase('This Is Spinal Tap');

//  Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

function translatePigLatin(str) {
  return str
  .replace(/^[aeiou]\w*/,'$&way')
  .replace(/(^[^aeiou]+)(\w*)/,"$2$1ay");
   
}

// Search and ReplacePassed
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"




function myReplace(str, before, after) {
  if(before.charAt(0) === before.charAt(0).toUpperCase()){
    after = after.charAt(0).toUpperCase() +  after.slice(1)   
  }
    return str.replace(before, after);
  }
  
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");





//  Missing letters
//   Find the missing letter in the passed letter range and return it.
  
//   If all letters are present in the range, return undefined.
// SOLUTION
function fearNotLetter(str) {
  let startCode = str.charCodeAt(0)
  let endCode = str.charCodeAt(str.length-1)
  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) !== startCode){
    return  String.fromCharCode(startCode)
    }else{
      startCode++
      if (str.charCodeAt(i)=== endCode){
      return  undefined
      }
    }
  }
  return startCode;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");

// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(...arr) {
  let newArr = [...arr[0]];
 let flatenArr = arr.flat();
 flatenArr.map(num => {
   if(!newArr.includes(num)){
     newArr.push(num)
   }
 })
 return newArr
}

uniteUnique([1, 3, 2],[5, 2, 1, 4],[2, 1]);


// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
//SOLUTION
function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");

// BEST SOLUTION

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");


// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
//SOLUTION

function sumFibs(num) {
  let arr = [1, 1]
  let nextFib = 0;
  
    while ( (nextFib = arr[0] + arr[1]) <= num){
         arr.unshift(nextFib) 
    }
   return arr = arr.filter(fib => fib % 2 !== 0)
       .reduce((acc, cur)=> arr = acc + cur)
  
  
  return arr
}

sumFibs(10);


//  Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
// SOLUTION


function sumPrimes(num) {

  let numArr = [];
  for(let i = 1; i <=num; i++) {
      numArr.push(i)
  }
  return numArr.filter( isPrime => {
       for(let j = 2; j < isPrime; j++){
       if(isPrime % j == 0){return false}
       }return isPrime !== 1 && isPrime !== 0;
     }
     ).reduce((a, b) => a+b)
   
  return numArr;
}

sumPrimes(10);


//  Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
//SOLUTION

function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}


//  Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array
// once the condition is satisfied, 
//otherwise, arr should be returned as an empty array.
// SOLUTION

function dropElements(arr, func) {
  let newArr = []
   let index = arr.findIndex(func)
   if(index !== -1){
    let res =  arr.slice(index)
       newArr.push(...res)
    } else  {
       newArr = []
    }
  return newArr
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) 

//BEST SOLUTION

function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

//  Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
//SOLUTION

function steamrollArray(arr) {
  return arr.reduce((prev, curr) => prev.concat(Array.isArray(curr) ? steamrollArray(curr) : curr), [])
 
 };


//  Binary Agents
//  Return an English translated sentence of the passed binary string.
 
//  The binary string will be space separated.
// SOLUTION

 function binaryAgent(str) {
  let result = [];
   str.split(' ').map(char => {
   let par =  parseInt(char, 2)
    result.push(String.fromCharCode(par))
   return result
  });
 return result.join('')
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



//  Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.
// SOLUTION
function truthCheck(collection, pre) {

  let res = collection.every(obj => (obj[pre]));
  return res
}


truthCheck([{"single": ""}, {"single": "double"}], "single")


//  Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.
//SOLUTION

function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}

addTogether(2, 3);