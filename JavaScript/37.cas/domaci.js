// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

const originalArray = ["apple", "banana", "cherry"];
const array = originalArray.map((string) => {
  return string.toUpperCase();
});
console.log(array);

// 2. Napraviti novi niz koji sadrzi element na kubni stepen postojeceg niza:

const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = numbers.map((broj) => {
  return Math.pow(broj, 3);
});
console.log(numbers2);

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

const numbers3 = numbers2.map((broj) => {
  return +Math.sqrt(broj).toFixed(2);
});
console.log(numbers3);

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

const brojevi = [-5, 4, 3, 10, 14, -5, 0];
const brojevi1 = brojevi.map((broj) => {
  if (broj < 0) {
    return broj * -1;
  } else if (broj > 0) {
    return broj ** 2;
  } else {
    return 0;
  }
});
console.log(brojevi1);
