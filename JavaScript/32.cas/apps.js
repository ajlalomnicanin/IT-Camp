// Niz (Array) u JavaScriptu predstavlja strukturu podataka za skladistenje vise vrednosti.
// Dakle, unutar jedne promenljive (jednog niza) mozemo staviti vise razlicitih (ili istih) vrednosti.
// Nizovi u JavaScriptu dozvoljavaju duplikate.
// Nizovi su heterogeni (unutar jednog niza mozemo imati elemente razlicitih tipova).

const niz = ["string", 23, true];
console.log(niz);

// Mozemo prvo samo kreirati niz, a nakon toga mu dodeliti vrednost

const cars = [];
cars[0] = "Audi";
cars[1] = "Mercedes";
console.log(cars);

cars[3] = "Passat";
console.log(cars);
// array [index] sluzi za pristupanje elementu niza.
console.log(cars[2]); //undefined

// length metoda nam vraca broj elemenata nekog niza
console.log(cars.length); // 4

// Promena vrednisti nekog elementa  se moze vrsiti na isti nacin:
cars[2] = "BMW";
console.log(cars);

// Niz mozemo i napraviti i preko
const cars2 = new Array("Golf", "Skoda", "Volvo");
console.log(cars2);

// Primer zbog kojeg treba izbegavati Array():
// Napraviti niz od jednog elementa tipa Number
const points = [40];
console.log(points); // 40

const points2 = new Array(40);
console.log(points2); // 40 nedefinisanih polja

// Zbog jednostavnosti, citanja i brzine izvrsavanja bolje je koristiti [] nacin nego new Array.

const arr = [[1, 2, 3], new Date(), false, function () {}];
console.log(arr);

// Postoje dva nacina za proveru da li je neka promenljiva niz:

const num = 3;
const fruits = ["apple", "pineapple", "strawberry"];

// 1. Array.isArray[arr]
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(num)); // false

// 2. arr instanceof Array
console.log(fruits instanceof Array); //true
console.log(num instanceof Array); //false

fruits[fruits.length] = "banana";
console.log(fruits);
