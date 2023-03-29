/// Neku poruku u JavaScriptu mozemo prikazati na vise nacina:

// 1. innerHTML
naslov = document.getElementById ("Naslov");
naslov.innerHTML = "Prvi nacin ispisa";

// 2. document.write - obicno se koristi za testiranje koda.

// 3. Alert() - upozorenje korisniku:
// alert("jos jedan nacin prikazivanja poruke korisniku")

// 4. console.log() - Prikazivanje nekih informacija u konzoli. Najcesce koriscen metod.
console.log("Poruka u konzoli.");

// JavaScript nazivi proomenljivih:

// Ime promenljive u JavaScriptu mora poceti sa:
// 1. Velikim ili malim slovima (A-Z ili a-z);
// 2. $ (dollar sign);
// 3. _(donja crta);

// Broj moze biti sadrzan u nazivu promenljive, ali promenljiva ne sme poceti brojem.

// JavaScripta je case sensitive (razlikuje velika i mala slova)

a = 10
// console.log(A); error - a is not defined
console.log(a); // 10

// Zapisivanje promenljivih koje sadrze 2 ili vise reci:
// vecernji termin-nije pravilno da se pravi razmak
vecernji_termin = 19.3; // ispravan nacin zapisivanja promenljive - Underscore
VecernjiTermin = 19.3; // ispravan nacin zapisivanja promenljive - Upper Camel Case (Pascal Case)
vecernjiTermin = 19.3; // ispravan nacin zapisivanja promenljive - Najcesce koriscen nacin u JavaScrpti

// deklaracija i inicijalizacija
// Postoje cetiri nacina deklaracije u JS:

// 1.Koriscenje var rezervisane reci (keyword).Vise je ranije bila koridcena dok nismo dobili nove dve.
var a; //deklarisanje promenljive (obezbedjivanje lokacijske memorije za promenljivu a )
a = 10 //inicijalizacija promenljive (dodeljuje vrednost vec deklarisanoj promenljivoj a)
console.log(a)

// Kroz jednu liniju koda moze izvrsiti deklaraciju i inicijalizaciju
var a = 10 //Smesti tu promenljivu u memoriji i dodeli joj vrednost 10

// 2.Koriscenjem let rezervisane reci (keyword).Promenljive koje su sklone menjanju vrednosti.
let b; //deklarisana promenljive b
b = 14; //inicijalizacija promenljive b

// Kroz jednu liniju koda moze izvrsiti deklaraciju i inicijalizaciju
let b = 14; //Smesti tu promenljivu u memoriji i dodeli joj vrednost 14
console.log(b);

// 3.Koriscenjem const rezervisane reci (keyword). Na ovaj nacin definisemo promenljive cija se vrednost nece menjati.
// Nije moguce posebno deklaraciju ili inicijalizaciju napisati odnojeno
// const c;
// c = 20 
// NEPRAVILNO

// Neophodno je odjednom izvrsiti deklaraciju i inicijalizaciju
const c = 20;
console.log(c);

// 4.Koriscenjem nicega
d = 5;
console.log(5)

// VARIJABLE PROMENLJIVE U JS PREDSTAVLJAJU KONTEJNERE ZA SKLADISTENJE VREDNOSTI.





