//  Domaci:
// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na
//  parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]

function first(array) {
  let arrNew = [];
  for (let element of array) {
    if (element % 2 === 0) {
      arrNew.push(element);
    }
  }
  return arrNew;
}
console.log(first([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)

function evenNum(arr) {
  const newArr = [];
  for (let element of arr) {
    if (element % 2 === 0 && element !== 0) {
      newArr.push(element);
    }
  }
  return newArr;
}
console.log(evenNum([4, 2, 6, 8, 1, 9, 0, 5, 3, 5, 5, 6, 7, 8]));

// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)

function oddNum(arr) {
  const newArr = [];
  for (let element of arr) {
    if (element % 2 !== 0) {
      newArr.push(element);
    }
  }
  return newArr;
}
console.log(oddNum([4, 2, 6, 8, 1, 9, 0, 5, 3, 5, 5, 6, 7, 8]));

// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

// 5. Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
const array = [5, 3, 6, 8, 4, 2, 5, 8, 1];
let sortmethod = array.sort(function (a, b) {
  return a - b;
});
console.log(sortmethod);
let reversemethod = array.reverse();
console.log(reversemethod);
// 1. Sortiranje niza od najmanjeg ka najvecem broju.

// 6. Write a simple JavaScript program to join all elements of the following array into a string where
//  is * between elements.

function second(arr) {
  return arr.join("*");
}
console.log(second([3, 4, 6, 2, 5, 7]));
