// Metoda forEach() u JavaScriptu je metoda koja se koristi za iteriranje kroz elemente niza i izvršavanje
//  određene funkcije za svaki element.

// Grupiranje elemenata niza prema njihovim vrijednostima
const arr = [1, 2, 3, 2, 4, 1, 5, 4, 2, 8, 8];
let groups = {};

arr.forEach((element) => {
  if (!groups[element]) {
    groups[element] = []; // stvaranje novog kljuca sa praznim nizom
  }
  groups[element].push(element); // dodavanje tr elementa u odg niz
});
console.log(groups);

// Izračunavanje prosjeka vrijednosti u nizu:
const arr1 = [10, 20, 30, 40, 50];
let suma = 0;
arr1.forEach((num, index, arr) => {
  suma += num;
});
let prVrednost = suma / arr1.length;
console.log(prVrednost);

// Metoda map() u JavaScript-u je visoko funkcionalna metoda koja se primjenjuje na poljima (nizovima)
//  kako bi se transformirali ili mapirali elementi originalnog polja u nove elemente. Ova metoda vraća novo
//   polje s rezultatima transformacije.

// Pretvaranje temperature iz Celsiusa u Fahrenheit:
// Imate polje temperatura u Celzijusima i želite pretvoriti svaku temperaturu u Fahrenheit
// koristeći formulu F = (C * 9/5) + 32.
const celsiusa = [25, 30, 15, 20];
const Fahrenheit = celsiusa.map((cel) => (cel * 9) / 5 + 32);
console.log(Fahrenheit);

// Generiranje HTML oznaka za popis stavki:
// Imate polje stavki i želite generirati HTML oznake za svaku stavku koristeći <li>.

const items = ["Apple", "Banana", "Orange"];
const listItems = items.map((string) => `<li>${string}<li>`);
console.log(listItems.join("\n"));

// Dohvaćanje duljina stringova:
// Imate polje riječi i želite dohvatiti duljinu svake riječi.
const words = ["apple", "banana", "orange", "mango"];
const duzina = words.map((string) => string + " " + string.length);
console.log(duzina);

// Ukratko, glavna razlika između metoda map() i forEach() jest da map() kreira novo polje s
//  transformiranim vrijednostima, dok forEach() služi za izvršavanje određene akcije nad elementima polja.
// Ova razlika ima implikacije na upotrebu ovih metoda u različitim scenarijima.

//filter() Filtriranje brojeva prema određenim kriterijima:
// Pretpostavimo da imate niz brojeva i želite filtrirati samo one brojeve koji su veći od 10 i paran su.

const numbers = [5, 12, 8, 20, 15, 6];
const num1 = numbers.filter((num) => num > 10 && num % 2 === 0);
console.log(num1);

// Filtriranje riječi prema duljini:
// Pretpostavimo da imate niz riječi i želite filtrirati samo one riječi koje imaju više od 5 slova

const words1 = ["apple", "banana", "orange", "mango", "kiwi"];
const lengthWords = words1.filter((word) => word.length > 5);
console.log(lengthWords);

// reduce() U JavaScript-u, reduce metoda je takođe funkcija visokog reda koja se koristi za redukciju liste ili
//  kolekcije elemenata na jednu
//  vrednost. Funkcija se primenjuje na svaki element kolekcije, akumulirajući rezultat u svakoj iteraciji.

// Da, tačno je. Metoda reduce() u JavaScript-u ima četiri argumenta, pri čemu je treći argument opcionalan.
//  Evo detalja o argumentima:

// callback funkcija: Ovo je funkcija koja se primenjuje na svaki element niza. Ona prima četiri argumenta:
// accumulator (akumulator): Vrednost koja se akumulira tokom redukcije.
// currentValue (trenutna vrednost): Trenutni element niza koji se obrađuje.
// currentIndex (trenutni indeks): Indeks trenutne vrednosti u nizu (opciono).
// array (niz): Originalni niz nad kojim se vrši redukcija (opciono).
// initialValue (početna vrednost): Ovo je opcionalni argument koji predstavlja početnu vrednost
//  akumulatora. Ako se ne navede, prvi element niza će se koristiti kao početna vrednost, a redukcija
// će početi od drugog elementa.

// Računanje ukupne vrednosti proizvoda u korpi:
const card = [10, 15, 20];
const total = card.reduce(
  (initialValue, currentValue) => initialValue + currentValue
);
console.log(total);

// Ukratko, forEach ne kreira nove promenljive, dok reduce, filter i map generišu nove promenljive
//  ili nove nizove na osnovu postupaka koje primenjuju na elemente originalnog niza
