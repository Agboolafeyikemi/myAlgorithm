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
