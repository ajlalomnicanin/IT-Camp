// 1.Napraviti novi niz, koji ce sadrzati samo godine vece od 17.
const godine = [17, 17, 21, 27, 19];

// forEach() koristimo kao neku petlju ne pravi se novi niz
const godine2 = [];
godine.forEach((godina) => {
  //   if (godina > 17) {
  //     godine2.push(godina);
  //   }
  godina > 17 && godine2.push(godina);
});
console.log(godine2);

// Filter() metoda pravi novi niz sa onim elementima koji su prosli test.
// Novi niz moze biti prazan, iste duzine kao originalni ili imati manje elemenata od originalnog niza.
// Zavisi od toga kkoliko je lemenata proslo test.

// callback funkcija vraca uslov koji neki element treba da zadovoljava kako bi prosao test (kako bi bio
//  dodat u novi niz)
const godine3 = godine.filter((godina) => godina > 17);
console.log(godine3);

// 2.
// Prvi deo.Napraviti pomocni niz koji ce sadrzati sve elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnoom nizu umetnuti na prva dva mesta 10 i 20.
//
function helpers(arr1, arr2) {
  let first = arr1.concat(arr2);
  let second = first.filter((num) => num % 2 === 0);
  second.unshift(10, 20);
  return `first je ${first},
  second je ${second}`;
}
console.log(helpers([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// 3. Napravi novi niz koji filtira postojeci vraca novi sa onim elementima starog niza,
// gde je drugo dlovo "e"

const students = [
  "Anastasija",
  "Merjem",
  "Emir",
  "Nedim",
  "Selver",
  "Ajla",
  "Asija",
];

let students1 = students.filter((student) => student[1] === "e");
console.log(students1);

// reduce() metoda izvrsava callback funkcija za svaki element jednom i vraca nam jednu vrednost.
// Vraca jednu vrednost u vecini slucajeva to bude suma.
// reduce() metoda se izvrsava sa leve na desnu stranu.
// callback funkciija moze imati 4 argumenta:
// (previousValue ,currentValue(totalValue) , index , array)
// prethodna vrednost, trenutna vrednost,broj , niz
// const godine = [17, 17, 21, 27, 19];
const sumaa = godine.reduce((prev, curr) => prev + curr);
console.log(sumaa);
// Ako zelimo pocetnu vrednost onda to saljemo kao drugi argument callback funkcije, 100
const suma = godine.reduce((prev, curr) => prev + curr, 100);
console.log(suma);
