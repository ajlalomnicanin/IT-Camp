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
    return +`${petBroj}${dvaBroj}${cetiriBroj}${sedamBroj}`;
  }
}
console.log(num(4752));
console.log(num(5247));

// 2. Write a JavaScript program to find a value which is nearest to 100 from two different given integer
//  values.
// Napisi JavaScript programa koji će pronaći vrednost koja je najbliža broju 100 od dva data  broja:
function funkcija(broj1, broj2) {
  let rezultat1 = Math.abs(broj1 - 100);
  let rezultat2 = Math.abs(broj2 - 100);
  if (rezultat1 === rezultat2) {
    return `Oba broja su jednako blizu`;
  } else if (rezultat1 < rezultat2) {
    return `broj1 ${broj1} je blizi broju 100`;
  } else {
    return `broj2 ${broj2} je blizi broju 100`;
  }
}
console.log(funkcija(15, 30));
console.log(funkcija(15, 15));
console.log(funkcija(130, 40));
console.log(funkcija(200, 80));

// ili
console.log("drugi nacin");
const nearestTo100 = (num1, num2) => {
  let firstCounter = 0;
  let secondCounter = 0;
  if (num1 < 100) {
    for (let i = num1; i < 100; i++) {
      firstCounter++;
    }
  } else {
    for (let i = num1; i > 100; i--) {
      firstCounter++;
    }
  }
  if (num2 < 100) {
    for (let i = num2; i < 100; i++) {
      secondCounter++;
    }
  } else {
    for (let i = num2; i > 100; i--) {
      secondCounter++;
    }
  }
  if (firstCounter < secondCounter) {
    return `broj1, ${num1} je blizi broju 100`;
  } else if (firstCounter > secondCounter) {
    return `broj2, ${num2} je blizi broju 100`;
  } else {
    return `Oba broja su jednako blizu`;
  }
};
console.log(nearestTo100(100, 9));
console.log(nearestTo100(98, 99));
console.log(nearestTo100(105, 105));
console.log(nearestTo100(105, 95));
