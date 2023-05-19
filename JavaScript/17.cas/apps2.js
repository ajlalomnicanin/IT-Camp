// Domaci:
// Zadatak: Spajanje stringova
// Napiši funkciju koja prima dva stringa kao argumenta i vraća njihovu konkatenaciju.
// Na primer, za ulazne vrednosti "Hello" i "World!", funkcija treba da vrati "HelloWorld!".

function funkcija1(string1, string2) {
  stringovi = string1.concat(string2);
  return stringovi;
}
console.log(funkcija1("Hello", "World"));

function funkcija(string, stringg) {
  stringovii = string + stringg;
  let noviString = "";
  // for (let i = 0; i)
}
// Zadatak: Palindrom
// Napiši funkciju koja prima jedan string kao argument i proverava da li je taj string palindrom,
// tj. da li se čita isto i s leva na desno i s desna na levo.
// Funkcija treba da vrati true ako je string palindrom, inače false.
// Na primer, za ulazni string "radar" funkcija treba da vrati true, dok za ulazni string "hello" funkcija treba da vrati false.

function funkcija2(string3) {
  let palindrom = "";
  for (let i = string3.length - 1; i >= 0; i--) {
    palindrom += string3[i];
  }
  // return palindrom
  return palindrom === string3;
}

console.log(funkcija2("radar"));
console.log(funkcija2("hello"));

// moze i ovako umesto palindrom===string3
// if (palindrom === obrnutiString) {
//   return true;
// } else {
//   return false;
// }
