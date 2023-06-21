// JavaScript Array methods //

// toString() i join() metode konvertuju niz u string

const arr = [1, 2, 3, 4, 5];
console.log(arr.toString()); //tip-string
console.log(arr.join());
// join() prihvata argument koji predstavlja karakter (niz karaktera) koji ce se naci izmedju elemenata
// (u novodobijenom stringu).
console.log(arr.join("+"));
console.log(typeof arr.join()); //string

// push() metoda dodaje novii element (vise elemenata) na kraju niza.
const fruits = ["strawberry", "pineapple", "orange"];
fruits.push("pear");
console.log(fruits);

console.log(fruits.push("mango", "apple", "banana"));
// push predstavlja duzinu niza sa novim elementima.
console.log(fruits);

// pop() metoda brise poslednji element niza.
fruits.pop();
console.log(fruits);
console.log(fruits.pop());

// shift() metoda brise prvi element niza, svi ostali elementi se vracaju za jedno mesto
console.log(fruits.shift()); // vrednoost izbrisanog elementa
console.log(fruits);

// unshift() metoda dodaje  element (vise elemenata) na pocetku niza

fruits.unshift("peach", "watermelone");
console.log(fruits.unshift("peach", "watermelone"));
console.log(fruits);

// delete metoda brise odredejeni element niza
// Koriscenjem delet metode mozemo izbrisati zeljeni element niza, ali nije preporuka koristiti
// tu metodu nego vec pop() ili shift().
// delete metoda ostavlja prazno (undefined) polje. Ne brise se element u potpunosti.

delete fruits[fruits.length - 1];
console.log(fruits);
delete fruits[3];
console.log(fruits);
