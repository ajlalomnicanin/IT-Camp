// Domaci:
// 1. Write a JavaScript function to check whether an `input` is an array or not.

function arr(input) {
  return Array.isArray(input);
}
console.log(arr("w3resource"));
console.log(arr([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array.

function arr_clone(array) {
  return array.slice();
}
console.log(arr_clone([1, 2, 4, 0]));
console.log(arr_clone([1, 2, [4, 0]]));

// ili

const cloneArr = (arr) => {
  const arr2 = [];
  arr2[arr2.length] = 5;
  for (let i = 0; i < arr.length; i++) {
    arr2[0] = arr[0];
  }

  // // for petlja koja se koristi kod iterirajucih objekata (2. verzija)
  // for (let element of arr) {
  //   arr2[i] = element;
  // }
  return arr2;
};
console.log(cloneArr(1, 2, 4, 6, 89));

console.log("3.zadatak");
// 3. Write a JavaScript function to get the first element of an array. Passing the parameter
// 'n' will return the first 'n' elements of the array.

function first(array, n) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }
  if (n == undefined || n == null || n == 1) {
    return array[0];
  }
  return array.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3)); // 7

// ili
console.log("treci zadatak");
const firstN = (arr, n = 1) => {
  // if (n === undefined) {
  //   return [0];
  // } else {
  // }
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }
  return "Kraj!";
};
console.log(firstN([7, 9, 0, -2]));
console.log(firstN([7, 9, 0, -2], 3));
