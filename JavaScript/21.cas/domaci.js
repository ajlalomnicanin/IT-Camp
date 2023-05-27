// Domaci zadaci:
// 1.	Sva velika slova u stringu treba svesti na mala slova.
//  Npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'.
// Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

function funkcija1(string) {
  let malaSlova = "";
  if ((string >= "a" && string <= "z") || (string >= "A" && string <= "Z")) {
    malaSlova = string.toLowerCase();
  }
  return malaSlova;
}
console.log(funkcija1("WEBnSTUDY.com"));

// 2.	Pronaći poziciju poslednjeg razmaka u stringu. Npr. za uneto
//  'Pera ima devojku', rezultat je 8.

function funkcija2(string) {
  let razmak = string.lastIndexOf(" ");
  return razmak;
}
console.log(funkcija2("Pera ima devojku"));
console.log(funkcija2("danas je lep dan"));

// 3.	Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4.
// Podrazumeva se da uneti string nema vodeće razmake.

function funkcija3(string) {
  let splitMetoda = string.split(" ");
  let duzina = splitMetoda[0].length;
  return duzina;
}
console.log(funkcija3("Pera ima devojku"));

const rec = (recenica) => {
  const prviRazmak = recenica.indexOf(" ");
  const prvaRec = recenica.slice(0, prviRazmak);
  return prvaRec.length;
};
console.log(rec("Pera ima devojku."));

