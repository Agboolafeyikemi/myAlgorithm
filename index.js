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
