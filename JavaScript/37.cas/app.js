// map() metoda krerira novi niz, na nacin da se callback funkcija (argument map metode)
// izvrsava za svaki element.
// Duzina tog novodobijenog niza je jednaka duzini originalnog niza.
// map() metoda ne menja originalni niz, vec pravi novi.

const brojevi = [2, 4, 6, 8, 10, 12];
const brojevi2 = brojevi.map((broj) => {
  return broj;
});
// function (){} / ili  ovako
console.log(brojevi2);

// 1. Napraviti brojevi3  koji ce sadrzati  kvadrate elementa niza broja.

const brojevi3 = brojevi.map((broj) => {
  return Math.pow(broj, 2);
  //   ili broj ** 2
});
console.log(brojevi3);

const studenti = [
  "asija",
  "ajla",
  "selver",
  "nedim",
  "ajsa",
  "emir",
  "merjem",
  "anastasija",
];

const studenti2 = studenti.map((ime) => {
  let prvoSlovo = ime[0].toUpperCase();
  return prvoSlovo + ime.slice(1);
});
console.log(studenti2);

const studenti3 = studenti.map(function (student, pozicija) {
  if (pozicija < 3) {
    return student;
  }
});
console.log(studenti3);

// Ako zelimo da iskljucimo neke elemente na tim pozicijama cemo da dobijemo underfined.

// 3. Napraviti novi niz mapirajuci niz brojeva, koji ce imati sve elemente iste, dok elementi na pozicijama
// 0,3,5 ce biti kvadrirani
// const brojevi = [2, 4, 6, 8, 10, 12];
// const brojevii = brojevi.map((broj, pozicija) => {
//   if (pozicija[0] || pozicija[3] || pozicija[5]) {
//     return broj ** 2;
//   } else {
//     return broj;
//   }
// });
// console.log(brojevii);

const brojevi4 = brojevi.map((broj, pozicija) => {
  if (pozicija === 0 || pozicija === 3 || pozicija === 5) {
    return broj ** 2;
  } else {
    return broj;
  }
});
console.log(brojevi4);

// 4. Napraviti novi niz koji sadrzi kvadrate parnih elemenata postojeceg niza. Dok za neparne elemente
//  treba vratiti aritmeticku vrednost prethodnog elementa, datog, i narednog.

const numbers = [2, 7, 5, 7, 17, 28, 55, 34];
const numbers2 = numbers.map((num, index, arr) => {
  if (num % 2 === 0) {
    return num ** 2;
  } else {
    return +((arr[index - 1] + num + arr[index + 1]) / 3).toFixed(2);
  }
});
console.log(numbers2);

// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi element na kubni stepen postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.
