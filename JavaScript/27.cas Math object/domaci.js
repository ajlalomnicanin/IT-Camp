// Domaci zadaci:
// 1. Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjene prva i treca
// cifra, kao i druga i cetvrta cifra.
// 4752
// 5247
function num(broj) {
  if (!isNaN(broj) && broj >= 1000 && broj <= 9999) {
    let cetiriBroj = Math.floor(broj / 1000);
    let sedamBroj = Math.floor((broj % 1000) / 100);
    let petBroj = Math.floor((broj % 100) / 10);
    let dvaBroj = broj % 10;
    return `${petBroj}${dvaBroj}${cetiriBroj}${sedamBroj}`;
  }
}
console.log(num(4752));
console.log(num(5247));

// ili
console.log("ili");

function num1(broj) {
  if (!isNaN(broj) || broj >= 1000 || broj <= 9999) {
    let cifre = broj.toString().split("");
    for (let i = 0; i < 0; i += 2) {
      let tren = cifre[i];
      return tren;
    }
  }
}
let rezultat = num(4752);
console.log(rezultat);
console.log(typeof rezultat);

// 2. Write a JavaScript program to find a value which is nearest to 100 from two different given integer
//  values.
