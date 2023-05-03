// Primer. Svaki karakter neke recenice neka se ispise jedan ispod drugog.
console.log("prva recenica-----");
const recenica =
  "U ponedeljak je neradni dan, to znaci da je nas sledeci cas u sredu.";

for (let i = 0; i <= recenica.length; i++) {
  console.log(recenica[i]);
}

console.log("recenica primer---------");

let primer = "Danas je lepo vreme.";
let primerr = primer.length;
for (i = 0; i <= primerr; i++) {
  console.log(primer[i]);
}

console.log("-------");
// Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog.
// Dok ako je neki karakter = "a", neka se ispise broj 5.
// A u slucaju da je karakter jednak "s", neka se ne ispise nista.

const recenica2 = prompt("Unesite neku recenicu: ");
const duzina = recenica2.length;
for (let i = 0; i < duzina; i++) {
  if (recenica2[i] === "a") {
    console.log(5);
  } else if (recenica2[i] === "s") {
    continue;
  } else {
    console.log(recenica2[i]);
  }
}

console.log("----------");

// Metoda toLowerCase() pretvara ceo string u mala slova:
console.log("NEKI STRING ZA PRETVARANJE U MALA SLOVA.".toLowerCase());

// Metoda toUpperCase() pretvara ceo string u velika slova:
console.log("neki string za pretvaranje u velika slova.".toUpperCase());

console.log("----------");

const recenica0 =
  "Zelimo DATu reCENIcu prikAzaTI MALIM, isto taKO i VELIkim slovima.";

console.log(recenica0.toLowerCase());
console.log(recenica0.toUpperCase());

console.log("----------")

// Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.
const recenica3 =
  "treba nam nova recenica gde svaka rec pocinje velikim slovom";

let recenica4 = "";
for (let i = 0; i < recenica3.length; i++) {
  if (i === 0) {
    recenica4 += recenica3[i].toUpperCase();
  } else if (recenica3[i - 1] === " ") {
    recenica4 += recenica3[i].toUpperCase();
  } else {
    recenica4 += recenica3[i];
  }
}
console.log(recenica4);

console.log("----------")
// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.
