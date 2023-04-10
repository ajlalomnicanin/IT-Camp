//1.Na osnovu promenljive brojGodina ispisati u konzoli sledece:
// ako je broj godina manji od 12: Vi ste decijeg doba"
// ako je broj godina izmedju 12 (ukljucuje) i 18(ne ukljucuje):
// Vi ste maloletni
//  ako je broj godina izmedju 18 (ukljucuje) i 40(ne ukljucuje):
// Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba

let brojGodina = 40;

if (brojGodina <= 12) {
  console.log("Vi ste decijeg uzrasta");
} else if (brojGodina >= 12 && brojGodina < 18) {
  console.log(" Vi ste maloletni");
} else if (brojGodina >= 18 && brojGodina < 40) {
  console.log("Vi ste punoletni");
} else if (brojGodina >= 40) {
  console.log("Vi ste zrela osoba");
}

// 2. zadatak
// Na osnovu dve promenljive x i y napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule, a inace ispisuje poruku:
// Deljenje je nemoguce:

let x = 10;
let y = 5;

if (y != 0) {
  console.log(x / y);
} else {
  console.log("Deljenje je nemoguce");
}
// Korisnik unosi broj:
// Ako je uneo broj izmedju 12 i 15 (ukljucujuci oba), neka se ispise poruka uneli ste vrednostBroja
// defaulno: Niste uneli broj iz trazenog opsega.

const broj = +prompt("Unesite neki broj:");

if (broj >= 12 && broj <= 15) {
  console.log("Uneli ste vrednost broja " + broj);
} else {
  console.log("Niste uneli broj iz trazenog opsega");
}

// *Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// povrsinu kvadrata, ako su uneti brojevi razliciti. */

const broj1 = +prompt("Unesite prvi broj:");
const broj2 = +prompt("Unesite drugi broj:");
console.log(typeof broj1);

// if (broj1 !== broj2) {
//   console.log(broj1 * broj2);
// } else if (broj1 === broj2) {
//   console.log("Uneli ste iste brojeve");
// }

switch (true) {
  case broj1 !== broj2:
    console.log(broj1 / broj2);
    break;
  case broj1 !== 0 && broj2 !== 0:
    console.log("Uneli ste iste brojeve");
    break;
  default:
    console.log("Niste uneli nista");
    break;
}

/*Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
kolicnik x / y , ako je y razlicit od nule,
a inace ispisuje poruku: Deljenje je nemoguce! */
x = +prompt("unesite neki broj1");
y = +prompt("Unesite neki broj2");

switch (true) {
  case y !== 0:
    console.log(x / y);
    break;
  default:
    console.log("Deljenje je nemoguce!");
    break;
}

// 1.korisnik unosi dva broja;
// na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// ispisuju se brojevi od manjeg ka vecem
let jedanBroj = +prompt("Iteracija-Unesite broj jedan!!");
let dvaBroj = +prompt("Unesite broj dva!!");

for (i = jedanBroj; i <= dvaBroj; i++) {
  console.log(i);
}

// Prebrojati i sabrati brojeve deljive sa  5 u intervalu od 1 do n
n = 10;
suma = 0;
br = 0;
for (i = 1; i <= n; i++) {
  if (i % 5 === 0) {
  }
  suma += i;
  br++;
  rezultat = suma / br;
}
console.log(suma);
console.log(br);
console.log(rezultat);

// 1. Neka se izvrsi iteracija od broja 99 do -99
// Ispisati zbir broja deljivog sa 4 i broja 14
suma = 0;
for (let i = 99; i >= -99; i--) {
  if (i % 4 === 0 && i % 14 === 0) {
    suma += i;
  }
}
console.log(suma);

// 2.izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17
br = 0;
suma = 0;
for (let i = 3; i <= 17; i++) {
  if (i % 3 === 0) {
    suma += i;
    br++;
    proizvod = suma / br;
  }
}
console.log(proizvod)
