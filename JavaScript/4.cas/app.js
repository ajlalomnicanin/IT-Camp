// Kondicionali:

//

if ("prvi uslov") {
  // blok koda za izvrsavanje u slucaju da je zadovoljen prvi uslov.
} else if ("drugi uslov") {
  // blok koda za izvrsavanje u slucaju da je zadovoljen drugi uslov.
} else {
  // blok koda koji ce se izvrsiti u slucaju da sve prethodno nije zadovoljeno.
}

// Ako je broj godina >= 18, nek se ispise poruka "punoletni ste"
// nek se ispise poruka "maloletni ste"
const brojGodina = 26;
if (brojGodina >= 18) {
  console.log("punoletni ste");
} else {
  console.log("maloletni ste");
}

// 2. zadatak
// Na osnovu dve promenljive x i y napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule, a inace ispisuje poruku:
// Deljenje je nemoguce:
let x = 16;
let y = 2;
//  jedan znak = dodeljivanje vrednosti
if (y === 0) {
  console.log("Deljenje je nemoguce");
} else {
  console.log(x / y);
}

// Na osnovu promenljive brojGodina ispisati u konzoli sledece:
// ako je broj godina manji od 12: Vi ste decijeg doba"
// ako je broj godina izmedju 12 (ukljucuje) i 18(ne ukljucuje):
// Vi ste maloletni
//  ako je broj godina izmedju 18 (ukljucuje) i 40(ne ukljucuje):
// Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba

const BrojGodina = 40;

if (BrojGodina < 12) {
  console.log("Vi ste decijeg doba!!");
} else if (BrojGodina >= 12 && BrojGodina < 18) {
  console.log("Vi ste maloletni!!  ");
} else if (BrojGodina >= 18 && BrojGodina < 40) {
  console.log("Vi ste punoletni!!");
} else if (BrojGodina >= 40) {
  console.log("Vi ste zrela osoba");
}
