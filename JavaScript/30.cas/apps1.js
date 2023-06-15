// Date object //

// Kreiranje Datuma:
// U JS datume kreiramo preko
// new Date
// konstruktora

// Postoje 4 nacina za kreiranje Date objecta:

// 1. new Date()
console.log(new Date()); // dobili smo trenutni datum i vreeme
console.log(typeof new Date()); // object

// 2.new Date(year,month,day,hours,minutes,seconds,milliseconds)
console.log(new Date(2020, 1, 23, 17, 17, 17, 17)); //Meseci se racunaju od 0 do 11

// Mozemo poslati 7,6,5,4,3,2, argumenta ako zelimo da dobijemo datum prema nasoj zelji
console.log(new Date(2003, 5));

// 3. new Date (milliseconds)
console.log(new Date(5421));
// Nulto vreme u JS je 1.1.1970

// JavaScript skladisti datume kao broj millisecundi od 1.1.1970.

// Ako na prvi argument bude jednocifren ili dvocifren broj to znaci da se posmatra prethodni vek (dodaje se
// 19...)
console.log(new Date(22, 8, 12)); //1922. 09. 11.

// new Date(string)
console.log(new Date("2022-03-25")); //2022.03.25.

// Metode datuma
// Display Dates metode:
// Postoji nekoliko razlicitih metoda za prikazivanje datuma u razlicitim formatima:

const date = new Date();

// 1.toString
console.log(date.toString());
// resen problem vremenske zone

// 2.toUTCString()
console.log(date.toUTCString());

// 3.toDateString()
console.log(date.toDateString());

// 4.toISOString()
console.log(date.toISOString());

// Date.parse() vraca nam broj milisekundi izmedju 1.1.1970. i poslatog datuma
console.log(Date.parse(new Date()));


const anastasija = new Date(2005, 9, 25);
const ajsa = new Date(2005, 1, 7);

const brMsAjsa = Date.parse(ajsa);
const brMsAnastasija = Date.parse(anastasija);
console.log(brMsAjsa);
console.log(brMsAnastasija);
const razlika = brMsAnastasija - brMsAjsa;
// const razlikaDatum = new Date(razlika);
// console.log(razlikaDatum);
const dana = razlika / 1000 / 60 / 60 / 24;
console.log(dana);
