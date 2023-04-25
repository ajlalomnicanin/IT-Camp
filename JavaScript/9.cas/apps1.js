for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("---------");

// while petlja se takodje koristi za interaciju kroz neki objekat i izvrsavanje odredjenog koda.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do while petlja se koristi za interaciju kroz neki objekat, sa tim sto u ovakvoj petlji imamo prvo izvrsavanje
// koda pa tek onda ispitivanje uslova
// i = 5;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

i = 15;
do {
  console.log(i);
  i++;
} while (i <= 10);

// ZADACI

// 1.Traziti od korisnika da unese neki broj.
// Na osnovu te vrednosti izvrsiti kvadrat broojeva od 1 doo tog unetog broja

console.log("------");
const broj2 = +prompt("Unesite neki broj:");
i = 1;
while (i <= broj2) {
  console.log(i ** 2);
  i++;
}

// 2. Traziti unos brojeva od korisnika sve dok ne unese nulu:

let vrednost = 1; //sve sem nula
while (vrednost !== 0) {
  vrednost = +prompt("Unesite neki broj:");
}


