// // Domaci:
// // 1. Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se jagoda nalazi
// //  unutar tog niza. Ako se jagoda ne nalazi unutar niza, funkcija neka vrati taj niz poredjan abecedno, s
// //  tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// // Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalazi.

// function first() {
//   let korisnik = prompt("Unesite recenicu");
//   let niz = korisnik.split(" ");
//   if (niz.includes("jagoda")) {
//     return niz.indexOf("jagoda");
//   } else {
//     niz.sort();
//     niz.unshift(10);
//     niz.push(1000);
//     return niz;
//   }
// }
// console.log(first());
// 2. We have the following arrays : Go to the editor
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["st", "nd", "rd", "th"];
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."

function second(color, o) {
  let noviNiz = [];
  for (let i = 0; i < color.length; i++) {
    let numnastavci = i + 1 > 3 ? o[0] : o[i + 1];
    celokupno = [i + 1] + numnastavci + " choice is " + color[i];
    noviNiz.push(celokupno);
  }
  return noviNiz;
}
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th", "st", "nd", "rd"];

console.log(second(color, o));
