// Search metode

const recenica = "danas je lep dan.";

// indexOf() metoda nam vraca poziciju karaktera (niza karaktera) koje smo poslali kao argument.
// Ako se argument nalazi vise puta unutar stringa dobijamo poziciju prvog pojavljivanja tog argumenta.
// Ako se argument ne nadje unutar stringa rezultat ce biti -1.

console.log(recenica.indexOf("d"));
console.log(recenica.indexOf("dan"));
console.log(recenica.indexOf("noc"));
console.log(recenica.indexOf("nas"));

// lastIndexOf() metoda nam vraca poziciju poslednjeg pojavljivanja karaktera (niza karaktera)
// koje smo poslali kao argument.
// Ako se argument ne nadje unutar stringa rezultat ce biti -1.

console.log(recenica.lastIndexOf("dan"));
console.log(recenica.lastIndexOf("lep"));
console.log(recenica.lastIndexOf("noc"));

// Ove metode prihvataju drugi argument, koji oznacava poziciju od koje pocinju trazenje.
// Napomena. Brojac se ne resetuje, ako krenemo od drugog argumenta da trazimo, i brojac ide od drugog broja.

console.log(recenica.indexOf("dan", 6));
console.log(recenica.indexOf("danas", 6));

// search() metoda takodje vraca poziciju trazenog stringa, s tim sto kod ove metode ne mozemo poslati
// drugi argument

console.log(recenica.search("dan"));
console.log(recenica.search("noc"));

console.log("search")
// startsWith() metoda proverava da li neki string pocinje argumentom koji joj saljemo. Vraca boolean (true
// ili false).
// Opciono mozemo poslati drugi argument koji ce da bude index od kog zelimo da trazimo pozociju nekog stringa.

console.log(recenica.startsWith("Danas"));
console.log(recenica.startsWith("je", 6));

//
// endsWith() metoda proverava da li neki string zavrsava argumentom koji joj saljemo. Vraca boolean
// (true ili false).
// Opciono mozemo poslati drugi argument koji predstavlja ukupnu duzinu datog stringa.

console.log(recenica.endsWith("dan"));
console.log(recenica.endsWith("dan."));

console.log(recenica.length);
console.log(recenica.endsWith("dan", 15)); // false
console.log(recenica.endsWith("dan", 16)); // true

// Zadatak : Izdvajanje podstringa
// Napisi funkciju koja prima tri argumenta: originalni string, pocetni index i krajnji index.
// Funkcija treba da izdvoji podstringove iz originalnog stringa koji se nalazi izmedju pocetnog i krajnjeg
// indexa (ukljucujuci oba indexa) i vrati taj podstring. Na primer, za ulazne vrednosti "Hello, World",7 i 11,
// funkcija treba da vrati "World"
function funkcija1(string, index1, index2) {
  return string.slice(index1, index2 + 1);
}
console.log(funkcija1("Hello, World", 7, 11));
//prvi nacin

const deoStringa = (string, pocetak, kraj) => {
  return string.substr(pocetak, kraj + 1 - pocetak);
};
// drugi nacin

function funkcija2(stringGlavni, index3, index4) {
  let string = "";
  for (let i = index3; i <= index4; i++) {
    string += stringGlavni[i];
  }
  return string;
}
console.log(funkcija2("Hello, World", 7, 11));
