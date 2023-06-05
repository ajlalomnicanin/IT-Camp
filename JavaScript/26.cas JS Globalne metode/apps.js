// JavaScript Globalne metode

// Globalne metode mozemo primeniti na bilo koji tip podataka:

// Najpoznatije globalne metode:

// 1.Number()
// 2.parseFloat()
// 3.parseInt()

// 1.Number() - metoda vraca broj dobijen konvertovanjem argumenta.

console.log(Number("string")); //NaN
console.log(Number("123")); // 123
console.log(Number("34 43")); // NaN - Razmaci nisu ddozvoljeni izmedju dve reci(broja).
console.log(Number("  34  ")); // 34 - Brise razmake sa strana i prevodi string u broj

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number([1, 2])); // NaN
console.log(Number([])); // 0
console.log(Number({})); // NaN

// 2.parseFloat() - metoda vraca realan broj (sa decimalnim zapisom) dobijen konvertovanjem argumenta

console.log(parseFloat("string")); //NaN
console.log(parseFloat("123")); // 123
console.log(parseFloat("34.456")); //34.456
console.log(parseFloat("34 43")); // 34 - Razmaci su dozvoljeni. Konvertira samo prvi broj
console.log(parseFloat("  34  ")); // 34 - Brise razmake sa strana i prevodi string u broj
console.log(parseFloat("3asd4 43 ")); // 3 -Razmaci su dozvoljeni. Konvertira samo prvi broj
console.log(parseFloat("asd4 43 ")); // NaN

console.log(parseFloat(true)); // NaN
console.log(parseFloat(false)); // NaN
console.log(parseFloat([1, 2])); // 1 - vraca prvu vrdnost broja, a za slovo NaN
console.log(parseFloat([])); // NaN
console.log(parseFloat({})); // NaN

// 3.parseInt() - metoda vraca realan broj (ceo) dobijen konvertovanjem argumenta

console.log(parseInt("string")); //NaN
console.log(parseInt("123")); // 123
console.log(parseInt("34.456")); //34
console.log(parseInt("34 43")); // 34 - Razmaci su dozvoljeni. Konvertira samo prvi broj
console.log(parseInt("  34  ")); // 34 - Brise razmake sa strana i prevodi string u broj
console.log(parseInt("3asd4 43 ")); // 3 -Razmaci su dozvoljeni. Konvertira samo prvi broj
console.log(parseInt("asd4 43 ")); // NaN

console.log(parseInt(true)); // NaN
console.log(parseInt(false)); // NaN
console.log(parseInt([1, 2])); // 1 - vraca prvu vrdnost broja, a za slovo NaN
console.log(parseInt([])); // NaN
console.log(parseInt({})); // NaN

// Zadaci
// 1.Napravi funkciju koja pretvara km u m
// 2.Napravi funkciju koja pretvara m u km
// 3.Napravi funkciju koja pretvara inc u cm

function first(km) {
  const metri = km * 1000;
  return metri;
}
console.log(first("1.5"));
