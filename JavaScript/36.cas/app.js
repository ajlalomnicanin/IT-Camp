// keys() metoda vraca Array Iterator Object kljuceva nekog niza.

const grupa = ["Emir", "Ajsa", "Selver", "Asija"];
//               0        1       2         3
const kljucevi = grupa.keys(); //vraca poziciju 0,1,2,3 odnosno niz kljuceva

console.log(kljucevi);

for (let kljuc of kljucevi) {
  console.log(kljuc);
}

// enteries() metoda vraca Array Iterator Object key/value nekog niza.

const parovi = grupa.entries();

console.log(parovi);

for (let par of parovi) {
  console.log(par);
}

// callback funkcija predstavlja funkciju koju saljemo kao argument neke metode odnosno neke druge (funkcije).

function glavnaFunkcija(callback) {
  console.log("Pocetak posla glavne funkcije.");
  callback();
  console.log("Kraj posla glavne funkcije.");
}

function pomocna() {
  console.log("Ovo je radnja iz callback funkcije.");
}

glavnaFunkcija(pomocna);

//Zadatak. Napravi glavnu funkciju koja ima callback funkciju, i jos dva argumenta (broj). callback
// funkcija treba da ispise prvi broj stepenovanja sa drugim

function glavnaFunkcija(callback, broj1, broj2) {
  callback(broj1, broj2);
}
function callback(broj1, broj2) {
  console.log(Math.pow(broj1, broj2));
}
glavnaFunkcija(callback, 4, 2);

// ili

const main = (callback, num1, num2) => {
  return callback(num1, num2);
};
console.log(main((a, b) => a ** b, 3, 2));
