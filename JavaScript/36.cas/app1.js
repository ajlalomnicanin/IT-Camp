// JavaScript Array Iteration metode //

// Array Itteraton metode prolaze kroz svaki element niza.

// forEach() metoda - poziva callback funkciju (koja predstavlja argument forEach() metode jednom za
//  svaki element niza)

const brojevi = [2, 4, 6, 8, 10, 12];
brojevi.forEach((element, index, array) => {
  console.log(index, element, array); //
});
// element - vrednost elementa
// index - pozicija elementa
// array - vraca ceo niz

// callback moze imati tri argumenta :
// 1.vrednost elementa
// 2.index(pozicija) elementa
// 3.ceo niz na koji se primenjuje metoda

// Preko petlje napravi novi niz koji ce imati sve elemente originalnog niza
console.log("Zadatak");

function first(array) {
  const array1 = [];
  for (let i = 0; i < array.length; ++i) {
    // array1[i] = array[i];
    array1.push(array[i]);
  }
  return array1;
}
console.log(first([2, 4, 6, 8, 10, 12]));

// ili

function first1(array) {
  return array.slice(0);
}
console.log(first1(brojevi));

// ili
const brojevi2 = [];
brojevi.forEach((element) => {
  brojevi2.push(element);
});
console.log(brojevi2);

// map() metoda
// - izvlaci novo polje sa transformisanim elemenata orginalnog polja