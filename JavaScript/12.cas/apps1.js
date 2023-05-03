//1.Prebrojati koliko ima zankova koji su cifre u unetom stringu

// prvi nacin
// const recenica4 = prompt("Unesite neku recenicu: ");
// brojac = 0;
// for (let i = 0; i < recenica4.length; i++) {
//   if (
//     recenica4[i] === "0" ||
//     recenica4[i] === "1" ||
//     recenica4[i] === "2" ||
//     recenica4[i] === "3" ||
//     recenica4[i] === "4" ||
//     recenica4[i] === "5" ||
//     recenica4[i] === "6"
//   ) {
//     brojac++;
//   }
// }
// console.log(brojac);
//treba da idemo do 10

//drugi nacin
const recenica4 = prompt("Unesite neku recenicu: ");
brojac = 0;
for (let i = 0; i < recenica4.length; i++) {
  if (!isNaN(recenica4[i]) && recenica4[i] !== " ") {
    brojac++;
  }
}
console.log(brojac);

console.log("----------");

// Domaci zadatak
// 1.Napravi novu recenicu koja ce imati isti tekst, ali bez razmaka

const recenica5 = prompt("Unesite neku recenicu5: ");
let recenica6 = "";

for (let i = 0; i < recenica5.length; i++) {
  if (recenica5[i] === " ") {
    continue;
  } else {
    recenica6 += recenica5[i];
  }
}
console.log(recenica6);

// 2. Napraviti novu recenicu gde ce umesto slova "a" pisati "t".
// Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".
// anida
const recenica7 = prompt("Unesite recenicu7 :");
let recenica8 = "";

for (let i = 0; i < recenica7.length; i++) {
  if (recenica7[i + 1] === "n" && recenica7[i] === "a") {
    recenica8 += "d";
  } else if (recenica7[i] === "a") {
    recenica8 += "t";
  }
}
console.log(recenica8);

//  3. Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	ostali karakteri se ne menjaju.

const recenica9 = prompt("Unesite recenicu9: ");
let recenica10 = "";
for (let i = 0; i < recenica9.length; i++) {
  if (
    recenica9[i] === "a" ||
    recenica9[i] === "e" ||
    recenica9[i] === "i" ||
    recenica9[i] === "o" ||
    recenica9[i] === "u"
  ) {
    recenica10 += recenica9[i].toUpperCase();
  }
}
console.log(recenica10);
