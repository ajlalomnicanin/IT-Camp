// Ispisati brojeve od 1 do 10 u konsoli.

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

console.log("----------");

// Za ispis vise brojeva mnogo je lakse da koristimo neku petlju.

// For petlja
// for(statement1;statement2;statement3){
// blok koda za izvrsavanje u svakoj iteraciji
// }

// statement1 je deo koda koji se izvrsava samo na pocetku petlje, i pn predtsvlja definisane iteratora.
// statement2 predstavlja uslov za izvrsavanje petlje
// statement3 predstavlja promenu vrednosti iteratora

// 1. nacin
// i ++ === i = i + 1 (i = prosla vrednost i na nju dodajemo 1)
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("-----------");
//ispisati brojeve od 1 do 10 izuzev broja 2 i 5

for (let i = 1; i < 11; i++) {
  if (i !== 2 && i != 5) {
    console.log(i);
  }
}

// constinue keyword koristimo kada zelimo da izbegnemo neki slucaj i da se osvrnemo na narednu iteraciju
// 2.nacin
// for(let i = 1;i<=10; i++){
//     if (i === 2 ; || i===5) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// break koristimo kada zelimo da prekinemo petlju\

// ispisati sve brojeve od 1 do 10. ako je neki broj deljiv sa 7 neka se prekine petlja.
for (let i = 1; i <= 10; i++) {
  if (i / 7 === 0) {
    console.log(i);
  }
}
console.log("---------");
// NIJE MI JASNO I STO SE STAVLJA ===0
// Ispisati parne brojeve od 1 do 20 na dva nacina.
// 1.nacin
//  i % 2 === ostatak i pri deljenju je jednak nuli, onda dobijamo parne brojeve
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log("---------");
// 2.nacin
// i = i + 2 ===  i += 2
for (let i = 2; i < 21; i += 2) {
  console.log(i);
}
console.log("---------");
// ispisati dvostruku vrednost prirodnih brojeva od 6 do 14
for (i = 6; i < 15; i++) {
  console.log(2 * i);
}
console.log("domaci");

// DOMACI
// 1. Ispisati neparne brojeve od 1 do 20 na dva nacina;
// prvi nacin
for (let i = 1; i < 21; i += 2) {
  console.log(i);
}

console.log("drugi nacin");

// drugi nacin NE ZNAM
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0);
  {
    console.log(i);
  }
}
// != za neparne brojeve
// === za parne brojeve
console.log("-----------");
// 2.ispisati sve brojeve od 50 do 100, koji su deljivi sa 5.
for (let i = 50; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
// da li je levA STRANA JEDNAKA desnoj ako je taj uslov zadovoljen
// 4.suma neparnih prirodnih brojeva od 10 do 20

let zbir = 0;
for (let i = 11; i < 20; i += 2) {
  zbir += i;
}
console.log(zbir);
