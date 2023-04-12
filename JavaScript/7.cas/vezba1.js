// naredba if...else
// 1.Napravi program kiji racuna da li je godina prestupna ili ne, a zatim ispistuje sledecu poruku
//godina je prestupna ako je deljiva sa 4, ali nije deljiva sa 100,osim ako je takodje deljiva sa 400

let godina = 2024;

if ((godina % 4 === 0 && godina % 100 !== 0) || godina % 400 === 0) {
  console.log("Godina je prestupna");
} else {
  console.log("Godina nije prestupna");
}

// 2.Napisite program koji ce proveriti je li uneseni broj paran ili neparan te ce u konzoli ispisati odg poruku.

let broj = +prompt("Unesite neki broj");

if (broj % 2 === 0) {
  console.log("Uneli ste paran broj " + broj);
} else {
  console.log("Uneli ste neparan broj " + broj);
}
console.log("----3------");
//3 Napisi program koji ce od korisnika zadrzaziti da unese broj, a zatim ce ispisati da li je taj broj deljiv sa 3 i/ili 5

broj = +prompt("Unesite prvi broj");

if (broj % 3 === 0 && broj % 5 === 0) {
  console.log("Broj " + broj + " je deljiv sa 3 i 5");
} else if (broj % 3 === 0) {
  console.log("${broj} je deljiv samo sa 3");
} else if (broj % 5 === 0) {
  console.log("'${broj}' je deljiv samo sa 5");
} else {
  console.log("'${broj}' nijr deljiv ni sa 3 ni sa 5");
}

console.log("--------4");
//4 Napisi program koji ce zatraziti od korisnika da unese tri broja,a zatim ce ispisati najveci od tih brojeva.

let prviBroj = +prompt("Unesite 3 broja,sada unesite broj 1");
let drugiBroj = +prompt("Unesite 3 broja,sada unesite broj 2");
let treciBroj = +prompt("Unesite 3 broja,sada unesite broj 3");
let najveciBroj;

if (prviBroj >= drugiBroj && prviBroj >= treciBroj) {
  najveciBroj = prviBroj;
} else if (drugiBroj >= prviBroj && drugiBroj >= treciBroj) {
  drugiBroj = najveciBroj;
} else {
  najveciBroj = treciBroj;
}
console.log("Najveci broj je " + najveciBroj);

console.log("--------5");
// 5.Napisite program kiji ce traziti od korisnika da unese broj.Program treba ispisati da li je uneti tekst broj
// ili nije broj

let unos = +prompt("Unos:");

if (isNaN(unos)) {
  console.log("unos '${unos}' nije broj");
} else {
  console.log("unos '${unos}' je  broj");
}

//naredba if...else

// Napisite program koji ce kosisniku omoguciti  da unese ocenu u rasponu od 1 do 100
// ako je unesena ocena izmedju 90 i 100 program ce ispisati odlican
// ako je ocena izmedju 80 i 89,program ce ispisati vrlo dobar
// ako je ocena izmedju 70 i 79, program ce ispisati dobar
// ako je ocena izmedju 60 i 69, program ce ispisati dovvoljan
// ako je ocena manja , program ce ispisati dobar

let ocena = +prompt("Unesite ocenu u rasponu od 1-100");

if (ocena >= 90 && ocena <= 100) {
  console.log("Odlican");
} else if (ocena >= 80 && ocena <= 89) {
  console.log("Vrlo dobar");
}else if (ocena >= 80 && ocena <= 89) {
  console.log("Vrlo dobar");
}
