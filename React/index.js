/* 
primitives
complex types
conditionals
loops
object
arrays
arrays methods
callbacks
promies u knjizi js
async await - asihrono cekanje u knjizi js
closure - zatvaranje
classes
DOM
DOM manipulation
events
es6 js

*/
// --------------------------------------------------------------------------------------
// loops je konstrukcija koja se koristi za ponavkjanje odredjenog bloka koda vise puta
// inicijalizacija,uslov , ayuriranje varijable []

// for petlja ova petlja omogucava kontrolisano ponavljanje koda, koristi se kada znate
// koliko puta cete ponoviti kod

// while dok je neki uslov istiniti i ponavlja se sve dok je uslov istinit

// do...while izvrsava se jednom kada i ako uslov nije ispunjen

// ----------------------------------------------------------------------------------------

// ES6 (ECMAScript 2015) je šesta verzija ECMAScript standarda, koji je specifikacija za jezik
// JavaScript. ES6 je donela mnoge nove funkcionalnosti i poboljšanja u jeziku JavaScript, čineći ga
//  modernijim i moćnijim.
// Ovde su neke od ključnih karakteristika i poboljšanja u ES6:
// Reč "Ecma" se čita kao "Ek-ma". Izraz "Ecma" je zapravo akronim za "European Computer Manufacturers
// Association" (Evropska asocijacija proizvođača računara)
// , organizaciju koja se bavi standardizacijom informacionih i komunikacionih tehnologi
// Arrow funkcije, let i const, template stringovi, klase

// ------------------------------------------------------------------------------------------------

// Zatvaranje (closure) u JavaScriptu je koncept koji se odnosi na sposobnost funkcije da zadrži pristup
// \ promenljivama iz okoline u kojoj je ta funkcija definisana, čak i nakon što se ta okolina završi
// izvršavanje.

// -----------------------------------------------------------------------------------------------------

//klasa se koristi kod objekta i omogucava da grupisemo slicne informacije i funkcionalnosti zajedno
class Osoba {
  constructor(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }

  pozdrav() {
    console.log(`Zdravo, ja sam ${this.ime} ${this.prezime}`);
  }
}

// Kreiranje instance klase
const osoba1 = new Osoba("John", "Doe");

// Pozivanje metode klase
osoba1.pozdrav(); // Output: Zdravo, ja sam John Doe

// -------------------------------------------------------------------------------------------

// DOM je način da računar "razume" i manipuliše sadržajem web stranice. To je ključni koncept u
//  web programiranju, jer omogućava dinamičko i interaktivno ponašanje web stranica.

// --------------------------------------------------------------------------------------------

// DOM manipulator je programski kod ili alat koji se koristi za pristup, manipulaciju i interakciju sa Document Object Model (DOM) web stranice. Ovaj kod omogućava programerima da dinamički menjaju sadržaj, strukturu i ponašanje web stranica putem JavaScript-a ili drugih jezika za veb programiranje.

// DOM manipulatori omogućavaju različite operacije, kao što su:

// 1. *Pronalaženje elemenata*: Mogu pronaći određene elemente na web stranici na osnovu njihovih identifikatora, klasa ili drugih svojstava.

// 2. *Čitanje i izmena svojstava i sadržaja elemenata*: Omogućavaju čitanje i izmenu tekstualnog sadržaja, atributa, stilova i drugih svojstava elemenata.

// 3. *Dodavanje i uklanjanje elemenata*: Omogućavaju kreiranje novih elemenata i njihovo dodavanje u DOM, kao i uklanjanje postojećih elemenata sa stranice.

// 4. *Reagovanje na događaje*: Omogućavaju povezivanje funkcija sa događajima kao što su klikovi, unosi korisnika ili promene stanja, tako da se može izvršiti određena akcija kada se događaj desi.

// 5. *Manipulacija klasama i stilovima*: Omogućavaju dodavanje, uklanjanje i promenu klasa i stilova elemenata, što utiče na izgled stranice.

// Popularni JavaScript framework-i kao što su jQuery, React, i Angular imaju ugrađene funkcionalnosti za manipulaciju DOM-om. DOM manipulatori su ključni alati za izgradnju interaktivnih i dinamičkih web aplikacija.
// -------------------------------------------------------------------------------------------------
// var a = "";
// console.log(typeof a);

// function sum(a, b) {
// return a + b;
// }

// sum(1, 2);
// sum({}, []); //object rezultat zbog +

// console.log(sum(1, 2));
// console.log(sum({}, []));

// console.log(1 + 2 + "1", "prvi");
// console.log("22" + 2 + "1", "drugi");
// console.log(true + 2 + "1", "treci"); // true bude 1
// console.log(false + 2 + "1", "cetvrti"); //21
// console.log(true + true + "1", "peti"); //21

// var c = ""; u global scope
// const a = ""; u block scope
// let b = ""; u block scope

// procuderalnii staticki
// dinamicki javascript
// scope cemu varijabla ima pristup
// block scope, global scope

// var a = "string";
// console.log(window.a);
//  dom , bom

// na window dodajemo nove properti je global scope]

// console.log(document, window);

// var a = "smajb";
// kada ponovo definisem a sa var , onda se moja defin a prelazi u ovo "smajb", i zato se koeiste global scope odnosno const i let

// trazi false vrednost
// console.log("" || false || true); true
// console.log("yes" || 0 || true); yes

// trazi truty vrednost
// console.log("a" && null && "b"); /nul truty vrednost
// console.log("a" && "c" && "b"); b

// if ("a" && null && "b") {
// } else {
// }

// const o = {};
// const n = [];
// o.property1 = "";

/* 
ako se na objektu nalazi property vratite vrednost
ako se ne nalazi vratite -1
*/
// const obj = { size: "12", width: "22" };
// function getProperty(obj, property) {

//   return typeof obj[property] == "undefined" ? obj[property] : -1;

// return obj[property] ? obj[property] : -1;
//   //   obj.hasOwnProperty("property1");
// }

// getProperty(obj, "size");

// console.log(getProperty(obj, "size"));

// const n = [
//   [1, 2],
//   [2, 3],
// ];
// n[0][1];

const n = [1, 2, 3, 4];
n.forEach((element, index, array) => {});
n.filter();
n.map();
n.reduce();

// undefined, null
