// Domaci zadaci:
console.log("--Domaci--1.zadatak--");
// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument,
//  funkcija ga racuna kao 0.

// 1.nacin
function zbir(a, b) {
  if (b === undefined) {
    return a * a;
  } else {
    return a * a + b * b;
  }
}
console.log(zbir(5));

// 2.nacin
function zbir1(a, b = 0) {
  return a * a + b * b;
}
console.log(zbir(2, 4));

console.log("--Domaci--2.zadatak--");
// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.

function aritmetickaSredina(x = 1, y = 1, z = 1) {
  return (x + y + z) / 3;
}
console.log(aritmetickaSredina(2, 2, 5));

console.log("--Domaci--3.zadatak--");
// 3. Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.

function povrsina(x, y) {
  if (x === y) {
    let povrsinaKvadrata = x * x;
    return `Brojevi  su isti i povrsina kvadrata tih brojeva je ${povrsinaKvadrata}`;
  } else {
    let povrsinaPravougaonika = x * y;
    return `Brojevi su razliciti i povrsina pravougaonika je ${povrsinaPravougaonika}`;
  }
}
console.log(povrsina(5, 6));

// // Traziti unos korisnickog imena sve dok korisnik ne unese ispravno korisnicko ime
// // npr duzina korisnickog imena mora biti najmanje 6 karakter

console.log("---------prompt");

function user_name() {
  let ime = "";
  while (ime.length < 6) {
    ime = prompt("Unesite vase ime (prompt)");
    console.log(ime, ime.length);
  }
}

user_name();

console.log("+++++++++++");

function user() {
  let ime1 = ""
  while (ime1 < 6) {
    ime1 = prompt("Unesite vase ime");
  }
  return ime1;
}
ime1 = prompt("Unesite vase ime 1");
console.log(user());

// return koristimo kada zelimo da funkcija vrati vrednost koja moze biti koriscena u daljem kodu , dok se
// console.log koristi za ispisivanje vrednosti ili poruka u conzoli u svrhu pracenja ali i
// ne za dalje koriscenje koda
