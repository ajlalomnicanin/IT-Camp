// Domaci zadaci:
console.log("--Domaci--1.zadatak--");
// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument,
//  funkcija ga racuna kao 0.

// 1.nacin
function zbir(a, b) {
  if (b === undefined) {
    return 0;
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
    let povrsinaKvadrata = a * a;
    return `Brojevi  su isti i povrsina kvadrata tih brojeva je ${povrsinaKvadrata}`;
  } else {
    let povrsinaPravougaonika = a * b;
    return `Brojevi su razliciti i povrsina pravougaonika je ${povrsinaPravougaonika}`;
  }
}

// // Traziti unos korisnickog imena sve dok korisnik ne unese ispravno korisnicko ime
// // npr duzina korisnickog imena mora biti najmanje 6 karaktera

// let username = "";
// while (username.length < 6) {
//   username = prompt("Unesite vase ime");
//   //   console.log(username, username.length); //provera

console.log("---------prompt");
function user_name() {
  let user_name = "";
  while (user_name.length < 6) {
    user_name = prompt("Unesite vase ime");
    console.log(user_name, user_name.length);
  }
}
user_name();
