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

// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

// SOLUTION

var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();


// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

//Solution

// Complete the aVeryBigSum function below.

function aVeryBigSum(ar) {
  return ar.reduce((num, cur) => {
    return  num + cur
  })
}

// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).
//Explanation 4! = 4*3*2*1 = 24
//Solution
function factorial (n){
  if (n === 0){
      return 1
  }

  return n * factorial(n - 1);
}

//The button's initial text label is 0. After each click,
//the button must increment by . 
//Recall that the button's text label is the JS object's innerHTML property.

//Solution
//HTML
// <!-- Enter your HTML code here -->
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//           <link rel="stylesheet" href="css/button.css" type="text/css">
//         <title>Button</title>
//     </head>
//     <body>
//    <button id="btn">0</button>
//     </body>
//     <script src="js/button.js" type="text/javascript"></script>
// </html>

JS
function addOne () {
  const el = parseInt(document.getElementById('btn').innerHTML ++)
}
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', addOne )

//RESERVED A STRING NOT USING REVERSE FUNC
//SOLUTION 

function reserve(str){
  let reserved = '';
  for(let char of str){
    reserved = char + reserved
  }
  return reserved
}

reserve('i loved ibk');


// Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. 
// The function must return a count of all such objects  in array  a that satisfy o.x === o.y.
//Solution

function getCount(objects) {
    
    let n = 0
  const func = (ar)=> {
    if(ar.x === ar.y){
    return n = n + 1;
  }else {
    return n
  }
  }
  objects.forEach(func)
    return n;
}

//TWO SUM 
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//Solution


const twoSum = function(nums, target) {
  const comp = {};
  for(let i = 0; i < nums.length; i++){
  if( comp [nums[i]] >= 0){
  return [comp[nums[i]] , i]
  }
  comp[target-nums[i]] = i
  }
  };
  twoSum([2,3,4], 7);



  // Given a string, find the length of the longest substring without repeating characters.
// Solution
  // var lengthOfLongestSubstring = function(s) {
//     const exited = []
//    const arr = s.split('')
//     for(let i = 0; i < arr.length; i++){
//       if(!exited.includes(arr[i])){
//         exited.push(arr[i])
//       }
      
//     }
//     return exited.length
    
// };
// lengthOfLongestSubstring("pwwkew");

// function morethanOne (arr){
//   let cur = 0;
//   let hash = {};
//  for(let i=0 ; i <arr.length; i++){
//   if (hash[arr[i]] == null){
//     cur += 1
//   }else {
//    return arr[i]
//   }
//   hash[arr[i]] = i;
//  }
// }

// morethanOne([1,2,3,4,5,6,3,3]);


// var moveZeroes = function(nums) {
//     const len = nums.length;
//     let i;
//     for (i = 0; i < len; i++) {
//         if (nums[i] === 0) {
//             nums.push(nums.splice(i, 1));
//             i = i - 1;
//         }
//     }
// };

// var moveZeroes = function(nums) {
//     const len = nums.length;
//     let i;
//     for (i = 0; i < len; i++) {
//         if (nums[i] === 0) {
//             nums.push(nums.splice(i, 1));
//             i = i - 1;
//         }
//     }
// };



// Algoriythms that print all currency in ATM as customer demanded
//Solution

function calcAmounts(amount){
  let currency = {}
  let oneTH = 1000;
  let fiveH = 500;
  let twoH = 200;
  let oneH = 100;
  let fiftyN = 50;

while(amount !== 0) {
 if(amount >= oneTH) {
   currency.Onethousand = parseInt(amount / oneTH);
   amount = parseInt((amount / oneTH - currency.Onethousand ) * 1000);
 }
 if(amount >= fiveH ){
   currency.fiveHundred = parseInt(amount / fiveH);
     amount = parseInt(amount - fiveH)
 }
  if(amount >= twoH){
     currency.twoHundred = parseInt(amount / twoH);
     if (amount % twoH === 0) {
       currency.twoHundred = 1;
     }
     amount = amount % twoH;
 }
 if(amount >= oneH){
     currency.onehundred = parseInt(amount / oneH);
      if (amount % oneH === 0) {
       currency.onehundred = 1;
     }
   amount = (amount % oneH) ;
 
 }
 if(amount >= fiftyN){
   currency.fiftyNaira = parseInt(amount / fiftyN);
    if (amount % oneH === 0) {
     currency.onehundred = 1;
   }
   amount = amount % fiftyN;
 }
 return currency;
}

return currency;
}

calcAmounts(109650);



// function Dispenser(amount, arr) {
//   if (amount === 0) {
//     return
//   }
//   let currency = {};
//   for (let i = 0 ; i < arr.length; i++) {
//      if (amount % arr[i] !== 0) {
//         currency[arr[i]] = parseInt(amount / arr[i]);
//         amount =  amount % arr[i];
//      }
//      else if(amount % arr[i] === 0) {
//       currency[arr[i]] = parseInt(amount / arr[i]);
//       amount = 0 ;
//     }
//   }
//    return currency;
// }

// Dispenser(1223, [1000, 500, 200, 100, 50, 20, 10]);



// function that merge two arrays alternatively

//solution

// function mergeArray(arr1, arr2) {
//   let arr3 = [];
 
//   for (let i = 0; i < arr1.length; i++) {
//       arr3.push(arr1[i], arr2[i])
//    }
//      if(arr1.length < arr2.length) {
//        arr3.push(...arr2.splice(arr1.length));
//      }
//     return arr3;
    
//  };
 
//   mergeArray([1,3,5] ,[2, 4, 6, 7, 8]);


// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

//SOlution

const findMedianSortedArrays = function(nums1, nums2) {
  let nums3 = [...nums1, ...nums2].sort((a, b) => ( a - b))
  if(nums3.length % 2 !== 0) {
    return nums3[Math.ceil(nums3.length / 2 ) - 1] 
  }
else {
  return (nums3[(nums3.length / 2 - 1)] + nums3[nums3.length / 2]) / 2 
}
};

findMedianSortedArrays([1, 3], [2]);




//Given an array nums of n integers, are there
//  elements a, b, c in nums such that a + b + c = 0?
//  Find all unique triplets in the array which gives the sum of zero.
// Note:The solution set must not contain duplicate triplets.
//SOLUTION
function threeSum(nums) {
	const results = []

	// obviously irrelevant if we don't have at least 3 numbers to play with!
	if (nums.length < 3) return results

	// having the numbers in ascending order will make this problem much easier.
	// also, knowing the overall problem  will take at least O(N^2) time, we can
	// afford the O(NlogN) sort operation
	nums = nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		// `i` represents the "left" most number in our sorted set.
		// once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number
		if (nums[i] > target) break

		// we don't want repeats, so skip numbers we've already seen
		if (i > 0 && nums[i] === nums[i - 1]) continue

		// `j` represents the "middle" element between `i` and `k`.
		// we will increment this up through the array while `i` and `k`
		// are anchored to their positions. we will decrement `k` for
		// for each pass through the array, and finally increment `i`
		// once `j` and `k` meet.
		let j = i + 1

		// `k` represents the "right" most element
		let k = nums.length - 1
		
		// to summarize our setup, we have `i` that starts at the beginning,
		// `k` that starts at the end, and `j` that races in between the two.
		//
		// note that `i` is controlled by our outer for-loop and will move the slowest.
		// in the meantime, `j` and `k` will take turns inching towards each other depending
		// on some logic we'll set up below. once they collide, `i` will be incremented up
		// and we'll repeat the process.

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]

			// if we find the target sum, increment `j` and decrement `k` for
			// other potential combos where `i` is the anchor
			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[j], nums[k]])

				// this is important! we need to continue to increment `j` and decrement `k`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].
				//
				// (i'm not a fan of this part because we're doing a while loop as we're
				// already inside of another while loop...)
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				// finally, we need to actually move `j` forward and `k` backward to the
				// next unique elements. the previous while loops will not handle this.
				j++
				k--

			// if the sum is too small, increment `j` to get closer to the target
			} else if (sum < target) {
				j++

			// if the sum is too large, decrement `k` to get closer to the target
			} else { // (sum > target)
				k--
			}
		}
	}

	return results
};




 var threeSumClosest = function(nums, target) {
  //   let Maxvalue = 20;
  //   nums.sort((a, b)=> (a - b))
  //    if(nums.length < 3) return nums;
  
  //  for(let i = 0; i < nums.length && Maxvalue != 0; i++) {
  //     let j = i + 1;
  //     let k = nums.length - 1;
  //     while(j < k){
  //       let sum = nums[i] + nums[j] + nums[k]
  //        if( parseInt(target - sum) <  parseInt(Maxvalue)){
  
  //          Maxvalue = target- sum
  //        }
  //        if (sum < target)
  //           j++;
  //         else k--;
  //     }
  //    return  Maxvalue - target;
  //  }
  // };
  //  threeSumClosest([0,1,2], 0);



  ///HASH TABLE IMPLEMENTATION
  class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key,value){
      let index = this._hash(key);
      if(!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
    get(key){
      let index = this._hash(key);
      if(this.keyMap[index]){
        for(let i = 0; i < this.keyMap[index].length; i++){
          if(this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1]
          }
        }
      }
      return undefined;
    }
    keys(){
      let keysArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!keysArr.includes(this.keyMap[i][j][0])){
              keysArr.push(this.keyMap[i][j][0])
            }
          }
        }
      }
      return keysArr;
    }
    values(){
      let valuesArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!valuesArr.includes(this.keyMap[i][j][1])){
              valuesArr.push(this.keyMap[i][j][1])
            }
          }
        }
      }
      return valuesArr;
    }
  }
  
  let ht = new HashTable(17);
  ht.set("maroon","#800000")
  ht.set("yellow","#FFFF00")
  ht.set("olive","#808000")
  ht.set("salmon","#FA8072")
  ht.set("lightcoral","#F08080")
  ht.set("mediumvioletred","#C71585")
  ht.set("plum","#DDA0DD")
  ht.set("purple","#DDA0DD")
  ht.set("violet","#DDA0DD")
  
  
  ht.keys().forEach(function(key){
    console.log(ht.get(key));
  })


// Given two strings s and t , write a function to determine if t is an anagram of s.
//Solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
     let sCount = charCount(s);
     let tCount = charCount(t);
   for(let char in sCount){
    if(!(char in tCount)) return false
    if(tCount[char] !== sCount[char]) return false;
  }
   return true;
 }

  var charCount = function(string) {
  const chars = {};
  for(let char of string) {
    chars[char] = (chars[char] || 0) + 1;
  }
    return chars 
  }
isAnagram( "anagram", "nagaram");


// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Note:// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

var singleNumber = function(nums) {
  let count= {};
    for (let i = 0; i < nums.length; i++){
      count[nums[i]] = (count[nums[i]] || 0) + 1;
    }
    for(let num in count){
      if(count[num] === 1){
        return num
      }
    }
};

singleNumber([4,1,2,1,2]);


// Given two strings s and t which consist of only lowercase letters.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Find the letter that was added in t.

var findTheDifference = function(s, t) {
 return [...t].sort().find((char, i) =>  char !== [...s].sort()[i]);
};

findTheDifference( "acdb", "abcde");

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)



// Given a non-empty array of integers, return the k most frequent elements.
//Solution
var topKFrequent = function(nums, k) {
  obj = {};
  nums.forEach((num)=> obj[num] = (obj[num]||0) + 1);
  console.log(Object.keys(obj).sort((a,b)=> obj[b]-obj[a]))
  console.log(obj)
  return Object.keys(obj).sort((a,b)=> obj[b]-obj[a]).slice(0,k)
}

topKFrequent([1], 2);


// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

//Solution

var removeDuplicates = function(nums) {
  let hash = {};
  for(let num of nums){
    hash[num] = (hash[num] || 0) + 1;
  }
    if(hash){
          nums.length = 0;
    }

  for(let key in hash){
    nums.push(key);
  }
    nums.sort( (a,b) =>  a-b )
  return nums.length;
};

removeDuplicates([1,1,2]);



// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

var searchRange = function(nums, target) {
  for(let i =0; i< nums.length; i++){
    if(nums[i] === target){
      for(let j=nums.length-1;j>=i; j--){
        if(nums[j]===target){
          return [i,j];
        }
      }
    }
  }
    
  return [-1, -1];
};

searchRange([5,7,7,8,8,10], 8);


// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

//SOLUTION

var searchInsert = function(nums, target) {
 
  if(nums.indexOf(target) === -1){
    nums.push(target)
    nums.sort((a,b) => a -b )
    return nums.indexOf(target)
  }
  let middle = Math.floor((nums.length - 1) / 2)
  while (middle < nums.length) {
  let k = middle -1;
  let x = middle + 1;
  if(nums[middle] > target){
     middle = k
  }
  else if(nums[middle] < target){
    middle = x
  } 
  else  {
    return nums.indexOf(target);
  }
  
  }
};
searchInsert([1,3,5,6], 2);

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.


var searchMatrix = function(matrix, target) {
  var sortedArray= matrix.reduce((flattenedMatrix, row) => {
    return [...flattenedMatrix, ...row]
  }, [])
  
  const bisect = (array) => {
   let mid = Math.floor(array.length / 2);
    if(array[mid] === target) return true;
    if(array.length <= 1) return false;
    if(array[mid -1] < target && array[mid +1] > target) return false;
  
     const [high, low] = [array.slice(mid + 1), array.slice(0,mid)]
     return target <= low[low.length -1]? bisect(low) : bisect(high)
  
  
  }
  return bisect(sortedArray);
  
  }
  
  searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ], 13);
  

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

// You are given a target value to search. If found in the array return true, otherwise return false.


//Solution
var search = function (nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (nums[mid] === target) return mid;
  // difference is here
      else if (nums[l] <= nums[mid]) {
          if (nums[l] <= target && target < nums[mid]) r = mid - 1;

          else l = mid + 1;

      } else {

          if (nums[mid] < target && target <= nums[r]) l = mid + 1;

          else r = mid - 1;

      }
  }
  return -1;
};



// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.
//Solution

function findMin(nums) {
  let l = 0;

  let r = nums.length - 1;

  // console.log(r)
  while (l < r) {
    const m = Math.floor((l + r) / 2);

    // console.log(m)
    if (nums[m] > nums[r]) l = m + 1;

    else r = m;
  }
  return nums[l];
}
 findMin([4,5,6,7,0,1,2]);

//  Write a function that takes a string as input and reverse only the vowels of a string.
// Solution
var reverseVowels = function(s) {
  const array = [...s]
  const vowels = 'aeiouAEIOU'
  let first = 0
  let end = array.length-1
  while(first < end) {
      if(vowels.includes(array[first]) && vowels.includes(array[end])) {
          const change = array[first]
          array[first] = array[end]
          array[end] = change
          first++
          end--
      } else if(vowels.includes(array[first])) {
          end--
      } else if(vowels.includes(array[end])) {
         first ++

      } else {
          first++
          end--
      }
  }
  return array.join('')
};

reverseVowels('hello');



// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

//SOLUTION

var romanToInt = function(s) {

  const data = {
    I: 1,
    V :5,
    X :10,
    L :50,
    C: 100,
    D: 500,
    M: 1000,
  } 
  
  let sum = 0;
  for(let i = 0; i<s.length; i++){

    if(data[s[i]] < data[s[i + 1]]){

     sum -= data[s[i]]

    }else{

     sum += data[s[i]]

    }
  }
    return sum;
};



// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//solution

var longestCommonPrefix = function(arr) {

  if (!arr.length) return "";

  let prefix = "";
  for (let i = 0; i < arr[0].length; i++) {

      for (let j = 0; j < arr.length-1; j++) {

        if (arr[j][i] !== arr[j+1][i]) return prefix;

      }
      prefix += arr[0][i];
  }
  return prefix;
  // Time Complexity: O(M*N), M = length of shortest word, N = length of given array
  // Space Complexity: O(1)
};
longestCommonPrefix(["flower","flow","floight", "flo"]);


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.

// Open brackets must be closed in the correct order.


//Solution

var isValid = function(s) {
    let stack = [];
    
    // Not paired
    if(s.length%2 !== 0){
        return false;
    }else{
        for(let i = 0; i < s.length;i++){
            // Store
            if(s[i]==='('||s[i]==='['||s[i]==='{'){
                stack.push(s[i]);
            }
            else{
                switch(s[i]){
                    case ')':
                        if(stack.pop()!=='(') return false; 
                        break;
                    case ']':
                        if(stack.pop()!=='[') return false;
                        break;
                    case '}':
                        if(stack.pop()!=='{') return false;
                        break;
                }
            }
        }
    }
    
    if(stack.length !==0) return false;
    
    return true;
};

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

//SOLUTION

var romanToInt = function(s) {

  const data = {
    I: 1,
    V :5,
    X :10,
    L :50,
    C: 100,
    D: 500,
    M: 1000,
  } 
  
  let sum = 0;
  for(let i = 0; i<s.length; i++){

    if(data[s[i]] < data[s[i + 1]]){

     sum -= data[s[i]]

    }else{

     sum += data[s[i]]

    }
  }
    return sum;
};



// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//solution

var longestCommonPrefix = function(arr) {

  if (!arr.length) return "";

  let prefix = "";
  for (let i = 0; i < arr[0].length; i++) {

      for (let j = 0; j < arr.length-1; j++) {

        if (arr[j][i] !== arr[j+1][i]) return prefix;

      }
      prefix += arr[0][i];
  }
  return prefix;
  // Time Complexity: O(M*N), M = length of shortest word, N = length of given array
  // Space Complexity: O(1)
};
longestCommonPrefix(["flower","flow","floight", "flo"]);


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.

// Open brackets must be closed in the correct order.


//Solution

var isValid = function(s) {
    let stack = [];
    
    // Not paired
    if(s.length%2 !== 0){
        return false;
    }else{
        for(let i = 0; i < s.length;i++){
            // Store
            if(s[i]==='('||s[i]==='['||s[i]==='{'){
                stack.push(s[i]);
            }
            else{
                switch(s[i]){
                    case ')':
                        if(stack.pop()!=='(') return false; 
                        break;
                    case ']':
                        if(stack.pop()!=='[') return false;
                        break;
                    case '}':
                        if(stack.pop()!=='{') return false;
                        break;
                }
            }
        }
    }
    
    if(stack.length !==0) return false;
    
    return true;
};



// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example


// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

//SOLUTION
function repeatedString(s, n) {
  let fracN = Math.trunc(n / s.length);
  const reminder =  n % s.length ;
  let counter = 0;
 
   for(let i = 0; i < s.length; i++){
     if(s[i] == 'a'){
       counter++
     }
   }
 
   counter = counter * fracN;
 
   for(let i = 0; i < reminder; i++){
     if(s[i] == 'a'){
       counter++
     }
   }
 
  return counter;
 }
 
 repeatedString("aba", 10);

function minimumDistances(a) {
  const count = {};
  let firstIndex;
  let secondIndex;
  for (let i = 0; i < a.length; i++){
    count[a[i]] = (count[a[i]] || 0) + 1;
 }
  for(let j in count){
  if(count[j] > 1) {
    firstIndex = a.indexOf(parseInt(j));
    // console.log(firstIndex)
  }
  
  if(firstIndex){
    console.log(firstIndex, 'firstIndex')
      secondIndex = a.indexOf(parseInt(j), firstIndex);
    }
    console.log(firstIndex, secondIndex , j);
  }
}

minimumDistances([3,2,1,2,3]);