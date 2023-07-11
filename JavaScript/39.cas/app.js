// 1. Iz niza od 10 elemenata izracunati summu parnih brojeva niza.
function first(arr) {
  const arr2 = arr.filter((num) => num % 2 === 0).reduce((a, b) => a + b);
  return arr2;
}
console.log(first([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ili samo pomocu reduce metode

function first2(arr) {
  const arr3 = arr.reduce((prev, curr) => {
    if (curr % 2 === 0) {
      return prev + curr;
    } else {
      return prev;
    }
    // return curr % 2 === 0 ? prev + curr : prev;
  }, 0);
  return arr3;
}
console.log(first2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// function find(arr) {
//   let element = "";
//   let brojac = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if ((arr[i], [j] > arr[i])) {
//         return brojac++;
//       }
//     }
//   }
// }


// Ugnjezdena (nested) for petlja

// const arr11 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr11.length; i++) {
//   for (let j = i; j < arr11.length; j++) {
//     console.log(arr11[i], arr11[j]);
//   }
// }


// Domaci:

// 1. From the array of numbers, choose even double even numbers and compute the sum using Array's 
// filter, map and reduce methods.

// 2. Write a JavaScript program which accept a string as input and swap the case of each character.
//  For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.