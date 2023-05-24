// Napiši funkciju zamijeniSlova(slovo, tekst) koja će zamijeniti sve pojavljivanja određenog
// slova u tekstu sa znakom "_". Na primjer, ako je slovo "a" i tekst "banana", rezultat bi trebao
// biti "n_n".

const zamijeniSlova = (slovo, tekst) => {
  let string = tekst.replace(new RegExp(slovo, "g"), "-");
  return string;
};
console.log(zamijeniSlova("a", "banana"));

// new RegExp();

// Funkcija RegExp() vraća objekt regulara izraza. U ovom slučaju će funkcija RegExp() vraćati
// objekt izraza /a/g (sve veličine slova u tekstu će biti zamijenjene znakom "_").
// Funkcija zamijeniSlova(slovo, tekst) će zamijeniti sve pojavljivanja određenog slova u tekstu sa
// znakom "_". Na primjer, ako je slovo "a" i tekst "banana", rezultat bi trebao biti "n_n".

// Zadatak:
// Napišite funkciju zamijeniSlovaNaParnimMjestima(tekst) koja će zamijeniti sva slova na parnim pozicijama
// (indeksima) u tekstu znakom "-". Prvi znak (indeks 0) ne treba mijenjati.
function zamijeniSlovaNaParnimMjestima(tekst) {
  let rezultat = tekst[0];
  for (i = 1; i < tekst.length; i++) {
    if (i % 2 === 0) {
      rezultat += "-";
    } else {
      rezultat += tekst[i];
    }
  }
  return rezultat;
}
console.log(zamijeniSlovaNaParnimMjestima("opennn"));

// Zadatak: Napravite funkciju prebrojSlova(slovo, tekst) koja će
//  prebrojati koliko puta se određeno slovo pojavljuje u tekstu koristeći metodu charAt

function prebrojSlova(slovo, tekst) {
  let brojac = 0;
  for (let i = 0; i < tekst.length; i++) {
    if (tekst.charAt(i) === slovo) {
      brojac++;
    }
  }
  return brojac;
}
console.log(prebrojSlova("a", "banana"));

// Zadatak: Napravite funkciju brojVelikihSlova(tekst) koja će prebrojati koliko
//  velikih slova se pojavljuje u tekstu koristeći metodu charAt i provjeru pomoću ASCII vrijednosti slova.

function brojVelikihSlova(tekst) {
  let brojac = 0;
  for (let i = 0; i < tekst.length; i++) {
    let tekst1 = tekst.charAt(i);
    if (tekst1 >= "A" && tekst1 <= "Z") {
      brojac++;
    }
  }
  return brojac;
}
console.log(brojVelikihSlova("HellO"));
