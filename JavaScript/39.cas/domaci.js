// Domaci:

// 1. From the array of numbers, choose even double even numbers and compute the sum using Array's
// filter, map and reduce methods.

function numbers(arr) {
  let arr1 = arr
    .filter((num) => num % 2 === 0 && num % 4 === 0)
    .map((num) => num * 2)
    .reduce((a, b) => a + b, 0);
  return arr1;
}
console.log(numbers([2, 4, 5, 8, 10, 12, 15, 16]));

// 2. Write a JavaScript program which accept a string as input and swap the case of each character.
//  For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function text(string) {
  let rezultat = "";
  for (let karakter of string) {
    if (karakter === karakter.toUpperCase()) {
      rezultat += karakter.toLowerCase();
    } else {
      rezultat += karakter.toUpperCase();
    }
  }
  return rezultat;
}
console.log(text("The Quick Brown Fox"));


