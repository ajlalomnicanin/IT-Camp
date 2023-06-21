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
