// Fudbalski teren
// fudbalski teren dimenzije dxs treba ograditi pravougaonom ogradom tako da je rastojanje stranice ograda
// od linije terena r
// napisi program koji odredjuje duyinu ograde
// ulaz: u tri reda standarda ulaza nalaze se celi brojevi

// obim pravougaonika dva put duzina dva puta sirina za svaku stranu duzina plus dva rastojanja

const d = +prompt("Unesite duzinu terena u metrima izmedju :");
const s = +prompt("Unesite sirinu u metrima izmedju :");
const r = +prompt("Unesite rastojanje :");

const duzinaOgrade = 2 * d + 2 * s + 8 * r;
console.log("Treba nam " + duzinaOgrade + "metara za ogradjivanje terena");

// Osnove o stringovima
const recenica = "Necemo matematicke zadatke!";
console.log(recenica);
// Pristupanje nekom karakteru ide preko indexa
// indeksiranje ide od nule
// poslednji krakter u stringu ima index (cela duzina -1)
// console.log(recenica[0]);
// console.log(recenica[7]);

// Za izracunavanje duzine nekog stringa se koristi lenght metoda
const duzina = recenica.length;
// console.log(duzina);
// ILI
// console.log(duzina.length);

// da ispisemo zadnji karakter
console.log(recenica[duzina - 1]);
// ili
console.log(recenica[recenica.length - 1]);

// Domaci zadaci:
// 1. Zavrsiti zadatak za racunanje duzine ograde fudbalskog terena;

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25.

// 2.
const broj = +prompt("Unesite neki broj: ");

if (isNaN(broj) || broj < 12 || broj >= 16) {
  console.log("Niste uneli korektan broj.");
} else {
  for (let i = broj; i >= 1; i--) {
    console.log(i, i ** 2, i - 25);
  }
}
