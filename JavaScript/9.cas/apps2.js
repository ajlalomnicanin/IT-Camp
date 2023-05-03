//Domaci

// 1.Ispisati sve brojeve od 1 do 10 koji su parni

let i = 1;

while (i < 11) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

console.log("---1--");

for (i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
  }
  console.log(i);
}

console.log("---2----");
// 2.Korisnik unosi dva broja
// Na osnovu toga koji je broj manji iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi  od manjeg ka vecem

let broj1 = +prompt("Unesite prvi broj:");
let broj2 = +prompt("Unesite drugi broj:");
if (isNaN(broj1) || isNaN(broj2)) {
  console.log("Nepostojeci brojovi");
} else if (broj1 < broj2) {
  while (broj1 <= broj2) {
    console.log(broj1);
    broj1++;
  }
} else if (broj2 < broj1) {
  while (broj2 <= broj1) {
    console.log(broj2);
    broj2++;
  }
} else {
  console.log("Uneli ste iste brojeve");
}

console.log("----3----");
broj1 = +prompt("Unesite prvi broj:");
broj2 = +prompt("Unesite drugi broj:");

let start, end;
if (broj1 <= broj2) {
  start = broj1;
  end = broj2;
} else {
  start = broj2;
  end = broj1;
}
for (i = start; i <= end; i++) {
  console.log(i);
}

console.log("----Vezbanje-1---");

// 1.Ispišite sve brojeve od 1 do 10 koristeći while petlju.
i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("----Vezbanje-2---");

// 2.Ispišite sve parne brojeve od 1 do 20 koristeći while petlju.

i = 1;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

console.log("----Vezbanje-3---");
// 3.Zatražite od korisnika da unese broj. Ispišite sve brojeve od 1 do tog broja koristeći while petlju.

let num = +prompt("Unesite broj:");
i = 1;

while (i <= num) {
  console.log(i);
  i++;
}

console.log("----Vezbanje-4---");
// 4.Zatražite od korisnika da unese broj. Ispišite sve brojeve od tog broja do 1 koristeći while petlju.

num2 = +prompt("Unesite broj!");

while (num2 >= 1) {
  console.log(num2);
  num2--;
}

console.log("----Vezbanje-5---");
// 5.Ispišite sve neparne brojeve od 50 do 100 koristeći while petlju.
i = 50;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

console.log("----Vezbanje-6---");
// 6.Zatražite od korisnika da unese početni i krajnji broj. Ispišite sve brojeve od početnog do krajnjeg broja koristeći while petlju.

Broj1 = +prompt("Unesite pocetni broj1:");
Broj2 = +prompt("Unesite krajnji broj2:");

while (Broj1 <= Broj2) {
  console.log(Broj1);
  Broj1++;
}

console.log("----Vezbanje-7---");
// 7.Ispišite sve brojeve u intervalu od 1 do 100 koji su djeljivi sa 7 koristeći while petlju.
i = 1;
while (i <= 100) {
  if (i % 7 === 0) {
    console.log(i);
  }
  i++;
}

console.log("----Vezbanje-8---");
// 8.Zatražite od korisnika da unese broj. Ispišite faktorijel tog broja koristeći while petlju.

brojj = +prompt("Unesite neki broj:");
faktorijel = 1;
i = 1;

while (i <= brojj) {
  faktorijel *= i;
  i++;
  console.log(i);
}
console.log("----Vezbanje-9---");
// 9.Zatražite od korisnika da unese broj. Ispišite znamenke tog broja u obrnutom redoslijedu koristeći while petlju.

console.log("----Vezbanje-10---");
// 10.Ispišite sve brojeve u intervalu od 10 do 1 koristeći while petlju
i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

console.log("---------11");
// 11.Izracunaj sumu svih brojeva u rasponu od 1 do 50 koji su deljivi sa 3

// suma = 0;
// while (i <= 50) {
//   if (i % 3 === 0) {
//     suma += i;
//   }
//   i++;
//   console.log(i);
// }

console.log("-------12");
//12.Ispisite sve brojeve u rasponu od 100 do 0 u koracima od 10
i = 100;
while (i <= 0) {
  console.log(i);
  i -= 10;
}

console.log("-------13");
// 13.ispisi poruku manji od 10 za brojeve manje od 10,jednak 10 za broj 10 i poruku veci od 10 za brojeve
// vece od 10
// i = 15;
// if (i < 10) {
//   while (i < 10) {
//     console.log("manji od 10");
//     i++;
//   }
// } else if (i = 10){
//   while (i = 10) {
//     console.log("jednak 10");
//     i++;
//   }
// } else {
//   console.log("veci od 10");
// }
i = 15;
while (i <= 15) {
  if (i <= 10) {
    console.log("Manji od 10");
  } else if (i === 10) {
    console.log("jednak 10");
  } else {
    console.log("Veci od 10");
  }
  i++;
}

console.log("---------14");
// 14.Ispisite sve  brojeve  od 1 do 100 ,ali umesto brojeva koji su deljivi sa tri napisi fizz
// sa 5 buzz a sa 3 i 5 fizz buzz
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  i++;
}

// 2.Korisnik unosi dva broja
// Na osnovu toga koji je broj manji iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi  od manjeg ka vecem

number1 = +prompt("Unesite broj111");
number2 = +prompt("Unesite broj222");

if (number1 <= number2) {
  while (number1 <= number2) {
    console.log(number1);
  }
  i++;
} else if (number >= number2) {
  while (number2 <= number1) {
    console.log(number2);
  }
  i++;
}

console.log("---------");

// 1.Traziti od korisnika da unese neki broj.
// Na osnovu te vrednosti izvrsiti kvadrat broojeva od 1 doo tog unetog broja

broj = +prompt("unesi broj");
i = 1;
while (i <= broj) {
  console.log(i * i);
  i++;
}

// Traziti unos brojeva od korisnika sve dok ne unese nulu:

// While petlja u JS je petlja koja se ponavlja sve dok je uslov koji je naveden u zagradama tacan .
// for petlja se koristi kada unapred znamo koliko puta petlja treba da se izvrsi ,dok se
//while petlja koristi kada ne znamo koliko puta petlja treba da se izvrsi, vec se izvrsava sve dok je uslov tacan.
// do while petlja kod nje blok koda unutar petlje se izvrsava barem jednom pre nego sto se proveri uslov.
