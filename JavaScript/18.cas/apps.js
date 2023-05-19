// Za ekstraktovanje (uzimanje jednog karaktera) mozemo iskoristiti jedan od tri nacina:

// charAt(index) metoda uzima jedan argument (argument predstavlja index) i vraca nam karakter koji
// zauzima tu poziciju.

// charCodeAt(index) metoda uzima jedan argument (argument predstavlja index) i vraca nam kod karaktera koji
// zauzima tu poziciju.

// string[index] nacin pristupa nekom karakteru iz stringa.

let recenica = "Recenica za uzimanje karaktera.";

console.log(recenica.charAt(5));
console.log(recenica.charCodeAt(4));
console.log(recenica[4]);

console.log(recenica.charAt(100)); //rezultat karaktera koji ne postoji daje ""
console.log(recenica[100]); // rezultat karaktera koji ne postoji daje undefined

// Za ekstraktovanje (uzimanje nekoliko karaktera) mozemo iskoristiti jednu od 3 metode:

// slice() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argument je pocetni index za uzimanje
//  isecka, drugi argumrnt je index do kojeg idemo.
// drugi argument se ne iskljucuje
// Kod slice() metode drugi argument nije obavezan. Ako ga izostavimo, dobicemo string od tog broja do kraja.
// slice() metoda omogucava koriscenje negativnih indexa

console.log(recenica.slice(12, 20));
console.log(recenica.slice(12));
console.log(recenica.slice(-10, -1));

// substring() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argument je pocetni index za uzimanje
//  isecka, drugi argument  je index do kojeg idemo.
// substring() metoda ne omogucava koriscenje negativnih indexa
console.log(recenica.substring(12, 20));
console.log(recenica.substring(12));

// substr() metoda nam vraca deo stringa. Ona ima dva argumenta, prvi argument je pocetni index za uzimanje
//  isecka, drugi argument je duzina tog isecka

console.log(recenica.substr(3, 10));

// split() metoda sluzi da neki string pretvorimo u neki niz od jednog ili vise elemenata.

// Ako split metodu primenimo na neki string bez da joj posaljemo neki argument,
// dobicemo niz od samo jednog argumenta (cela recenica je taj element).
console.log(recenica.split());

// Slanje nekog argumenta znaci da taj argument predstavlja karakter gde ce se deliti elementi niza.
console.log(recenica.split(" ")); //truthy
// svaka rec predstavlja jedan element niza.

console.log(recenica.split("")); //false
// svaki karakter predstavlja jedan element u nizu.

console.log(recenica.split("a"));
// dobili smo niz od jednog elementa (cela recenica).

// Zadaci:

//  Zadatak: Izračunavanje dužine reči
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u najdužoj reči u tom stringu.
//  Pretpostavi da su reči odvojene samo jednim razmakom. Na primer, za ulazni string "Danas je divan dan."
//  funkcija treba da vrati broj 5.

function najduzaRec(string) {
  const nizReci = string.split(" ");
  let najduzaRec = nizReci[0];
  for (let i = 0; i < nizReci.length; i++) {
    if (nizReci[i].length > najduzaRec.length) {
      najduzaRec = nizReci[i];
    }
  }
  return najduzaRec.length;
}
console.log(najduzaRec(recenica));

// Napraviti funkciju koja uzima neki trocifren broj za argument i vraca zbir cifara tog broja.
// Na primer, za argument 234, rezultat treba biti 9.
// Pretvaranje broja u string se vrsi preko toString() metoda.

// function brojUString(broj) {
//   let string = broj.toString().split("");
//   let zbir = 0;
//   for (let i = 0; i < string.length; i++) {
//     zbir += Number(string[i]);
//   }
//   return zbir;
// }
// console.log(brojUString(234));

function brojUString(broj) {
  let string = broj.toString().split("");
  let zbir = 0;
  for (let i = 0; i < string.length; i++) {
    zbir += Number(string[i]);
  }
  return zbir;
}
console.log(brojUString(234));
