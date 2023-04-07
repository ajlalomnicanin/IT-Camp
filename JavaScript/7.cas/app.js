// 1.korisnik unosi dva broja;
// na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// ispisuju se brojevi od manjeg ka vecem

const broj1 = Number(prompt("Unesite prvi broj"));
const broj2 = Number(prompt("Unesite drugi broj"));

if (isNaN(broj1) || isNaN(broj2)) {
  console.log("Morate uneti korektne brojeve");
} else if (broj1 < broj2) {
  for (let i = broj1; i <= broj2; i++) {
    console.log(i);
  }
} else if (broj2 < broj1) {
  for (let i = broj2; i <= broj1; i++) {
    console.log(i);
  }
} else if (broj1 === broj2) {
  console.log("Uneli ste iste brojeve");
}

// switch naredba
// console.log(new Date ().getDay());
// getDay()-daje vrednost od 0-6
// switch (new Date ().getDay())..
// na osnovu vrednosti koju nam daje izraz iz switch naredbe, kroz case ove i eventualno default
// "Danas je radni dan
// Ugodno provedite vikend

switch (new Date().getDay()) {
  case 0:
  case 6:
    console.log("Ugodno provedite vikend");
    break;
  default:
    console.log("Danas je radni dan");
}

// Prebrojati i sabrati brojeve deljive sa  5 u intervalu od 1 do n
console.log("------suma----");
const n = prompt(Unesite);
let suma = 0;
let nizBrojeva = 0;
for (let i = 1; (i = n); i++) {
  if (i % 5 === 0) {
    suma += i;
    nizBrojeva += 1;
  }
}
console.log(suma);
console.log(nizBrojeva);

console.log("----------");

// 1. Neka se izvrsi iteracija od broja 99 do -99
// Ispisati zbir broja deljivog sa 4 i broja 14

// ispisuje brojeve 10-1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 2.izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17
